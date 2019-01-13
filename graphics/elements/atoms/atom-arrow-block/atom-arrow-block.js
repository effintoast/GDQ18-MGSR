var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomArrowBlockElement_1;
import CSSReflectionMixin from "../../../mixins/css-reflection-mixin.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SVG = window.SVG;
/**
 * @customElement
 * @polymer
 */

let AtomArrowBlockElement = AtomArrowBlockElement_1 = class AtomArrowBlockElement extends CSSReflectionMixin(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.glow = true;
  }
  /**
   * Creates a new arrow block shape as an SVG.js Polygon.
   * The chevron always points right.
   * If you need it to point another way, apply a transform to it.
   * @param height - How tall, in pixels, to draw the arrow block.
   * @param bodyWidth - How wide, in pixels, to draw the straight body part of the arrow block.
   * @param chevronWidth - How wide, in pixels, to draw the chevron ends of the arrow block;
   * @param fillColor - The color to apply to the interior of the arrow block.
   * @param fillOpacity - The opacity to apply to the fillColor.
   * @param strokeSize - The thickness of the arrow block border.
   * @param strokeColor - The color to apply to the border of the arrow block.
   * @returns - The constructed SVG.js Polygon instance.
   */


  static createArrowBlock({
    height,
    bodyWidth,
    chevronWidth,
    fillColor,
    fillOpacity,
    strokeSize,
    strokeColor
  }) {
    const chevron = new SVG.Polygon();
    const pointArray = AtomArrowBlockElement_1.createArrowBlockPointArray({
      height,
      bodyWidth,
      chevronWidth
    });
    chevron.plot(pointArray);
    chevron.fill({
      color: fillColor,
      opacity: fillOpacity
    });

    if (strokeSize > 0) {
      chevron.stroke({
        width: strokeSize,
        color: strokeColor
      });
    }

    return chevron;
  }

  static createArrowBlockPointArray({
    height,
    bodyWidth,
    chevronWidth
  }) {
    return new SVG.PointArray([[0, 0], [chevronWidth + bodyWidth, 0], [chevronWidth * 2 + bodyWidth, height / 2], [chevronWidth + bodyWidth, height], [0, height], [chevronWidth, height / 2]]);
  }

  ready() {
    super.ready();
    this.svgDoc = SVG(this.shadowRoot);
  }

  render({
    useContentWidth = true
  } = {}) {
    this.svgDoc.clear();
    this.svgDoc.size(0, 0);
    const strokeSize = parseInt(this.readCSSCustomProperty('--atom-arrow-block-stroke-size', AtomArrowBlockElement_1.DEFAULT_STROKE_SIZE), 10);
    const chevronWidth = parseInt(this.readCSSCustomProperty('--atom-arrow-block-chevron-width', AtomArrowBlockElement_1.DEFAULT_CHEVRON_WIDTH), 10);
    const shadowSize = parseFloat(this.readCSSCustomProperty('--atom-arrow-block-shadow-size', AtomArrowBlockElement_1.DEFAULT_SHADOW_SIZE));
    const fillOpacity = parseFloat(this.readCSSCustomProperty('--atom-arrow-block-fill-opacity', 1));
    const bodyWidth = useContentWidth ? this.$.content.clientWidth : this.getBoundingClientRect().width - chevronWidth * 2 - strokeSize;
    const height = this.clientHeight;
    const width = bodyWidth + chevronWidth * 2 + strokeSize;
    const arrowBlock = AtomArrowBlockElement_1.createArrowBlock({
      height: height - strokeSize,
      bodyWidth,
      chevronWidth,
      fillColor: this.readCSSCustomProperty('--atom-arrow-block-fill-color'),
      fillOpacity,
      strokeSize,
      strokeColor: this.readCSSCustomProperty('--atom-arrow-block-stroke-color')
    });
    let moveAmt = strokeSize / 2;

    if (this.glow) {
      arrowBlock.attr({
        filter: 'url(#glowFilter)'
      });
      this.svgDoc.node.appendChild(this.$.filterDefs);
      this.svgDoc.node.style.marginRight = `${-shadowSize * 2}px`;
      this.svgDoc.transform({
        x: -shadowSize,
        y: -shadowSize
      });
      moveAmt = strokeSize / 2 + shadowSize;
      this.svgDoc.size(width + shadowSize * 2, height + shadowSize * 2);
    } else {
      this.svgDoc.size(width, height);
    }

    this.$.filterHolder.remove();
    arrowBlock.move(moveAmt, moveAmt);
    this.arrowBlock = arrowBlock;
    this.svgDoc.add(arrowBlock);
  }

};
AtomArrowBlockElement.DEFAULT_STROKE_SIZE = 1;
AtomArrowBlockElement.DEFAULT_CHEVRON_WIDTH = 17;
AtomArrowBlockElement.DEFAULT_SHADOW_SIZE = 12;

__decorate([property({
  type: Boolean
})], AtomArrowBlockElement.prototype, "glow", void 0);

AtomArrowBlockElement = AtomArrowBlockElement_1 = __decorate([customElement('atom-arrow-block')], AtomArrowBlockElement);
export default AtomArrowBlockElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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