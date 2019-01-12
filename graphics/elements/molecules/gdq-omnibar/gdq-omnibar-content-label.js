var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power3, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement
} = Polymer.decorators;
const memoizedYardstickWidths = new Map();
const memoizedBodyTweenDurations = new Map();
const MAX_MEMOIZATION_MAP_SIZE = 150;
const ANCHOR_TWEEN_DURATION = 0.3;
const BODY_TWEEN_DURATION_PER_PX = 0.002;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarContentLabelElement = class GDQOmnibarContentLabelElement extends Polymer.Element {
  enter(labelHtml) {
    labelHtml = this.processLabelHtml(labelHtml); // tslint:disable-line:no-parameter-reassignment

    const tl = new TimelineLite();
    const yardstickWidth = this.calcBodyWidth(labelHtml);
    tl.fromTo(this.$.anchor, ANCHOR_TWEEN_DURATION, {
      scaleY: 0
    }, {
      scaleY: 1,
      ease: Power3.easeInOut
    });
    tl.fromTo(this.$.body, this.calcBodyTweenDuration(labelHtml), {
      x: '-100%'
    }, {
      x: '0%',
      ease: Power2.easeOut,
      onStart: () => {
        const textElem = this.$.text;
        textElem.innerHTML = labelHtml;
        textElem.style.width = `${Math.ceil(yardstickWidth)}px`;
      }
    });
    return tl;
  }

  change(labelHtml) {
    labelHtml = this.processLabelHtml(labelHtml); // tslint:disable-line:no-parameter-reassignment

    const tl = new TimelineLite();
    const yardstickWidth = this.calcBodyWidth(labelHtml);
    tl.to(this.$.body, this.calcBodyTweenDuration(labelHtml), {
      x: '-100%',
      ease: Power2.easeIn,
      onComplete: () => {
        const textElem = this.$.text;
        textElem.innerHTML = labelHtml;
        textElem.style.width = `${Math.ceil(yardstickWidth)}px`;
      }
    });
    tl.to(this.$.body, this.calcBodyTweenDuration(labelHtml), {
      x: '0%',
      ease: Power2.easeOut,
      delay: 0.2
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.to(this.$.body, this.calcBodyTweenDuration(), {
      x: '-100%',
      ease: Power2.easeIn
    });
    tl.to(this, ANCHOR_TWEEN_DURATION, {
      scaleY: 0,
      ease: Power3.easeInOut
    });
    return tl;
  }

  processLabelHtml(labelHtml) {
    return labelHtml.replace(/\\n/g, '<br/>');
  }

  calcBodyWidth(labelHtml = '') {
    if (memoizedYardstickWidths.has(labelHtml)) {
      return memoizedYardstickWidths.get(labelHtml);
    }

    if (memoizedYardstickWidths.size > MAX_MEMOIZATION_MAP_SIZE) {
      memoizedYardstickWidths.clear();
    }

    this.$.yardstick.innerHTML = labelHtml;
    const width = this.$.yardstick.clientWidth;
    memoizedYardstickWidths.set(labelHtml, width);
    return width;
  }

  calcBodyTweenDuration(labelHtml) {
    if (memoizedBodyTweenDurations.has(labelHtml)) {
      return memoizedBodyTweenDurations.get(labelHtml);
    }

    if (memoizedBodyTweenDurations.size > MAX_MEMOIZATION_MAP_SIZE) {
      memoizedYardstickWidths.clear();
    }

    let duration;

    if (labelHtml) {
      const yardstickWidth = this.calcBodyWidth(labelHtml);
      duration = BODY_TWEEN_DURATION_PER_PX * (yardstickWidth + 30); // 30 = width added by chevrons
    } else {
      duration = BODY_TWEEN_DURATION_PER_PX * this.$.body.clientWidth;
    }

    memoizedBodyTweenDurations.set(labelHtml, duration);
    return duration;
  }

};
GDQOmnibarContentLabelElement = __decorate([customElement('gdq-omnibar-content-label')], GDQOmnibarContentLabelElement);
export default GDQOmnibarContentLabelElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWNvbnRlbnQtbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFRLFlBQVIsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUIsUUFBMkMsb0RBQTNDO0FBRUEsTUFBTTtBQUFDLEVBQUE7QUFBRCxJQUFrQixPQUFPLENBQUMsVUFBaEM7QUFDQSxNQUFNLHVCQUF1QixHQUFHLElBQUksR0FBSixFQUFoQztBQUNBLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxHQUFKLEVBQW5DO0FBQ0EsTUFBTSx3QkFBd0IsR0FBRyxHQUFqQztBQUNBLE1BQU0scUJBQXFCLEdBQUcsR0FBOUI7QUFDQSxNQUFNLDBCQUEwQixHQUFHLEtBQW5DO0FBRUE7Ozs7O0FBS0EsSUFBcUIsNkJBQTZCLEdBQWxELE1BQXFCLDZCQUFyQixTQUEyRCxPQUFPLENBQUMsT0FBbkUsQ0FBMEU7QUFDekUsRUFBQSxLQUFLLENBQUMsU0FBRCxFQUFrQjtBQUN0QixJQUFBLFNBQVMsR0FBRyxLQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQVosQ0FEc0IsQ0FDd0I7O0FBRTlDLFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBQ0EsVUFBTSxjQUFjLEdBQUcsS0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQXZCO0FBRUEsSUFBQSxFQUFFLENBQUMsTUFBSCxDQUFVLEtBQUssQ0FBTCxDQUFPLE1BQWpCLEVBQXlCLHFCQUF6QixFQUFnRDtBQUMvQyxNQUFBLE1BQU0sRUFBRTtBQUR1QyxLQUFoRCxFQUVHO0FBQ0YsTUFBQSxNQUFNLEVBQUUsQ0FETjtBQUVGLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUZYLEtBRkg7QUFPQSxJQUFBLEVBQUUsQ0FBQyxNQUFILENBQVUsS0FBSyxDQUFMLENBQU8sSUFBakIsRUFBdUIsS0FBSyxxQkFBTCxDQUEyQixTQUEzQixDQUF2QixFQUE4RDtBQUM3RCxNQUFBLENBQUMsRUFBRTtBQUQwRCxLQUE5RCxFQUVHO0FBQ0YsTUFBQSxDQUFDLEVBQUUsSUFERDtBQUVGLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUZYO0FBR0YsTUFBQSxPQUFPLEVBQUUsTUFBSztBQUNiLGNBQU0sUUFBUSxHQUFHLEtBQUssQ0FBTCxDQUFPLElBQXhCO0FBQ0EsUUFBQSxRQUFRLENBQUMsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFFBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUwsQ0FBVSxjQUFWLENBQXlCLElBQW5EO0FBQ0E7QUFQQyxLQUZIO0FBWUEsV0FBTyxFQUFQO0FBQ0E7O0FBRUQsRUFBQSxNQUFNLENBQUMsU0FBRCxFQUFrQjtBQUN2QixJQUFBLFNBQVMsR0FBRyxLQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQVosQ0FEdUIsQ0FDdUI7O0FBRTlDLFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBQ0EsVUFBTSxjQUFjLEdBQUcsS0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQXZCO0FBRUEsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLElBQWIsRUFBbUIsS0FBSyxxQkFBTCxDQUEyQixTQUEzQixDQUFuQixFQUEwRDtBQUN6RCxNQUFBLENBQUMsRUFBRSxPQURzRDtBQUV6RCxNQUFBLElBQUksRUFBRSxNQUFNLENBQUMsTUFGNEM7QUFHekQsTUFBQSxVQUFVLEVBQUUsTUFBSztBQUNoQixjQUFNLFFBQVEsR0FBRyxLQUFLLENBQUwsQ0FBTyxJQUF4QjtBQUNBLFFBQUEsUUFBUSxDQUFDLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxRQUFBLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBZixHQUF1QixHQUFHLElBQUksQ0FBQyxJQUFMLENBQVUsY0FBVixDQUF5QixJQUFuRDtBQUNBO0FBUHdELEtBQTFEO0FBVUEsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLElBQWIsRUFBbUIsS0FBSyxxQkFBTCxDQUEyQixTQUEzQixDQUFuQixFQUEwRDtBQUN6RCxNQUFBLENBQUMsRUFBRSxJQURzRDtBQUV6RCxNQUFBLElBQUksRUFBRSxNQUFNLENBQUMsT0FGNEM7QUFHekQsTUFBQSxLQUFLLEVBQUU7QUFIa0QsS0FBMUQ7QUFNQSxXQUFPLEVBQVA7QUFDQTs7QUFFRCxFQUFBLElBQUksR0FBQTtBQUNILFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBRUEsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLElBQWIsRUFBbUIsS0FBSyxxQkFBTCxFQUFuQixFQUFpRDtBQUNoRCxNQUFBLENBQUMsRUFBRSxPQUQ2QztBQUVoRCxNQUFBLElBQUksRUFBRSxNQUFNLENBQUM7QUFGbUMsS0FBakQ7QUFLQSxJQUFBLEVBQUUsQ0FBQyxFQUFILENBQU0sSUFBTixFQUFZLHFCQUFaLEVBQW1DO0FBQ2xDLE1BQUEsTUFBTSxFQUFFLENBRDBCO0FBRWxDLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUZxQixLQUFuQztBQUtBLFdBQU8sRUFBUDtBQUNBOztBQUVELEVBQUEsZ0JBQWdCLENBQUMsU0FBRCxFQUFrQjtBQUNqQyxXQUFPLFNBQVMsQ0FBQyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBQVA7QUFDQTs7QUFFRCxFQUFBLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBYixFQUFlO0FBQzNCLFFBQUksdUJBQXVCLENBQUMsR0FBeEIsQ0FBNEIsU0FBNUIsQ0FBSixFQUE0QztBQUMzQyxhQUFPLHVCQUF1QixDQUFDLEdBQXhCLENBQTRCLFNBQTVCLENBQVA7QUFDQTs7QUFFRCxRQUFJLHVCQUF1QixDQUFDLElBQXhCLEdBQStCLHdCQUFuQyxFQUE2RDtBQUM1RCxNQUFBLHVCQUF1QixDQUFDLEtBQXhCO0FBQ0E7O0FBRUQsU0FBSyxDQUFMLENBQU8sU0FBUCxDQUFpQixTQUFqQixHQUE2QixTQUE3QjtBQUNBLFVBQU0sS0FBSyxHQUFHLEtBQUssQ0FBTCxDQUFPLFNBQVAsQ0FBaUIsV0FBL0I7QUFDQSxJQUFBLHVCQUF1QixDQUFDLEdBQXhCLENBQTRCLFNBQTVCLEVBQXVDLEtBQXZDO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7O0FBRUQsRUFBQSxxQkFBcUIsQ0FBQyxTQUFELEVBQW1CO0FBQ3ZDLFFBQUksMEJBQTBCLENBQUMsR0FBM0IsQ0FBK0IsU0FBL0IsQ0FBSixFQUErQztBQUM5QyxhQUFPLDBCQUEwQixDQUFDLEdBQTNCLENBQStCLFNBQS9CLENBQVA7QUFDQTs7QUFFRCxRQUFJLDBCQUEwQixDQUFDLElBQTNCLEdBQWtDLHdCQUF0QyxFQUFnRTtBQUMvRCxNQUFBLHVCQUF1QixDQUFDLEtBQXhCO0FBQ0E7O0FBRUQsUUFBSSxRQUFKOztBQUNBLFFBQUksU0FBSixFQUFlO0FBQ2QsWUFBTSxjQUFjLEdBQUcsS0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQXZCO0FBQ0EsTUFBQSxRQUFRLEdBQUcsMEJBQTBCLElBQUksY0FBYyxHQUFHLEVBQXJCLENBQXJDLENBRmMsQ0FFaUQ7QUFDL0QsS0FIRCxNQUdPO0FBQ04sTUFBQSxRQUFRLEdBQUcsMEJBQTBCLEdBQUcsS0FBSyxDQUFMLENBQU8sSUFBUCxDQUFZLFdBQXBEO0FBQ0E7O0FBRUQsSUFBQSwwQkFBMEIsQ0FBQyxHQUEzQixDQUErQixTQUEvQixFQUEwQyxRQUExQztBQUNBLFdBQU8sUUFBUDtBQUNBOztBQTVHd0UsQ0FBMUU7QUFBcUIsNkJBQTZCLEdBQUEsVUFBQSxDQUFBLENBRGpELGFBQWEsQ0FBQywyQkFBRCxDQUNvQyxDQUFBLEVBQTdCLDZCQUE2QixDQUE3QjtlQUFBLDZCIiwic291cmNlUm9vdCI6IiJ9