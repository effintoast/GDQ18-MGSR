var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomTronlinesElement_1;
import Random from "../../../../shared/lib/vendor/random.js";
import * as createjs from "/bundles/gdqx18-layouts/node_modules/@createjs/easeljs/dist/easeljs.module.js";
import * as d3 from "/bundles/gdqx18-layouts/node_modules/d3-random/src/index.js";
const {
  customElement,
  property,
  observe
} = Polymer.decorators;
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
    this.bgFillCommand = bg.graphics.beginFill(this.backgroundColor).command;
    this.bgRectCommand = bg.graphics.drawRect(0, 0, this.width, this.height).command;
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
        } else {
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
    Array.from(this._allocatedNodes).forEach(node => {
      const metadata = fooMap.get(node);
      let percent = 1;

      if (metadata.lastTickTime) {
        percent = (tickTime - metadata.lastTickTime) / TIME_PER_TICK_IDEAL;
      }

      node.y -= metadata.speed * percent;
      const journeyPercentage = 1 - node.y / (this._invertDimensions ? this.width : this.height);
      node.alpha = this.opacityStart - opacityRange * journeyPercentage;
      metadata.lastTickTime = tickTime; // If a node's alpha is less than zero, remove it.
      // Or a node has completely scrolled off the canvas, remove it.

      if (node.alpha <= 0 || node.y + metadata.tailLength <= 0) {
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
    }, 1000 / newVal);
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
    const maxTailLength = this.tailLength + this.tailLengthRandomness; // The typings for the getRGB method are currently incorrect, so just ignore them.

    const tailMidColor = createjs.Graphics.getRGB(parseInt(this.tailEndColor.slice(1), 16), 0.5);
    const tailEndColor = createjs.Graphics.getRGB(parseInt(this.tailEndColor.slice(1), 16), 0);
    const metadata = {
      tailGradientCommand: shape.graphics.beginLinearGradientFill([this.tailStartColor, tailMidColor, tailEndColor], [0, 0.5, 1], 0, 0, 0, maxTailLength).command,
      tailRectCommand: shape.graphics.drawRect(0, 0, this.nodeSize, 0).command,
      tailLength: 0,
      speed: 0,
      lastTickTime: null
    };
    fooMap.set(shape, metadata);
    shape.graphics.beginFill(this.nodeColor).drawRect(0, 0, this.nodeSize, this.nodeSize);
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

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "width", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "height", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeInvertDimensions(direction)'
})], AtomTronlinesElement.prototype, "_invertDimensions", void 0);

__decorate([property({
  type: String,
  observer: AtomTronlinesElement_1.prototype._backgroundColorChanged
})], AtomTronlinesElement.prototype, "backgroundColor", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], AtomTronlinesElement.prototype, "direction", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "nodeSize", void 0);

__decorate([property({
  type: Number,
  observer: AtomTronlinesElement_1.prototype._creationRateChanged
})], AtomTronlinesElement.prototype, "creationRate", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "speed", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "speedRandomness", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "tailLength", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "tailLengthRandomness", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "opacityStart", void 0);

__decorate([property({
  type: Number
})], AtomTronlinesElement.prototype, "opacityEnd", void 0);

__decorate([property({
  type: String
})], AtomTronlinesElement.prototype, "nodeColor", void 0);

__decorate([property({
  type: String
})], AtomTronlinesElement.prototype, "tailStartColor", void 0);

__decorate([property({
  type: String
})], AtomTronlinesElement.prototype, "tailEndColor", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], AtomTronlinesElement.prototype, "debug", void 0);

__decorate([property({
  type: Object,
  computed: '_computeRandomSpeedFunc(speed, speedRandomness)'
})], AtomTronlinesElement.prototype, "_getRandomSpeed", void 0);

__decorate([property({
  type: Object,
  computed: '_computeRandomTailLengthFunc(tailLength, tailLengthRandomness)'
})], AtomTronlinesElement.prototype, "_getRandomTailLength", void 0);

__decorate([observe('width', 'height', 'direction')], AtomTronlinesElement.prototype, "_resizeCanvas", null);

AtomTronlinesElement = AtomTronlinesElement_1 = __decorate([customElement('atom-tronlines')], AtomTronlinesElement);
export default AtomTronlinesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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