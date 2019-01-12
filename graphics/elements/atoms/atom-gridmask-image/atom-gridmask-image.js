var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, TweenLite, Sine } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import Random from "../../../../shared/lib/vendor/random.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SVG = window.svgjs || window.SVG;
/**
 * @customElement
 * @polymer
 */

let AtomGridmaskImageElement = class AtomGridmaskImageElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.strokeSize = 0;
    this.withBackground = false;
    this.cellSize = 21;
    this.cellStagger = 0.002;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
     */

    this.preserveAspectRatio = 'xMidYMid';
    this.entering = false;
    this.exiting = false;
    this._initialized = false;
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      this._initSVG();

      TweenLite.set(this.$svg.imageMaskCells, {
        opacity: 0
      });
    });
  }

  enter() {
    const tl = new TimelineLite();
    const shuffledMaskCells = Random.shuffle(Random.engines.browserCrypto, this.$svg.imageMaskCells.slice(0));
    let didImageEntranceOnStart;
    tl.staggerTo(shuffledMaskCells, 0.224, {
      opacity: 1,
      ease: Sine.easeInOut,
      onStart: () => {
        // We only want this onStart handler to run once.
        // There is no "onStartAll" equivalent, only an "onCompleteAll".
        if (didImageEntranceOnStart) {
          return;
        }

        didImageEntranceOnStart = true;
        this.entering = true;
      }
    }, this.cellStagger, 0, () => {
      this.entering = false;
      this.dispatchEvent(new CustomEvent('entered'));
    });
    return tl;
  }

  exit(options = {}) {
    const tl = new TimelineLite();
    const shuffledMaskCells = Random.shuffle(Random.engines.browserCrypto, this.$svg.imageMaskCells.slice(0));
    let didOnStart = false;
    tl.staggerTo(shuffledMaskCells, 0.224, {
      opacity: 0,
      ease: Sine.easeInOut,
      onStart: () => {
        // We only want this onStart handler to run once.
        // There is no "onStartAll" equivalent, only an "onCompleteAll".
        if (didOnStart) {
          return;
        }

        didOnStart = true;
        this.exiting = true;
      }
    }, this.cellStagger, 0, () => {
      if (typeof options.onComplete === 'function') {
        options.onComplete();
      }

      this.exiting = false;
      this.dispatchEvent(new CustomEvent('exited'));
    });
    return tl;
  }

  _initSVG() {
    if (this._initialized) {
      throw new Error('this element has already been initialized');
    }

    this._initialized = true;
    this.$svg = {};
    const STROKE_SIZE = this.strokeSize;
    const ELEMENT_WIDTH = this.clientWidth;
    const ELEMENT_HEIGHT = this.clientHeight;
    const IMAGE_MASK_CELL_SIZE = this.cellSize;
    const IMAGE_MASK_ROWS = Math.ceil(ELEMENT_HEIGHT / IMAGE_MASK_CELL_SIZE);
    const IMAGE_MASK_COLUMNS = Math.ceil(ELEMENT_WIDTH / IMAGE_MASK_CELL_SIZE);
    const svgDoc = SVG(this);
    const mask = svgDoc.mask();
    const image = svgDoc.image(this.fallbackSrc);
    this.$svg.svgDoc = svgDoc;
    this.$svg.image = image;
    this.$svg.imageMaskCells = [];
    image.attr({
      preserveAspectRatio: this.preserveAspectRatio
    });

    if (this.withBackground) {
      const bgRect = svgDoc.rect();
      bgRect.fill({
        color: 'black',
        opacity: 0.25
      });
      this.$svg.bgRect = bgRect;

      if (STROKE_SIZE > 0) {
        bgRect.stroke({
          color: 'white',
          // Makes it effectively STROKE_SIZE, because all SVG strokes
          // are center strokes, and the outer half is cut off.
          width: STROKE_SIZE * 2
        });
        image.move(STROKE_SIZE, STROKE_SIZE);
      }
    } // Generate the exitMask rects


    for (let r = 0; r < IMAGE_MASK_ROWS; r++) {
      const y = r * IMAGE_MASK_CELL_SIZE;

      for (let c = 0; c < IMAGE_MASK_COLUMNS; c++) {
        const x = c * IMAGE_MASK_CELL_SIZE;
        const rect = svgDoc.rect(IMAGE_MASK_CELL_SIZE, IMAGE_MASK_CELL_SIZE);
        rect.move(x, y);
        rect.fill({
          color: '#FFFFFF'
        });
        mask.add(rect);
        this.$svg.imageMaskCells.push(rect);
      }
    }

    image.front();
    image.maskWith(mask);
    this.resize();
  }

  resize() {
    if (!this._initialized) {
      return;
    }

    const STROKE_SIZE = this.strokeSize;
    const ELEMENT_WIDTH = this.clientWidth;
    const ELEMENT_HEIGHT = this.clientHeight;
    this.$svg.svgDoc.size(ELEMENT_WIDTH, ELEMENT_HEIGHT);
    this.$svg.image.size(ELEMENT_WIDTH, ELEMENT_HEIGHT);

    if (this.withBackground) {
      this.$svg.bgRect.size(ELEMENT_WIDTH, ELEMENT_HEIGHT);

      if (STROKE_SIZE > 0) {
        // Mirror such that drawSVG anims start from the top right
        // and move clockwise to un-draw, counter-clockwise to draw.
        this.$svg.bgRect.transform({
          scaleX: -1,
          x: ELEMENT_WIDTH
        });
        this.$svg.image.size(ELEMENT_WIDTH - STROKE_SIZE * 2, ELEMENT_HEIGHT - STROKE_SIZE * 2);
      }
    }
  }

};

