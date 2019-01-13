var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomChevronElement_1;
import CSSReflectionMixin from "../../../mixins/css-reflection-mixin.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SVG = window.svgjs || window.SVG;
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


  static createChevron({
    width,
    height,
    thickness,
    fillColor,
    strokeSize,
    strokeColor
  }) {
    const chevron = new SVG.Polygon();
    const pointArray = AtomChevronElement_1.createChevronPointArray({
      width,
      height,
      thickness
    });
    chevron.plot(pointArray);
    chevron.fill(fillColor);

    if (strokeSize > 0) {
      chevron.stroke({
        width: strokeSize,
        color: strokeColor
      });
    }

    return chevron;
  }

  static createChevronPointArray({
    width,
    height,
    thickness
  }) {
    return new SVG.PointArray([[0, 0], [thickness, 0], [width, height / 2], [thickness, height], [0, height], [width - thickness, height / 2]]);
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
      } else {
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
      this.svgDoc.transform({
        scaleX: -1
      });
      this._lastDirection = 'left';
    }
  }

};
AtomChevronElement.DEFAULT_THICKNESS = 6;
AtomChevronElement.DEFAULT_STROKE_SIZE = 1;

__decorate([property({
  type: String,
  reflectToAttribute: true
})], AtomChevronElement.prototype, "direction", void 0);

__decorate([property({
  type: Boolean
})], AtomChevronElement.prototype, "noAutoRender", void 0);

AtomChevronElement = AtomChevronElement_1 = __decorate([customElement('atom-chevron')], AtomChevronElement);
export default AtomChevronElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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