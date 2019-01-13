var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { CustomEase } from "../../../../shared/lib/vendor/CustomEase.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
import { TimelineLite, Sine, TweenLite, Linear, Power4 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const RIGHT_TIME_PER_PIXEL = 0.00157;
const LEFT_TIME_PER_PIXEL = 0.00157;
const TAIL_CHEVRON_WIDTH = 6;
CustomEase.create('BidwarOptionReveal', 'M0,0 C0.166,0.166 0.234,1 1,1');
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarBidwarOptionElement = class GDQOmnibarBidwarOptionElement extends Polymer.Element {
  ready() {
    super.ready();
    TweenLite.set(this.$.tailChevron, {
      opacity: 0
    });
    TweenLite.set(this.$.body, {
      opacity: 0
    });
    TweenLite.set(this.$.total, {
      opacity: 0
    });
  }

  enter() {
    const tailChevronElem = this.$.tailChevron;
    const totalBlockElem = this.$.totalBlock;
    const tl = new TimelineLite();
    const revealTweenWidth = this.$.body.clientWidth - tailChevronElem.clientWidth + TAIL_CHEVRON_WIDTH;
    this._revealTweenWidth = revealTweenWidth;
    tl.set(tailChevronElem, {
      opacity: 1
    });
    tl.call(() => {
      totalBlockElem.arrowBlock.attr({
        'fill-opacity': 0
      });
    });
    tl.fromTo(tailChevronElem.chevron.node, 0.334, {
      drawSVG: '0%'
    }, {
      drawSVG: '100%',
      ease: Linear.easeNone
    });
    tl.from(tailChevronElem.chevron.node, 0.2167, {
      fill: 'transparent'
    });
    tl.addLabel('slideRight', `-=${1 / 60}`);
    tl.to(tailChevronElem, revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
      x: revealTweenWidth,
      ease: Sine.easeIn
    }, 'slideRight');
    tl.set(this.$.body, {
      clipPath: `inset(0 -13px 0 ${revealTweenWidth}px)`,
      opacity: 1
    });
    tl.addLabel('reveal', '+=0.1167');
    tl.to(tailChevronElem, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
      x: 0,
      ease: 'BidwarOptionReveal'
    }, 'reveal');
    tl.to(this.$.body, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
      clipPath: 'inset(0 -13px 0 0px)',
      ease: 'BidwarOptionReveal'
    }, 'reveal');
    tl.addLabel('flickerTotal', '-=0.667');
    tl.add(createMaybeRandomTween({
      target: {},
      propName: 'placeholder',
      duration: 0.465,
      ease: Power4.easeIn,
      start: {
        probability: 1,
        normalValue: 0
      },
      end: {
        probability: 0,
        normalValue: 1
      },
      onUpdate: randomValue => {
        this.$.total.style.opacity = String(randomValue);
        totalBlockElem.arrowBlock.attr({
          'fill-opacity': randomValue
        });
      }
    }), 'flickerTotal');
    return tl;
  }

  exit() {
    const tl = new TimelineLite(); // The total seems to ignore the clip path when it has a will-change style.

    tl.set(this.$.total, {
      willChange: 'unset'
    });
    tl.addLabel('conceal', '+=0.1');
    tl.to(this.$.tailChevron, this._revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
      x: this._revealTweenWidth,
      ease: Sine.easeInOut
    }, 'conceal');
    tl.to(this.$.body, this._revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
      clipPath: `inset(0 -13px 0 ${this._revealTweenWidth}px)`,
      ease: Sine.easeInOut
    }, 'conceal');
    tl.add(createMaybeRandomTween({
      target: this.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 1
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }));
    return tl;
  }

  render() {
    this.$.tailChevron.render();
    this.$.labelBlock.render();
    this.$.totalBlock.render();
  }

  formatOptionDescription(bid) {
    const fallback = 'Be the first to bid!';

    if (bid && !(bid.description || bid.name)) {
      nodecg.log.error('Got weird bid war option:', JSON.stringify(bid, null, 2));
      return fallback;
    }

    return bid ? bid.description || bid.name : fallback;
  }

};

