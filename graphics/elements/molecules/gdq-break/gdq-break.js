var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import PQueue from '../../../../shared/lib/vendor/p-queue';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQBreakElement = class GDQBreakElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this._queue = new PQueue({ concurrency: 1 });
    }
    ready() {
        super.ready();
        const tweetElem = this.$.tweet;
        const fanartElem = this.$.fanart;
        tweetElem.companionElement = this.$.prizes;
        fanartElem.companionElement = [
            this.$.bids,
            this.$.prizes
        ];
        this._setupInterrupt({
            messageName: 'showTweet',
            interruptElement: tweetElem
        });
        this._setupInterrupt({
            messageName: 'showFanart',
            interruptElement: fanartElem
        });
    }
    _setupInterrupt({ messageName, interruptElement }) {
        let queued = false;
        let queue = [];
        nodecg.listenFor(messageName, payload => {
            if (interruptElement.canExtend) {
                interruptElement.playItem(payload);
                return;
            }
            if (queued) {
                queue.push(payload);
            }
            else {
                queued = true;
                this._queue.add(async () => {
                    interruptElement.addEventListener('can-extend', () => {
                        queue.forEach(queuedFanart => {
                            interruptElement.playItem(queuedFanart);
                        });
                        queued = false;
                        queue = [];
                    }, { once: true, passive: true });
                    return this._promisifyTimeline(interruptElement.playItem(payload));
                }).catch(error => {
                    nodecg.log.error(error);
                });
            }
        });
    }
    async _promisifyTimeline(tl) {
        return new Promise(resolve => {
            tl.call(resolve, undefined, null, '+=0.03');
        });
    }
};
__decorate([
    property({ type: Object })
], GDQBreakElement.prototype, "_queue", void 0);
GDQBreakElement = __decorate([
    customElement('gdq-break')
], GDQBreakElement);
export default GDQBreakElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLWJyZWFrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sTUFBTSxNQUFNLHVDQUF1QyxDQUFDO0FBRTNELE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMNUQ7OztPQUdHO0lBQ0g7O1FBR0MsV0FBTSxHQUFXLElBQUksTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUF5RC9DLENBQUM7SUF2REEsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBd0IsQ0FBQztRQUNsRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQXlCLENBQUM7UUFDcEQsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBMkIsQ0FBQztRQUNoRSxVQUFVLENBQUMsZ0JBQWdCLEdBQUc7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ1UsQ0FBQztRQUV6QixJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGdCQUFnQixFQUFFLFNBQVM7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNwQixXQUFXLEVBQUUsWUFBWTtZQUN6QixnQkFBZ0IsRUFBRSxVQUFVO1NBQzVCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQTZEO1FBQzFHLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssR0FBYyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQy9CLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNQO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTixNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO3dCQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFOzRCQUM1QixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ3pDLENBQUMsQ0FBQyxDQUFDO3dCQUNILE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ2YsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDWixDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7YUFDSDtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUE4QjtRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQXpEQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzsrQ0FDcUI7QUFGMUIsZUFBZTtJQURuQyxhQUFhLENBQUMsV0FBVyxDQUFDO0dBQ04sZUFBZSxDQTJEbkM7ZUEzRG9CLGVBQWUifQ==