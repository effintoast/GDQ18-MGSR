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

let TweetItemElement = class TweetItemElement extends Polymer.MutableData(Polymer.Element) {
  accept() {
    nodecg.sendMessage('acceptTweet', this.value);
  }

  reject() {
    nodecg.sendMessage('rejectTweet', this.value.id_str);
  }

};

__decorate([property({
  type: Object
})], TweetItemElement.prototype, "value", void 0);

TweetItemElement = __decorate([customElement('tweet-item')], TweetItemElement);
export default TweetItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3ZWV0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBRUE7Ozs7OztBQU1BLElBQXFCLGdCQUFnQixHQUFyQyxNQUFxQixnQkFBckIsU0FBOEMsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsT0FBTyxDQUFDLE9BQTVCLENBQTlDLENBQWtGO0FBSWpGLEVBQUEsTUFBTSxHQUFBO0FBQ0wsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixhQUFuQixFQUFrQyxLQUFLLEtBQXZDO0FBQ0E7O0FBRUQsRUFBQSxNQUFNLEdBQUE7QUFDTCxJQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLGFBQW5CLEVBQWtDLEtBQUssS0FBTCxDQUFXLE1BQTdDO0FBQ0E7O0FBVmdGLENBQWxGOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwwQkFBQSxFLE9BQUEsRSxLQUFhLENBQWIsQ0FBQTs7QUFGb0IsZ0JBQWdCLEdBQUEsVUFBQSxDQUFBLENBRHBDLGFBQWEsQ0FBQyxZQUFELENBQ3VCLENBQUEsRUFBaEIsZ0JBQWdCLENBQWhCO2VBQUEsZ0IiLCJzb3VyY2VSb290IjoiIn0=