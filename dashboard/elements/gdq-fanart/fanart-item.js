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
 * @appliesMixin Polymer.MutableData
 */

let FanartItemElement = class FanartItemElement extends Polymer.MutableData(Polymer.Element) {
  preview() {
    this.dispatchEvent(new CustomEvent('preview'));
  }

  accept() {
    nodecg.sendMessage('acceptFanart', this.value);
  }

  reject() {
    nodecg.sendMessage('rejectTweet', this.value.id_str);
  }

  _calcIndicatorHidden(tweetMedia) {
    return !tweetMedia || !Array.isArray(tweetMedia) || tweetMedia.length <= 1;
  }

  _computeImageUrl(tweetMedia) {
    if (tweetMedia && tweetMedia[0]) {
      return tweetMedia[0].media_url_https;
    }

    return '';
  }

};

__decorate([property({
  type: Object
})], FanartItemElement.prototype, "value", void 0);

FanartItemElement = __decorate([customElement('fanart-item')], FanartItemElement);
export default FanartItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbmFydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7Ozs7QUFNQSxJQUFxQixpQkFBaUIsR0FBdEMsTUFBcUIsaUJBQXJCLFNBQStDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUEvQyxDQUFtRjtBQUlsRixFQUFBLE9BQU8sR0FBQTtBQUNOLFNBQUssYUFBTCxDQUFtQixJQUFJLFdBQUosQ0FBZ0IsU0FBaEIsQ0FBbkI7QUFDQTs7QUFFRCxFQUFBLE1BQU0sR0FBQTtBQUNMLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsY0FBbkIsRUFBbUMsS0FBSyxLQUF4QztBQUNBOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQ0wsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixhQUFuQixFQUFrQyxLQUFLLEtBQUwsQ0FBVyxNQUE3QztBQUNBOztBQUVELEVBQUEsb0JBQW9CLENBQUMsVUFBRCxFQUF3QjtBQUMzQyxXQUFPLENBQUMsVUFBRCxJQUFlLENBQUMsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFkLENBQWhCLElBQTZDLFVBQVUsQ0FBQyxNQUFYLElBQXFCLENBQXpFO0FBQ0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxVQUFELEVBQXdCO0FBQ3ZDLFFBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFELENBQTVCLEVBQWlDO0FBQ2hDLGFBQU8sVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjLGVBQXJCO0FBQ0E7O0FBRUQsV0FBTyxFQUFQO0FBQ0E7O0FBMUJpRixDQUFuRjs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsMkJBQUEsRSxPQUFBLEUsS0FBYSxDQUFiLENBQUE7O0FBRm9CLGlCQUFpQixHQUFBLFVBQUEsQ0FBQSxDQURyQyxhQUFhLENBQUMsYUFBRCxDQUN3QixDQUFBLEVBQWpCLGlCQUFpQixDQUFqQjtlQUFBLGlCIiwic291cmNlUm9vdCI6IiJ9