var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power3, Power2 } from 'gsap';
const { customElement } = Polymer.decorators;
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
        }
        else {
            duration = BODY_TWEEN_DURATION_PER_PX * this.$.body.clientWidth;
        }
        memoizedBodyTweenDurations.set(labelHtml, duration);
        return duration;
    }
};
GDQOmnibarContentLabelElement = __decorate([
    customElement('gdq-omnibar-content-label')
], GDQOmnibarContentLabelElement);
export default GDQOmnibarContentLabelElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItY29udGVudC1sYWJlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWNvbnRlbnQtbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWxELE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzNDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMxQyxNQUFNLDBCQUEwQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDN0MsTUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLENBQUM7QUFFekM7OztHQUdHO0FBRUgsSUFBcUIsNkJBQTZCLEdBQWxELE1BQXFCLDZCQUE4QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQ3pFLEtBQUssQ0FBQyxTQUFpQjtRQUN0QixTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO1FBRTlGLE1BQU0sRUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLHFCQUFxQixFQUFFO1lBQy9DLE1BQU0sRUFBRSxDQUFDO1NBQ1QsRUFBRTtZQUNGLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQ3RCLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJ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