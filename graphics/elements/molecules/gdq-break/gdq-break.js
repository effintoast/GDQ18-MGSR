var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import PQueue from "../../../../shared/lib/vendor/p-queue.js";
const {
  customElement,
  property
} = Polymer.decorators;
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
    this._queue = new PQueue({
      concurrency: 1
    });
  }

  ready() {
    super.ready();
    const tweetElem = this.$.tweet;
    const fanartElem = this.$.fanart;
    tweetElem.companionElement = this.$.prizes;
    fanartElem.companionElement = [this.$.bids, this.$.prizes];

    this._setupInterrupt({
      messageName: 'showTweet',
      interruptElement: tweetElem
    });

    this._setupInterrupt({
      messageName: 'showFanart',
      interruptElement: fanartElem
    });
  }

  _setupInterrupt({
    messageName,
    interruptElement
  }) {
    let queued = false;
    let queue = [];
    nodecg.listenFor(messageName, payload => {
      if (interruptElement.canExtend) {
        interruptElement.playItem(payload);
        return;
      }

      if (queued) {
        queue.push(payload);
      } else {
        queued = true;

        this._queue.add(async () => {
          interruptElement.addEventListener('can-extend', () => {
            queue.forEach(queuedFanart => {
              interruptElement.playItem(queuedFanart);
            });
            queued = false;
            queue = [];
          }, {
            once: true,
            passive: true
          });
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

__decorate([property({
  type: Object
})], GDQBreakElement.prototype, "_queue", void 0);

GDQBreakElement = __decorate([customElement('gdq-break')], GDQBreakElement);
export default GDQBreakElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1icmVhay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE9BQU8sTUFBUCxNQUFtQiwwQ0FBbkI7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBRUE7Ozs7O0FBS0EsSUFBcUIsZUFBZSxHQUFwQyxNQUFxQixlQUFyQixTQUE2QyxPQUFPLENBQUMsT0FBckQsQ0FBNEQ7QUFMNUQ7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFHQyxTQUFBLE1BQUEsR0FBaUIsSUFBSSxNQUFKLENBQVc7QUFBQyxNQUFBLFdBQVcsRUFBRTtBQUFkLEtBQVgsQ0FBakI7QUF5REE7O0FBdkRBLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsVUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFMLENBQU8sS0FBekI7QUFDQSxVQUFNLFVBQVUsR0FBRyxLQUFLLENBQUwsQ0FBTyxNQUExQjtBQUNBLElBQUEsU0FBUyxDQUFDLGdCQUFWLEdBQTZCLEtBQUssQ0FBTCxDQUFPLE1BQXBDO0FBQ0EsSUFBQSxVQUFVLENBQUMsZ0JBQVgsR0FBOEIsQ0FDN0IsS0FBSyxDQUFMLENBQU8sSUFEc0IsRUFFN0IsS0FBSyxDQUFMLENBQU8sTUFGc0IsQ0FBOUI7O0FBS0EsU0FBSyxlQUFMLENBQXFCO0FBQ3BCLE1BQUEsV0FBVyxFQUFFLFdBRE87QUFFcEIsTUFBQSxnQkFBZ0IsRUFBRTtBQUZFLEtBQXJCOztBQUtBLFNBQUssZUFBTCxDQUFxQjtBQUNwQixNQUFBLFdBQVcsRUFBRSxZQURPO0FBRXBCLE1BQUEsZ0JBQWdCLEVBQUU7QUFGRSxLQUFyQjtBQUlBOztBQUVELEVBQUEsZUFBZSxDQUFDO0FBQUMsSUFBQSxXQUFEO0FBQWMsSUFBQTtBQUFkLEdBQUQsRUFBNEY7QUFDMUcsUUFBSSxNQUFNLEdBQUcsS0FBYjtBQUNBLFFBQUksS0FBSyxHQUFjLEVBQXZCO0FBQ0EsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixXQUFqQixFQUE4QixPQUFPLElBQUc7QUFDdkMsVUFBSSxnQkFBZ0IsQ0FBQyxTQUFyQixFQUFnQztBQUMvQixRQUFBLGdCQUFnQixDQUFDLFFBQWpCLENBQTBCLE9BQTFCO0FBQ0E7QUFDQTs7QUFFRCxVQUFJLE1BQUosRUFBWTtBQUNYLFFBQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYO0FBQ0EsT0FGRCxNQUVPO0FBQ04sUUFBQSxNQUFNLEdBQUcsSUFBVDs7QUFDQSxhQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLFlBQVc7QUFDMUIsVUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsWUFBbEMsRUFBZ0QsTUFBSztBQUNwRCxZQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsWUFBWSxJQUFHO0FBQzVCLGNBQUEsZ0JBQWdCLENBQUMsUUFBakIsQ0FBMEIsWUFBMUI7QUFDQSxhQUZEO0FBR0EsWUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNBLFlBQUEsS0FBSyxHQUFHLEVBQVI7QUFDQSxXQU5ELEVBTUc7QUFBQyxZQUFBLElBQUksRUFBRSxJQUFQO0FBQWEsWUFBQSxPQUFPLEVBQUU7QUFBdEIsV0FOSDtBQU9BLGlCQUFPLEtBQUssa0JBQUwsQ0FBd0IsZ0JBQWdCLENBQUMsUUFBakIsQ0FBMEIsT0FBMUIsQ0FBeEIsQ0FBUDtBQUNBLFNBVEQsRUFTRyxLQVRILENBU1MsS0FBSyxJQUFHO0FBQ2hCLFVBQUEsTUFBTSxDQUFDLEdBQVAsQ0FBVyxLQUFYLENBQWlCLEtBQWpCO0FBQ0EsU0FYRDtBQVlBO0FBQ0QsS0F2QkQ7QUF3QkE7O0FBRUQsUUFBTSxrQkFBTixDQUF5QixFQUF6QixFQUF1RDtBQUN0RCxXQUFPLElBQUksT0FBSixDQUFZLE9BQU8sSUFBRztBQUM1QixNQUFBLEVBQUUsQ0FBQyxJQUFILENBQVEsT0FBUixFQUFpQixTQUFqQixFQUE0QixJQUE1QixFQUFrQyxRQUFsQztBQUNBLEtBRk0sQ0FBUDtBQUdBOztBQTFEMEQsQ0FBNUQ7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHlCQUFBLEUsUUFBQSxFLEtBQThDLENBQTlDLENBQUE7O0FBRm9CLGVBQWUsR0FBQSxVQUFBLENBQUEsQ0FEbkMsYUFBYSxDQUFDLFdBQUQsQ0FDc0IsQ0FBQSxFQUFmLGVBQWUsQ0FBZjtlQUFBLGUiLCJzb3VyY2VSb290IjoiIn0=