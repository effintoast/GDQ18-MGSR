var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
        super.ready();
        // Close when the background is clicked on.
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
        }
        else {
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
        }
        else {
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
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQFanartPreviewElement.prototype, "opened", void 0);
__decorate([
    property({ type: Object })
], GDQFanartPreviewElement.prototype, "_tweet", void 0);
__decorate([
    property({ type: Number })
], GDQFanartPreviewElement.prototype, "_currentImageIndex", void 0);
GDQFanartPreviewElement = __decorate([
    customElement('gdq-fanart-preview')
], GDQFanartPreviewElement);
export default GDQFanartPreviewElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWZhbmFydC1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLWZhbmFydC1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQix1QkFBdUIsR0FBNUMsTUFBcUIsdUJBQXdCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMcEU7OztPQUdHO0lBQ0g7O1FBR0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU1mLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQXFGeEIsQ0FBQztJQW5GQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYjtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQyxLQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEQsT0FBTztTQUNQO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO1NBQ25DO2FBQU07WUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBWSxFQUFFLGlCQUF5QjtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1A7UUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPO1NBQ1A7UUFFRCxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDMUIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUJBQXFCLENBQUMsaUJBQXlCO1FBQzlDLE9BQU8saUJBQWlCLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZLEVBQUUsaUJBQXlCO1FBQ3hELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEMsT0FBTyxpQkFBaUIsSUFBSSxRQUFRLENBQUM7SUFDdEMsQ0FBQztDQUNELENBQUE7QUEzRkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO3VEQUNyQztBQUdmO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3VEQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bUVBQ0Y7QUFSSCx1QkFBdUI7SUFEM0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0dBQ2YsdUJBQXVCLENBNkYzQztlQTdGb0IsdUJBQXVCIn0=