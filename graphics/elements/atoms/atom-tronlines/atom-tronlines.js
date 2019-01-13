var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomTronlinesElement_1;
import Random from '../../../../shared/lib/vendor/random';
import * as createjs from '@createjs/easeljs';
import * as d3 from 'd3-random';
const { customElement, property, observe } = Polymer.decorators;
const fooMap = new WeakMap();
/**
 * @customElement
 * @polymer
 */
let AtomTronlinesElement = AtomTronlinesElement_1 = class AtomTronlinesElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        /**
         * The width of the canvas.
         */
        this.width = 450;
        /**
         * The height of the canvas.
         */
        this.height = 300;
        /**
         * The solid background color of the canvas.
         */
        this.backgroundColor = '#050505';
        /**
         * The direction of travel for the nodes.
         * Can be one of "up", "down", "left", or "right".
         */
        this.direction = 'up';
        /**
         * The width and height of each node, in pixels.
         */
        this.nodeSize = 2;
        /**
         * Nodes created per second.
         */
        this.creationRate = 20;
        /**
         * Expected distance traveled per frame, in pixels.
         * This is the "mu" value of the normal distribution.
         */
        this.speed = 1.5;
        /**
         * Variance in speed per node.
         * This is the "sigma" of the normal distribution.
         */
        this.speedRandomness = 0.25;
        /**
         * Expected distance tail length, in pixels.
         * This is the "mu" value of the normal distribution.
         */
        this.tailLength = 200;
        /**
         * Variance in tail length per node.
         * This is the "sigma" of the normal distribution.
         */
        this.tailLengthRandomness = 5;
        /**
         * The opacity of each node at the start of its path.
         */
        this.opacityStart = 0.5;
        /**
         * The opacity of each node at the end of its path.
         */
        this.opacityEnd = 0.2;
        /**
         * The color of the head of each node.
         */
        this.nodeColor = '#6082d6';
        /**
         * The starting color of the tail of each node.
         */
        this.tailStartColor = '#02a6ff';
        /**
         * The ending color of the tail of each node.
         */
        this.tailEndColor = '#0079ff';
        this.debug = false;
        /**
         * An array containing all nodes currently being drawn to the stage.
         */
        this._allocatedNodes = new Set();
        /**
         * An array containing all nodes currently unallocated.
         */
        this._freeNodes = new Set();
    }
    static getRandomUniform(min = 0, max = 1) {
        return Random.real(min, max, true)(Random.engines.browserCrypto);
    }
    ready() {
        super.ready();
        let frameCounter = 0;
        let warnedLeak = false;
        const stage = new createjs.Stage(this.$.canvas);
        const bg = new createjs.Shape();
        this.bgFillCommand = bg.graphics
            .beginFill(this.backgroundColor).command;
        this.bgRectCommand = bg.graphics
            .drawRect(0, 0, this.width, this.height).command;
        stage.addChild(bg);
        this.stage = stage;
        const handleFrame = () => {
            if (window.__SCREENSHOT_TESTING__) {
                this.clear();
                stage.update();
                return;
            }
            this.advanceSimulation();
            if (this.debug) {
                const totalNodes = this._allocatedNodes.size + this._freeNodes.size;
                this.$.debugInfo.textContent = `${this._allocatedNodes.size}/${totalNodes}`;
            }
            frameCounter++;
            if (frameCounter > 60) {
                frameCounter = 0;
                if (this._allocatedNodes.size > AtomTronlinesElement_1.WARNING_THRESHOLD) {
                    if (!warnedLeak) {
                        console.warn('More than %d nodes are active, this is probably a leak!', AtomTronlinesElement_1.WARNING_THRESHOLD, this);
                        warnedLeak = true;
                    }
                }
                else {
                    warnedLeak = false;
                }
            }
            stage.update();
            requestAnimationFrame(handleFrame);
        };
        handleFrame();
        setInterval(() => {
            this._sweepExcessFreeNodes();
        }, 10000);
    }
    /**
     * Advances the simulation by one tick.
     * In most cases, this means one frame in a 60fps simulation.
     */
    advanceSimulation() {
        const opacityRange = Math.abs(this.opacityStart - this.opacityEnd);
        const tickTime = Date.now();
        const TIME_PER_TICK_IDEAL = 1000 / 60;
        Array.from(this._allocatedNodes).forEach((node) => {
            const metadata = fooMap.get(node);
            let percent = 1;
            if (metadata.lastTickTime) {
                percent = (tickTime - metadata.lastTickTime) / TIME_PER_TICK_IDEAL;
            }
            node.y -= metadata.speed * percent;
            const journeyPercentage = 1 - (node.y / (this._invertDimensions ? this.width : this.height));
            node.alpha = this.opacityStart - (opacityRange * journeyPercentage);
            metadata.lastTickTime = tickTime;
            // If a node's alpha is less than zero, remove it.
            // Or a node has completely scrolled off the canvas, remove it.
            if (node.alpha <= 0 || (node.y + metadata.tailLength) <= 0) {
                this._freeNode(node);
            }
        });
    }
    /**
     * Clears all nodes from the canvas.
     * @param deep - If true, also deletes all created nodes in the freeNodes pool.
     */
    clear(deep) {
        this._freeAllNodes();
        if (deep) {
            this._freeNodes = new Set();
        }
    }
    _creationRateChanged(newVal) {
        if (this._creationInterval) {
            clearInterval(this._creationInterval);
        }
        this._creationInterval = window.setInterval(() => {
            if (this._freeNodes.size <= 0) {
                this._createBlockOfFreeNodes(AtomTronlinesElement_1.BLOCK_SIZE);
            }
            const node = this._freeNodes.values().next().value;
            this._allocateNode(node);
        }, (1000 / newVal));
    }
    /**
     * Creates and adds a block of new nodes to the _freeNodes array.
     * @param blockSize - The number of nodes to add.
     */
    _createBlockOfFreeNodes(blockSize) {
        for (let i = 0; i < blockSize; i++) {
            this._freeNodes.add(this._createNode());
        }
    }
    /**
     * Creates a new node instance.
     * @returns The created node instance.
     */
    _createNode() {
        const shape = new createjs.Shape();
        const maxTailLength = this.tailLength + this.tailLengthRandomness;
        // The typings for the getRGB method are currently incorrect, so just ignore them.
        const tailMidColor = createjs.Graphics.getRGB(parseInt(this.tailEndColor.slice(1), 16), 0.5);
        const tailEndColor = createjs.Graphics.getRGB(parseInt(this.tailEndColor.slice(1), 16), 0);
        const metadata = {
            tailGradientCommand: shape.graphics
                .beginLinearGradientFill([this.tailStartColor, tailMidColor, tailEndColor], [0, 0.5, 1], 0, 0, 0, maxTailLength).command,
            tailRectCommand: shape.graphics
                .drawRect(0, 0, this.nodeSize, 0).command,
            tailLength: 0,
            speed: 0,
            lastTickTime: null
        };
        fooMap.set(shape, metadata);
        shape.graphics
            .beginFill(this.nodeColor)
            .drawRect(0, 0, this.nodeSize, this.nodeSize);
        shape.cache(0, 0, this.nodeSize, maxTailLength);
        return shape;
    }
    /**
     * Adds a node to the stage.
     * @param node - The node to add to the stage.
     */
    _allocateNode(node) {
        const tailLength = this._getRandomTailLength();
        const metadata = fooMap.get(node);
        metadata.tailGradientCommand.style.props.ratios[0] = Math.min(this.nodeSize / this.tailLength, 1);
        metadata.tailGradientCommand.style.props.y1 = tailLength;
        metadata.tailRectCommand.h = tailLength;
        metadata.tailLength = tailLength;
        metadata.speed = this._getRandomSpeed();
        metadata.lastTickTime = null;
        node.updateCache();
        node.alpha = this.opacityStart;
        node.y = this._invertDimensions ? this.width : this.height;
        node.x = AtomTronlinesElement_1.getRandomUniform(0, this._invertDimensions ? this.height : this.width);
        this.stage.addChild(node);
        this._freeNodes.delete(node);
        this._allocatedNodes.add(node);
    }
    /**
     * Removes all nodes from the stage, returning them to the pool.
     */
    _freeAllNodes() {
        this._allocatedNodes.forEach(node => {
            this._freeNode(node);
        });
    }
    /**
     * Frees a node, removing it from the stage and returning it to the pool.
     * @param node - The node to free.
     */
    _freeNode(node) {
        this.stage.removeChild(node);
        this._allocatedNodes.delete(node);
        this._freeNodes.add(node);
    }
    /**
     * Removes excess free nodes.
     * Excess free nodes are caused by tabbing away from the page,
     * or after lowering the node creation rate.
     */
    _sweepExcessFreeNodes() {
        if (this._freeNodes.size > AtomTronlinesElement_1.BLOCK_SIZE * 2) {
            const freeNodesToKeep = Array.from(this._freeNodes).slice(0, AtomTronlinesElement_1.BLOCK_SIZE);
            this._freeNodes = new Set(freeNodesToKeep);
        }
    }
    _computeRandomSpeedFunc(speed, speedRandomness) {
        return d3.randomNormal.source(AtomTronlinesElement_1.getRandomUniform)(speed, speedRandomness);
    }
    _computeRandomTailLengthFunc(tailLength, tailLengthRandomness) {
        return d3.randomNormal.source(AtomTronlinesElement_1.getRandomUniform)(tailLength, tailLengthRandomness);
    }
    _resizeCanvas(width, height, direction) {
        this.style.width = `${width}px`;
        this.style.height = `${height}px`;
        /* tslint:disable:no-parameter-reassignment */
        if (direction === 'left' || direction === 'right') {
            const temp = width;
            width = height;
            height = temp;
        }
        /* tslint:enable:no-parameter-reassignment */
        this.$.canvas.width = width;
        this.$.canvas.height = height;
        if (this.bgRectCommand) {
            this.bgRectCommand.w = width;
            this.bgRectCommand.h = height;
        }
    }
    _computeInvertDimensions(direction) {
        return direction === 'left' || direction === 'right';
    }
    _backgroundColorChanged(newValue) {
        if (!this.bgFillCommand) {
            return;
        }
        this.bgFillCommand.style = newValue;
    }
};
AtomTronlinesElement.BLOCK_SIZE = 50;
AtomTronlinesElement.WARNING_THRESHOLD = 500;
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "width", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "height", void 0);
__decorate([
    property({ type: Boolean, computed: '_computeInvertDimensions(direction)' })
], AtomTronlinesElement.prototype, "_invertDimensions", void 0);
__decorate([
    property({ type: String, observer: AtomTronlinesElement_1.prototype._backgroundColorChanged })
], AtomTronlinesElement.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], AtomTronlinesElement.prototype, "direction", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "nodeSize", void 0);
__decorate([
    property({ type: Number, observer: AtomTronlinesElement_1.prototype._creationRateChanged })
], AtomTronlinesElement.prototype, "creationRate", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "speed", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "speedRandomness", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "tailLength", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "tailLengthRandomness", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "opacityStart", void 0);
__decorate([
    property({ type: Number })
], AtomTronlinesElement.prototype, "opacityEnd", void 0);
__decorate([
    property({ type: String })
], AtomTronlinesElement.prototype, "nodeColor", void 0);
__decorate([
    property({ type: String })
], AtomTronlinesElement.prototype, "tailStartColor", void 0);
__decorate([
    property({ type: String })
], AtomTronlinesElement.prototype, "tailEndColor", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], AtomTronlinesElement.prototype, "debug", void 0);
__decorate([
    property({ type: Object, computed: '_computeRandomSpeedFunc(speed, speedRandomness)' })
], AtomTronlinesElement.prototype, "_getRandomSpeed", void 0);
__decorate([
    property({ type: Object, computed: '_computeRandomTailLengthFunc(tailLength, tailLengthRandomness)' })
], AtomTronlinesElement.prototype, "_getRandomTailLength", void 0);
__decorate([
    observe('width', 'height', 'direction')
], AtomTronlinesElement.prototype, "_resizeCanvas", null);
AtomTronlinesElement = AtomTronlinesElement_1 = __decorate([
    customElement('atom-tronlines')
], AtomTronlinesElement);
export default AtomTronlinesElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS10cm9ubGluZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdG9tLXRyb25saW5lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sc0NBQXNDLENBQUM7QUFDMUQsT0FBTyxLQUFLLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoQyxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFJN0I7OztHQUdHO0FBRUgsSUFBcUIsb0JBQW9CLDRCQUF6QyxNQUFxQixvQkFBcUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUxqRTs7O09BR0c7SUFDSDs7UUFLQzs7V0FFRztRQUVILFVBQUssR0FBRyxHQUFHLENBQUM7UUFFWjs7V0FFRztRQUVILFdBQU0sR0FBRyxHQUFHLENBQUM7UUFLYjs7V0FFRztRQUVILG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBRTVCOzs7V0FHRztRQUVILGNBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUI7O1dBRUc7UUFFSCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWI7O1dBRUc7UUFFSCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQjs7O1dBR0c7UUFFSCxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRVo7OztXQUdHO1FBRUgsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkI7OztXQUdHO1FBRUgsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUVqQjs7O1dBR0c7UUFFSCx5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFFSCxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUVuQjs7V0FFRztRQUVILGVBQVUsR0FBRyxHQUFHLENBQUM7UUFFakI7O1dBRUc7UUFFSCxjQUFTLEdB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