__decorate([property({
  type: Number
})], AtomGridmaskImageElement.prototype, "strokeSize", void 0);

__decorate([property({
  type: Boolean
})], AtomGridmaskImageElement.prototype, "withBackground", void 0);

__decorate([property({
  type: Number
})], AtomGridmaskImageElement.prototype, "cellSize", void 0);

__decorate([property({
  type: Number
})], AtomGridmaskImageElement.prototype, "cellStagger", void 0);

__decorate([property({
  type: String
})], AtomGridmaskImageElement.prototype, "fallbackSrc", void 0);

__decorate([property({
  type: String
})], AtomGridmaskImageElement.prototype, "preserveAspectRatio", void 0);

__decorate([property({
  type: Boolean,
  notify: true
})], AtomGridmaskImageElement.prototype, "entering", void 0);

__decorate([property({
  type: Boolean,
  notify: true
})], AtomGridmaskImageElement.prototype, "exiting", void 0);

__decorate([property({
  type: Boolean
})], AtomGridmaskImageElement.prototype, "_initialized", void 0);

AtomGridmaskImageElement = __decorate([customElement('atom-gridmask-image')], AtomGridmaskImageElement);
export default AtomGridmaskImageElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsWUFBQSxFLEtBQWUsQ0FBZixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxrQ0FBQSxFLGdCQUFBLEUsS0FBdUIsQ0FBdkIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsa0NBQUEsRSxVQUFBLEUsS0FBYyxDQUFkLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsYUFBQSxFLEtBQW9CLENBQXBCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsYUFBQSxFLEtBQW9CLENBQXBCLENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUscUJBQUEsRSxLQUFpQyxDQUFqQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxrQ0FBQSxFLFVBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxNQUFNLEVBQUU7QUFBeEIsQ0FBRCxDQUNULENBQUEsRSxrQ0FBQSxFLFNBQUEsRSxLQUFnQixDQUFoQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxrQ0FBQSxFLGNBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQTdCb0Isd0JBQXdCLEdBQUEsVUFBQSxDQUFBLENBRDVDLGFBQWEsQ0FBQyxxQkFBRCxDQUMrQixDQUFBLEVBQXhCLHdCQUF3QixDQUF4QjtlQUFBLHdCIiwic291cmNlUm9vdCI6IiJ9