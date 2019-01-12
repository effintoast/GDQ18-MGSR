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
__decorate([
    property({ type: Object })
], TweetItemElement.prototype, "value", void 0);
TweetItemElement = __decorate([
    customElement('tweet-item')
], TweetItemElement);
export default TweetItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdlZXQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR3ZWV0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJEOzs7O0dBSUc7QUFFSCxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBSWpGLE1BQU07UUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU07UUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRCxDQUFBO0FBVEE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7K0NBQ1o7QUFGTyxnQkFBZ0I7SUFEcEMsYUFBYSxDQUFDLFlBQVksQ0FBQztHQUNQLGdCQUFnQixDQVdwQztlQVhvQixnQkFBZ0IifQ==