var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomChevronElement_1;
import CSSReflectionMixin from '../../../mixins/css-reflection-mixin';
const { customElement, property } = Polymer.decorators;
const SVG = (window.svgjs || window.SVG);
/**
 * @customElement
 * @polymer
 */
let AtomChevronElement = AtomChevronElement_1 = class AtomChevronElement extends CSSReflectionMixin(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        /**
         * The direction the chevron should point.
         */
        this.direction = 'right';
        this.noAutoRender = false;
    }
    /**
     * Creates a new chevron shape as an SVG.js Polygon.
     * The chevron always points right.
     * If you need it to point another way, apply a transform to it.
     * @param width - How wide, in pixels, to draw the chevron.
     * @param height - How tall, in pixels, to draw the chevron.
     * @param thickness - How thick, in pixels, to draw the chevron.
     * @param fillColor - The color to apply to the interior of the chevron.
     * @param strokeSize - The thickness of the chevron border.
     * @param strokeColor - The color to apply to the border of the chevron.
     * @returns The constructed SVG.js Polygon instance.
     */
    static createChevron({ width, height, thickness, fillColor, strokeSize, strokeColor }) {
        const chevron = new SVG.Polygon();
        const pointArray = AtomChevronElement_1.createChevronPointArray({ width, height, thickness });
        chevron.plot(pointArray);
        chevron.fill(fillColor);
        if (strokeSize > 0) {
            chevron.stroke({ width: strokeSize, color: strokeColor });
        }
        return chevron;
    }
    static createChevronPointArray({ width, height, thickness }) {
        return new SVG.PointArray([
            [0, 0],
            [thickness, 0],
            [width, height / 2],
            [thickness, height],
            [0, height],
            [width - thickness, height / 2]
        ]);
    }
    ready() {
        super.ready();
        this.svgDoc = SVG(this.shadowRoot);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.noAutoRender) {
            if (document.readyState === 'complete') {
                Polymer.RenderStatus.afterNextRender(this, this.render);
            }
            else {
                window.addEventListener('load', () => {
                    Polymer.RenderStatus.afterNextRender(this, this.render);
                });
            }
        }
    }
    render(width, height) {
        this.svgDoc.clear();
        /* tslint:disable:no-parameter-reassignment */
        width = typeof width === 'number' ? width : this.scrollWidth;
        height = typeof height === 'number' ? height : this.clientHeight;
        /* tslint:enable:no-parameter-reassignment */
        const strokeSize = parseInt(this.readCSSCustomProperty('--atom-chevron-stroke-size', AtomChevronElement_1.DEFAULT_STROKE_SIZE), 10);
        const thickness = parseInt(this.readCSSCustomProperty('--atom-chevron-thickness', AtomChevronElement_1.DEFAULT_THICKNESS), 10);
        this.svgDoc.size(width, height);
        const chevron = AtomChevronElement_1.createChevron({
            width: width - strokeSize,
            height: height - strokeSize,
            thickness,
            fillColor: this.readCSSCustomProperty('--atom-chevron-fill-color'),
            strokeSize,
            strokeColor: this.readCSSCustomProperty('--atom-chevron-stroke-color')
        });
        chevron.move(strokeSize / 2, strokeSize / 2);
        this.chevron = chevron;
        this.svgDoc.add(chevron);
        if (this.direction === 'left' && this._lastDirection !== 'left') {
            this.svgDoc.transform({ scaleX: -1 });
            this._lastDirection = 'left';
        }
    }
};
AtomChevronElement.DEFAULT_THICKNESS = 6;
AtomChevronElement.DEFAULT_STROKE_SIZE = 1;
__decorate([
    property({ type: String, reflectToAttribute: true })
], AtomChevronElement.prototype, "direction", void 0);
__decorate([
    property({ type: Boolean })
], AtomChevronElement.prototype, "noAutoRender", void 0);
AtomChevronElement = AtomChevronElement_1 = __decorate([
    customElement('atom-chevron')
], AtomChevronElement);
export default AtomChevronElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1jaGV2cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvbS1jaGV2cm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLGtCQUFrQixNQUFNLHNDQUFzQyxDQUFDO0FBRXRFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxDQUFFLE1BQWMsQ0FBQyxLQUFLLElBQUssTUFBYyxDQUFDLEdBQUcsQ0FBa0IsQ0FBQztBQUU1RTs7O0dBR0c7QUFFSCxJQUFxQixrQkFBa0IsMEJBQXZDLE1BQXFCLGtCQUFtQixTQUFRLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFMbkY7OztPQUdHO0lBQ0g7O1FBS0M7O1dBRUc7UUFFSCxjQUFTLEdBQXFCLE9BQU8sQ0FBQztRQUd0QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQWlIdEIsQ0FBQztJQTFHQTs7Ozs7Ozs7Ozs7T0FXRztJQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDcEIsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBUVg7UUFDQSxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFVBQVUsR0FBRyxvQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUMxRixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMs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