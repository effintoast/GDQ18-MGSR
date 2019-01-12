var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQFanartPreviewElement = class GDQFanartPreviewElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.opened = false;
    this._currentImageIndex = 0;
  }

  ready() {
    super.ready(); // Close when the background is clicked on.

    this.addEventListener('click', event => {
      if (event.composedPath()[0] === this) {
        this.close();
      }
    });
  }

  open(tweet) {
    this.opened = true;
    this._currentImageIndex = 0;
    this._tweet = tweet;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.opened = false;
    document.body.style.overflow = '';
  }

  previous() {
    if (this._currentImageIndex <= 0) {
      this._currentImageIndex = 0;
    } else {
      this._currentImageIndex--;
    }
  }

  next() {
    if (!this._tweet || !this._tweetHasMedia(this._tweet)) {
      return;
    }

    const media = this._tweet.gdqMedia;

    if (!media) {
      return;
    }

    const maxIndex = media.length - 1;

    if (this._currentImageIndex >= maxIndex) {
      this._currentImageIndex = maxIndex;
    } else {
      this._currentImageIndex++;
    }
  }

  _calcImageSrc(tweet, currentImageIndex) {
    if (!this._tweetHasMedia(tweet)) {
      return;
    }

    const media = tweet.gdqMedia;

    if (!media) {
      return;
    }

    return media[currentImageIndex].media_url_https;
  }

  _tweetHasMedia(tweet) {
    return tweet && tweet.gdqMedia;
  }

  _calcPreviousDisabled(currentImageIndex) {
    return currentImageIndex <= 0;
  }

  _calcNextDisabled(tweet, currentImageIndex) {
    if (!tweet || !this._tweetHasMedia(tweet)) {
      return true;
    }

    const media = this._tweet.gdqMedia;

    if (!media) {
      return;
    }

    const maxIndex = media.length - 1;
    return currentImageIndex >= maxIndex;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQFanartPreviewElement.prototype, "opened", void 0);

__decorate([property({
  type: Object
})], GDQFanartPreviewElement.prototype, "_tweet", void 0);

__decorate([property({
  type: Number
})], GDQFanartPreviewElement.prototype, "_currentImageIndex", void 0);

GDQFanartPreviewElement = __decorate([customElement('gdq-fanart-preview')], GDQFanartPreviewElement);
export default GDQFanartPreviewElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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