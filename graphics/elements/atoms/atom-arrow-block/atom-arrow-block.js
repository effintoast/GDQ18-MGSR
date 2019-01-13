var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomArrowBlockElement_1;
import CSSReflectionMixin from '../../../mixins/css-reflection-mixin';
const { customElement, property } = Polymer.decorators;
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
    static createArrowBlock({ height, bodyWidth, chevronWidth, fillColor, fillOpacity, strokeSize, strokeColor }) {
        const chevron = new SVG.Polygon();
        const pointArray = AtomArrowBlockElement_1.createArrowBlockPointArray({ height, bodyWidth, chevronWidth });
        chevron.plot(pointArray);
        chevron.fill({ color: fillColor, opacity: fillOpacity });
        if (strokeSize > 0) {
            chevron.stroke({ width: strokeSize, color: strokeColor });
        }
        return chevron;
    }
    static createArrowBlockPointArray({ height, bodyWidth, chevronWidth }) {
        return new SVG.PointArray([
            [0, 0],
            [chevronWidth + bodyWidth, 0],
            [(chevronWidth * 2) + bodyWidth, height / 2],
            [chevronWidth + bodyWidth, height],
            [0, height],
            [chevronWidth, height / 2]
        ]);
    }
    ready() {
        super.ready();
        this.svgDoc = SVG(this.shadowRoot);
    }
    render({ useContentWidth = true } = {}) {
        this.svgDoc.clear();
        this.svgDoc.size(0, 0);
        const strokeSize = parseInt(this.readCSSCustomProperty('--atom-arrow-block-stroke-size', AtomArrowBlockElement_1.DEFAULT_STROKE_SIZE), 10);
        const chevronWidth = parseInt(this.readCSSCustomProperty('--atom-arrow-block-chevron-width', AtomArrowBlockElement_1.DEFAULT_CHEVRON_WIDTH), 10);
        const shadowSize = parseFloat(this.readCSSCustomProperty('--atom-arrow-block-shadow-size', AtomArrowBlockElement_1.DEFAULT_SHADOW_SIZE));
        const fillOpacity = parseFloat(this.readCSSCustomProperty('--atom-arrow-block-fill-opacity', 1));
        const bodyWidth = useContentWidth ?
            this.$.content.clientWidth :
            this.getBoundingClientRect().width - (chevronWidth * 2) - strokeSize;
        const height = this.clientHeight;
        const width = bodyWidth + (chevronWidth * 2) + strokeSize;
        const arrowBlock = AtomArrowBlockElement_1.createArrowBlock({
            height: height - strokeSize,
            bodyWidth,
            chevronWidth,
            fillColor: this.readCSSCustomProperty('--atom-arrow-block-fill-color'),
            fillOpacity,
            strokeSize,
            strokeColor: this.readCSSCustomProperty('--atom-arrow-block-stroke-color')
        });
        let moveAmt = (strokeSize / 2);
        if (this.glow) {
            arrowBlock.attr({ filter: 'url(#glowFilter)' });
            this.svgDoc.node.appendChild(this.$.filterDefs);
            this.svgDoc.node.style.marginRight = `${-shadowSize * 2}px`;
            this.svgDoc.transform({ x: -shadowSize, y: -shadowSize });
            moveAmt = (strokeSize / 2) + shadowSize;
            this.svgDoc.size(width + (shadowSize * 2), height + (shadowSize * 2));
        }
        else {
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
__decorate([
    property({ type: Boolean })
], AtomArrowBlockElement.prototype, "glow", void 0);
AtomArrowBlockElement = AtomArrowBlockElement_1 = __decorate([
    customElement('atom-arrow-block')
], AtomArrowBlockElement);
export default AtomArrowBlockElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1hcnJvdy1ibG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0b20tYXJyb3ctYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sa0JBQWtCLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sR0FBRyxHQUFJLE1BQWMsQ0FBQyxHQUFvQixDQUFDO0FBRWpEOzs7R0FHRztBQUVILElBQXFCLHFCQUFxQiw2QkFBMUMsTUFBcUIscUJBQXNCLFNBQVEsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUx0Rjs7O09BR0c7SUFDSDs7UUFPQyxTQUFJLEdBQUcsSUFBSSxDQUFDO0lBdUhiLENBQUM7SUFsSEE7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQ3ZCLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFdBQVcsRUFTWDtRQUNBLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLHVCQUFxQixDQUFDLDBCQUEwQixDQUFDLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFD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