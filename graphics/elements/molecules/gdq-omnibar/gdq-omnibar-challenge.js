var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TweenLite, TimelineLite, Sine, Linear, Power2, Power4 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
const RIGHT_TIME_PER_PIXEL = 0.00107;
const LEFT_TIME_PER_PIXEL = 0.00107;
const PROGRESS_FILL_OFFSET = 10;
const TAIL_CHEVRON_WIDTH = 6;
const DIRECTION_CHANGE_DELAY = 0.1167;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarChallengeElement = class GDQOmnibarChallengeElement extends Polymer.Element {
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
    TweenLite.set(this.$.goal, {
      opacity: 0
    });
  }

  enter() {
    const progressFillElem = this.$.progressFill;
    const progressBlockElem = this.$.progressBlock;
    const goalBlockElem = this.$.goalBlock;
    const tailChevronElem = this.$.tailChevron;
    const totalElem = this.$.total;
    let progressPercentage = this.bid.rawTotal / this.bid.rawGoal;
    progressPercentage = Math.min(progressPercentage, 1); // Clamp to 1 max.

    progressPercentage = Math.max(progressPercentage, 0); // Clamp to 0 min.

    const revealTweenWidth = this.$.body.clientWidth - tailChevronElem.clientWidth + PROGRESS_FILL_OFFSET;
    this._revealTweenWidth = revealTweenWidth;
    const progressBlockWidth = progressBlockElem.clientWidth;
    const tl = new TimelineLite();
    let didFlickerGoalBlock = false;
    /* This mess of bullshit is how we get the animated fill to be clipped how we want. */

    const progressFillGroup = progressFillElem.svgDoc.group();
    const progressFillClip = progressBlockElem.arrowBlock.clone();
    progressFillClip.attr({
      filter: 'none'
    });
    TweenLite.set(progressFillElem.arrowBlock.node, {
      x: '-100%'
    });
    progressFillElem.arrowBlock.before(progressFillClip);
    progressFillElem.arrowBlock.before(progressFillGroup);
    progressFillElem.arrowBlock.addTo(progressFillGroup);
    progressFillGroup.clipWith(progressFillClip);
    /* End mess of bullshit. */

    tl.set(tailChevronElem, {
      opacity: 1
    });
    tl.call(() => {
      goalBlockElem.arrowBlock.attr({
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
    tl.addLabel('reveal', `+=${DIRECTION_CHANGE_DELAY}`);
    tl.to(tailChevronElem, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
      x: 0,
      ease: 'BidwarOptionReveal',
      onUpdate: () => {
        // Flicker the goal block shortly after it has been fully revealed.
        if (!didFlickerGoalBlock && tailChevronElem._gsTransform.x <= progressBlockWidth) {
          didFlickerGoalBlock = true;
          createMaybeRandomTween({
            target: {},
            propName: 'placeholder',
            duration: 0.465,
            delay: 0.1,
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
              this.$.goal.style.opacity = String(randomValue);
              this.$.goalBlock.arrowBlock.attr({
                'fill-opacity': randomValue
              });
            }
          });
        }
      }
    }, 'reveal');
    tl.to(this.$.body, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
      clipPath: 'inset(0 -13px 0 0px)',
      ease: 'BidwarOptionReveal',
      onComplete: () => {
        TweenLite.to(this.$.body, 0.18, {
          clipPath: 'inset(0 -13px)'
        });
      }
    }, 'reveal');
    tl.set(tailChevronElem, {
      '--atom-chevron-background': 'transparent'
    });
    const progressFillWidth = progressFillElem.arrowBlock.node.getBoundingClientRect().width - PROGRESS_FILL_OFFSET;
    const tailChevronEndX = progressFillWidth * progressPercentage;
    this._progressTweenDuration = progressFillWidth * progressPercentage * RIGHT_TIME_PER_PIXEL;
    tl.addLabel('fillProgress', '+=0');
    tl.to(tailChevronElem, this._progressTweenDuration, {
      x: tailChevronEndX,
      ease: Power2.easeInOut,
      callbackScope: this,

      onUpdate() {
        if (tailChevronElem._gsTransform.x >= PROGRESS_FILL_OFFSET) {
          TweenLite.set(progressFillElem.arrowBlock.node, {
            x: tailChevronElem._gsTransform.x + PROGRESS_FILL_OFFSET
          });
        }
      }

    }, 'fillProgress');
    const totalTextCanFitOnLeft = tailChevronEndX - 7 >= totalElem.$.gradientFill.clientWidth + 24;

    if (totalTextCanFitOnLeft) {
      totalElem.align = 'right';
      TweenLite.set(totalElem, {
        left: tailChevronEndX - 6
      });
    } else {
      TweenLite.set(totalElem, {
        left: tailChevronEndX + totalElem.clientWidth + 25
      });
    }

    tl.add(createMaybeRandomTween({
      target: totalElem.style,
      propName: 'opacity',
      duration: 0.465,
      ease: Power4.easeIn,
      start: {
        probability: 1,
        normalValue: 0
      },
      end: {
        probability: 0,
        normalValue: 1
      }
    }));
    return tl;
  }

  exit() {
    const tl = new TimelineLite(); // Things seem to ignore the clip path when they have a will-change style.

    tl.set(this.$.goal, {
      willChange: 'unset'
    });
    tl.set(this.$.total, {
      willChange: 'unset'
    });
    tl.addLabel('concealFill', '+=0.1'); // Give the will-change sets above time to apply.

    tl.to(this.$.tailChevron, this._progressTweenDuration, {
      x: TAIL_CHEVRON_WIDTH,
      ease: Power2.easeInOut,
      onUpdate: () => {
        if (this.$.tailChevron._gsTransform.x >= PROGRESS_FILL_OFFSET) {
          TweenLite.set(this.$.progressFill.arrowBlock.node, {
            x: this.$.tailChevron._gsTransform.x + PROGRESS_FILL_OFFSET
          });
        }
      }
    }, 'concealFill');
    tl.set(this.$.tailChevron, {
      clearProps: '--atom-chevron-background'
    });
    tl.set(this.$.body, {
      clipPath: 'inset(0 -13px 0 0px)'
    });
    tl.addLabel('concealAll', `+=${DIRECTION_CHANGE_DELAY}`);
    const concealTweenWidth = this._revealTweenWidth + TAIL_CHEVRON_WIDTH;
    tl.to(this.$.tailChevron, concealTweenWidth * RIGHT_TIME_PER_PIXEL, {
      x: concealTweenWidth,
      ease: Sine.easeInOut
    }, 'concealAll');
    tl.to(this.$.body, concealTweenWidth * RIGHT_TIME_PER_PIXEL, {
      clipPath: `inset(0 -13px 0 ${concealTweenWidth}px)`,
      ease: Sine.easeInOut
    }, 'concealAll');
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
    const progressFillElem = this.$.progressFill;
    const progressBlockElem = this.$.progressBlock;
    this.$.goalBlock.render(); // Must be rendered before #progressBlock.

    this.$.tailChevron.render();
    progressBlockElem.render({
      useContentWidth: false
    });
    this.$.separatorChevron.render();
    progressFillElem.render({
      useContentWidth: false
    }); // Must be rendered after #progressBlock.
    // Set the progressFill svgDoc to be the same size as the progressBlock svgDoc.

    progressFillElem.svgDoc.size(progressBlockElem.svgDoc.width(), progressBlockElem.svgDoc.height()); // Copy the points from the progressBlock shape to the progressFill shape.
    // This ensures that these shapes are identical.

    progressFillElem.arrowBlock.attr({
      points: progressBlockElem.arrowBlock.attr('points')
    });
  }

};

