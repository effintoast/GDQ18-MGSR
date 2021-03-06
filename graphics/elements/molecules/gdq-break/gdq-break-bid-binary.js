var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TweenLite, TimelineLite, Sine, Power3, Power4 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { typeAnim } from "../../../../shared/lib/type-anims.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SVG = window.svgjs || window.SVG;
const ROTATION_FACTOR = 0.65;
/**
 * @customElement
 * @polymer
 */

let GDQBreakBidBinaryElement = class GDQBreakBidBinaryElement extends Polymer.Element {
  ready() {
    super.ready();

    this._initPieChartSVG();

    TweenLite.set(this.$.winningOptionAmount, {
      opacity: 0,
      x: -36,
      color: 'transparent'
    });
    TweenLite.set(this.$.losingOptionAmount, {
      opacity: 0,
      x: 36,
      color: 'transparent'
    });
    TweenLite.set(this._svgDoc.node, {
      opacity: 0
    });
  }

  enter() {
    const tl = new TimelineLite();
    const winningPercent = this.bid.options[0].rawTotal / this.bid.rawTotal;
    const proxy = {
      percent: 0
    };
    const winningOptionNameEl = this.$.winningOptionName;
    const losingOptionNameEl = this.$.losingOptionName;
    const winningOptionAmountEl = this.$.winningOptionAmount;
    const losingOptionAmountEl = this.$.losingOptionAmount;
    tl.call(() => {
      winningOptionAmountEl.innerText = '$' + this.bid.options[0].rawTotal.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      });
      losingOptionAmountEl.innerText = '$' + this.bid.options[1].rawTotal.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      });
    }, undefined, null, '+=0.03');
    tl.to([this.$.winningOptionAmount, this.$.losingOptionAmount], 0.384, {
      opacity: 1,
      x: 0,
      ease: Sine.easeOut
    });
    tl.call(() => {
      winningOptionAmountEl.style.color = '';
      losingOptionAmountEl.style.color = '';
      typeAnim(winningOptionAmountEl);
      typeAnim(losingOptionAmountEl);
    });
    tl.add(createMaybeRandomTween({
      target: this._svgDoc.node.style,
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
    }), '+=0.1');
    tl.to(proxy, 1, {
      percent: winningPercent,
      ease: Power3.easeInOut,
      onStart: () => {
        this._svgDoc.style({
          transform: `rotate(${ROTATION_FACTOR}turn)`
        });

        winningOptionNameEl.innerText = this.bid.options[0].description || this.bid.options[0].name;
        losingOptionNameEl.innerText = this.bid.options[1].description || this.bid.options[1].name;
        typeAnim(winningOptionNameEl);
        typeAnim(losingOptionNameEl);
      },
      onUpdate: () => {
        this.drawWinningSlice(proxy.percent);
      }
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.add(createMaybeRandomTween({
      target: this.style,
      propName: 'opacity',
      duration: 0.2,
      ease: Power4.easeIn,
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

  _initPieChartSVG() {
    const svgDoc = SVG(this.$.chart);
    svgDoc.viewbox(-1, -1, 2, 2);
    this._svgDoc = svgDoc;
    svgDoc.circle(2).fill({
      color: '#ffee54',
      opacity: 0.25
    }).move(-1, -1);
    const anglePI = ROTATION_FACTOR * 360 * (Math.PI / 180);
    const gradientCoords = {
      x1: Math.round(Math.sin(anglePI) * 50 + 50) + '%',
      y1: Math.round(Math.cos(anglePI) * 50 + 50) + '%',
      x2: Math.round(Math.sin(anglePI + Math.PI) * 50 + 50) + '%',
      y2: Math.round(Math.cos(anglePI + Math.PI) * 50 + 50) + '%'
    };
    const gradient = svgDoc.gradient('linear', stop => {
      stop.at(0, '#57c7ef');
      stop.at(1, '#63f1fd');
    }).from(gradientCoords.x1, gradientCoords.y1).to(gradientCoords.x2, gradientCoords.y2);
    this._winningSlice = svgDoc.path().fill(gradient);
  }

  drawWinningSlice(percent) {
    // Note the svg viewBox is offset so the center of the SVG is 0,0.
    const arcLength = Math.PI * 2 * percent;
    const startX = Math.cos(arcLength / -2);
    const startY = Math.sin(arcLength / -2);
    const endX = Math.cos(arcLength / 2);
    const endY = Math.sin(arcLength / 2);
    const largeArcFlag = percent > 0.5 ? 1 : 0;
    const d = [`M ${startX} ${startY}`, `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, 'L 0 0'].join(' ');

    this._winningSlice.plot(d);
  }

};

__decorate([property({
  type: Object
})], GDQBreakBidBinaryElement.prototype, "bid", void 0);

GDQBreakBidBinaryElement = __decorate([customElement('gdq-break-bid-binary')], GDQBreakBidBinaryElement);
export default GDQBreakBidBinaryElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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