__decorate([property({
  type: Object
})], GDQOmnibarBidwarOptionElement.prototype, "bid", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOmnibarBidwarOptionElement.prototype, "placeholder", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOmnibarBidwarOptionElement.prototype, "winning", void 0);

GDQOmnibarBidwarOptionElement = __decorate([customElement('gdq-omnibar-bidwar-option')], GDQOmnibarBidwarOptionElement);
export default GDQOmnibarBidwarOptionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWJpZHdhci1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFRLFVBQVIsUUFBeUIsNkNBQXpCO0FBQ0EsU0FBUSxzQkFBUixRQUFxQyx3Q0FBckM7QUFDQSxTQUFRLFlBQVIsRUFBc0IsSUFBdEIsRUFBNEIsU0FBNUIsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsUUFBNEQsb0RBQTVEO0FBTUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBLE1BQU0sb0JBQW9CLEdBQUcsT0FBN0I7QUFDQSxNQUFNLG1CQUFtQixHQUFHLE9BQTVCO0FBQ0EsTUFBTSxrQkFBa0IsR0FBRyxDQUEzQjtBQUVBLFVBQVUsQ0FBQyxNQUFYLENBQWtCLG9CQUFsQixFQUF3QywrQkFBeEM7QUFFQTs7Ozs7QUFLQSxJQUFxQiw2QkFBNkIsR0FBbEQsTUFBcUIsNkJBQXJCLFNBQTJELE9BQU8sQ0FBQyxPQUFuRSxDQUEwRTtBQVl6RSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxLQUFLLENBQUwsQ0FBTyxXQUFyQixFQUFrQztBQUFDLE1BQUEsT0FBTyxFQUFFO0FBQVYsS0FBbEM7QUFDQSxJQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsS0FBSyxDQUFMLENBQU8sSUFBckIsRUFBMkI7QUFBQyxNQUFBLE9BQU8sRUFBRTtBQUFWLEtBQTNCO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLEtBQUssQ0FBTCxDQUFPLEtBQXJCLEVBQTRCO0FBQUMsTUFBQSxPQUFPLEVBQUU7QUFBVixLQUE1QjtBQUNBOztBQUVELEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFMLENBQU8sV0FBL0I7QUFDQSxVQUFNLGNBQWMsR0FBRyxLQUFLLENBQUwsQ0FBTyxVQUE5QjtBQUNBLFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBQ0EsVUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUwsQ0FBTyxJQUFQLENBQVksV0FBWixHQUEwQixlQUFlLENBQUMsV0FBMUMsR0FBd0Qsa0JBQWpGO0FBQ0EsU0FBSyxpQkFBTCxHQUF5QixnQkFBekI7QUFFQSxJQUFBLEVBQUUsQ0FBQyxHQUFILENBQU8sZUFBUCxFQUF3QjtBQUFDLE1BQUEsT0FBTyxFQUFFO0FBQVYsS0FBeEI7QUFDQSxJQUFBLEVBQUUsQ0FBQyxJQUFILENBQVEsTUFBSztBQUNaLE1BQUEsY0FBYyxDQUFDLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBK0I7QUFBQyx3QkFBZ0I7QUFBakIsT0FBL0I7QUFDQSxLQUZEO0FBSUEsSUFBQSxFQUFFLENBQUMsTUFBSCxDQUFVLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixJQUFsQyxFQUF3QyxLQUF4QyxFQUErQztBQUM5QyxNQUFBLE9BQU8sRUFBRTtBQURxQyxLQUEvQyxFQUVHO0FBQ0YsTUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUZYLEtBRkg7QUFPQSxJQUFBLEVBQUUsQ0FBQyxJQUFILENBQVEsZUFBZSxDQUFDLE9BQWhCLENBQXdCLElBQWhDLEVBQXNDLE1BQXRDLEVBQThDO0FBQzdDLE1BQUEsSUFBSSxFQUFFO0FBRHVDLEtBQTlDO0FBSUEsSUFBQSxFQUFFLENBQUMsUUFBSCxDQUFZLFlBQVosRUFBMEIsS0FBSyxJQUFJLEVBQUUsRUFBckM7QUFDQSxJQUFBLEVBQUUsQ0FBQyxFQUFILENBQU0sZUFBTixFQUF1QixnQkFBZ0IsR0FBRyxvQkFBMUMsRUFBZ0U7QUFDL0QsTUFBQSxDQUFDLEVBQUUsZ0JBRDREO0FBRS9ELE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQztBQUZvRCxLQUFoRSxFQUdHLFlBSEg7QUFLQSxJQUFBLEVBQUUsQ0FBQyxHQUFILENBQU8sS0FBSyxDQUFMLENBQU8sSUFBZCxFQUFvQjtBQUNuQixNQUFBLFFBQVEsRUFBRSxtQkFBbUIsZ0JBQWdCLEtBRDFCO0FBRW5CLE1BQUEsT0FBTyxFQUFFO0FBRlUsS0FBcEI7QUFLQSxJQUFBLEVBQUUsQ0FBQyxRQUFILENBQVksUUFBWixFQUFzQixVQUF0QjtBQUNBLElBQUEsRUFBRSxDQUFDLEVBQUgsQ0FBTSxlQUFOLEVBQXVCLGdCQUFnQixHQUFHLG1CQUExQyxFQUErRDtBQUM5RCxNQUFBLENBQUMsRUFBRSxDQUQyRDtBQUU5RCxNQUFBLElBQUksRUFBRTtBQUZ3RCxLQUEvRCxFQUdHLFFBSEg7QUFJQSxJQUFBLEVBQUUsQ0FBQyxFQUFILENBQU0sS0FBSyxDQUFMLENBQU8sSUFBYixFQUFtQixnQkFBZ0IsR0FBRyxtQkFBdEMsRUFBMkQ7QUFDMUQsTUFBQSxRQUFRLEVBQUUsc0JBRGdEO0FBRTFELE1BQUEsSUFBSSxFQUFFO0FBRm9ELEtBQTNELEVBR0csUUFISDtBQUtBLElBQUEsRUFBRSxDQUFDLFFBQUgsQ0FBWSxjQUFaLEVBQTRCLFNBQTVCO0FBQ0EsSUFBQSxFQUFFLENBQUMsR0FBSCxDQUFPLHNCQUFzQixDQUFDO0FBQzdCLE1BQUEsTUFBTSxFQUFFLEVBRHFCO0FBRTdCLE1BQUEsUUFBUSxFQUFFLGFBRm1CO0FBRzdCLE1BQUEsUUFBUSxFQUFFLEtBSG1CO0FBSTdCLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUpnQjtBQUs3QixNQUFBLEtBQUssRUFBRTtBQUFDLFFBQUEsV0FBVyxFQUFFLENBQWQ7QUFBaUIsUUFBQSxXQUFXLEVBQUU7QUFBOUIsT0FMc0I7QUFNN0IsTUFBQSxHQUFHLEVBQUU7QUFBQyxRQUFBLFdBQVcsRUFBRSxDQUFkO0FBQWlCLFFBQUEsV0FBVyxFQUFFO0FBQTlCLE9BTndCO0FBTzdCLE1BQUEsUUFBUSxFQUFFLFdBQVcsSUFBRztBQUN0QixhQUFLLENBQUwsQ0FBTyxLQUFQLENBQTBDLEtBQTFDLENBQWdELE9BQWhELEdBQTBELE1BQU0sQ0FBQyxXQUFELENBQWhFO0FBQ0QsUUFBQSxjQUFjLENBQUMsVUFBZixDQUEwQixJQUExQixDQUErQjtBQUFDLDBCQUFnQjtBQUFqQixTQUEvQjtBQUNBO0FBVjRCLEtBQUQsQ0FBN0IsRUFXSSxjQVhKO0FBYUEsV0FBTyxFQUFQO0FBQ0E7O0FBRUQsRUFBQSxJQUFJLEdBQUE7QUFDSCxVQUFNLEVBQUUsR0FBRyxJQUFJLFlBQUosRUFBWCxDQURHLENBR0g7O0FBQ0EsSUFBQSxFQUFFLENBQUMsR0FBSCxDQUFPLEtBQUssQ0FBTCxDQUFPLEtBQWQsRUFBcUI7QUFBQyxNQUFBLFVBQVUsRUFBRTtBQUFiLEtBQXJCO0FBRUEsSUFBQSxFQUFFLENBQUMsUUFBSCxDQUFZLFNBQVosRUFBdUIsT0FBdkI7QUFDQSxJQUFBLEVBQUUsQ0FBQyxFQUFILENBQU0sS0FBSyxDQUFMLENBQU8sV0FBYixFQUEwQixLQUFLLGlCQUFMLEdBQXlCLG9CQUFuRCxFQUF5RTtBQUN4RSxNQUFBLENBQUMsRUFBRSxLQUFLLGlCQURnRTtBQUV4RSxNQUFBLElBQUksRUFBRSxJQUFJLENBQUM7QUFGNkQsS0FBekUsRUFHRyxTQUhIO0FBSUEsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLElBQWIsRUFBbUIsS0FBSyxpQkFBTCxHQUF5QixvQkFBNUMsRUFBa0U7QUFDakUsTUFBQSxRQUFRLEVBQUUsbUJBQW1CLEtBQUssaUJBQWlCLEtBRGM7QUFFakUsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBRnNELEtBQWxFLEVBR0csU0FISDtBQUtBLElBQUEsRUFBRSxDQUFDLEdBQUgsQ0FBTyxzQkFBc0IsQ0FBQztBQUM3QixNQUFBLE1BQU0sRUFBRSxLQUFLLEtBRGdCO0FBRTdCLE1BQUEsUUFBUSxFQUFFLFNBRm1CO0FBRzdCLE1BQUEsUUFBUSxFQUFFLEtBSG1CO0FBSTdCLE1BQUEsS0FBSyxFQUFFO0FBQUMsUUFBQSxXQUFXLEVBQUUsQ0FBZDtBQUFpQixRQUFBLFdBQVcsRUFBRTtBQUE5QixPQUpzQjtBQUs3QixNQUFBLEdBQUcsRUFBRTtBQUFDLFFBQUEsV0FBVyxFQUFFLENBQWQ7QUFBaUIsUUFBQSxXQUFXLEVBQUU7QUFBOUI7QUFMd0IsS0FBRCxDQUE3QjtBQVFBLFdBQU8sRUFBUDtBQUNBOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQ0osU0FBSyxDQUFMLENBQU8sV0FBUCxDQUEwQyxNQUExQztBQUNBLFNBQUssQ0FBTCxDQUFPLFVBQVAsQ0FBNEMsTUFBNUM7QUFDQSxTQUFLLENBQUwsQ0FBTyxVQUFQLENBQTRDLE1BQTVDO0FBQ0Q7O0FBRUQsRUFBQSx1QkFBdUIsQ0FBQyxHQUFELEVBQWM7QUFDcEMsVUFBTSxRQUFRLEdBQUcsc0JBQWpCOztBQUNBLFFBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLFdBQUosSUFBbUIsR0FBRyxDQUFDLElBQXpCLENBQVgsRUFBMkM7QUFDMUMsTUFBQSxNQUFNLENBQUMsR0FBUCxDQUFXLEtBQVgsQ0FBaUIsMkJBQWpCLEVBQThDLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQixDQUExQixDQUE5QztBQUNBLGFBQU8sUUFBUDtBQUNBOztBQUVELFdBQU8sR0FBRyxHQUFJLEdBQUcsQ0FBQyxXQUFKLElBQW1CLEdBQUcsQ0FBQyxJQUEzQixHQUFtQyxRQUE3QztBQUNBOztBQXpId0UsQ0FBMUU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHVDQUFBLEUsS0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRTtBQUFwQyxDQUFELENBQ1QsQ0FBQSxFLHVDQUFBLEUsYUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLGtCQUFrQixFQUFFO0FBQXBDLENBQUQsQ0FDVCxDQUFBLEUsdUNBQUEsRSxTQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFSb0IsNkJBQTZCLEdBQUEsVUFBQSxDQUFBLENBRGpELGFBQWEsQ0FBQywyQkFBRCxDQUNvQyxDQUFBLEVBQTdCLDZCQUE2QixDQUE3QjtlQUFBLDZCIiwic291cmNlUm9vdCI6IiJ9