__decorate([property({
  type: Object
})], GDQOmnibarChallengeElement.prototype, "bid", void 0);

GDQOmnibarChallengeElement = __decorate([customElement('gdq-omnibar-challenge')], GDQOmnibarChallengeElement);
export default GDQOmnibarChallengeElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWNoYWxsZW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLFNBQVEsU0FBUixFQUFtQixZQUFuQixFQUFpQyxJQUFqQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUF1RCxNQUF2RCxRQUFvRSxvREFBcEU7QUFDQSxTQUFRLHNCQUFSLFFBQXFDLHdDQUFyQztBQU1BLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFFQSxNQUFNLG9CQUFvQixHQUFHLE9BQTdCO0FBQ0EsTUFBTSxtQkFBbUIsR0FBRyxPQUE1QjtBQUNBLE1BQU0sb0JBQW9CLEdBQUcsRUFBN0I7QUFDQSxNQUFNLGtCQUFrQixHQUFHLENBQTNCO0FBQ0EsTUFBTSxzQkFBc0IsR0FBRyxNQUEvQjtBQUVBOzs7OztBQUtBLElBQXFCLDBCQUEwQixHQUEvQyxNQUFxQiwwQkFBckIsU0FBd0QsT0FBTyxDQUFDLE9BQWhFLENBQXVFO0FBT3RFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLEtBQUssQ0FBTCxDQUFPLFdBQXJCLEVBQWtDO0FBQUMsTUFBQSxPQUFPLEVBQUU7QUFBVixLQUFsQztBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxLQUFLLENBQUwsQ0FBTyxJQUFyQixFQUEyQjtBQUFDLE1BQUEsT0FBTyxFQUFFO0FBQVYsS0FBM0I7QUFDQSxJQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsS0FBSyxDQUFMLENBQU8sS0FBckIsRUFBNEI7QUFBQyxNQUFBLE9BQU8sRUFBRTtBQUFWLEtBQTVCO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLEtBQUssQ0FBTCxDQUFPLElBQXJCLEVBQTJCO0FBQUMsTUFBQSxPQUFPLEVBQUU7QUFBVixLQUEzQjtBQUNBOztBQUVELEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFB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