var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TweenLite, TimelineLite, Sine, Power3, Power4 } from 'gsap';
import { typeAnim } from '../../../../shared/lib/type-anims';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
const SVG = (window.svgjs || window.SVG);
const ROTATION_FACTOR = 0.65;
/**
 * @customElement
 * @polymer
 */
let GDQBreakBidBinaryElement = class GDQBreakBidBinaryElement extends Polymer.Element {
    ready() {
        super.ready();
        this._initPieChartSVG();
        TweenLite.set(this.$.winningOptionAmount, { opacity: 0, x: -36, color: 'transparent' });
        TweenLite.set(this.$.losingOptionAmount, { opacity: 0, x: 36, color: 'transparent' });
        TweenLite.set(this._svgDoc.node, { opacity: 0 });
    }
    enter() {
        const tl = new TimelineLite();
        const winningPercent = this.bid.options[0].rawTotal / this.bid.rawTotal;
        const proxy = { percent: 0 };
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
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 1 }
        }), '+=0.1');
        tl.to(proxy, 1, {
            percent: winningPercent,
            ease: Power3.easeInOut,
            onStart: () => {
                this._svgDoc.style({ transform: `rotate(${ROTATION_FACTOR}turn)` });
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
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }));
        return tl;
    }
    _initPieChartSVG() {
        const svgDoc = SVG(this.$.chart);
        svgDoc.viewbox(-1, -1, 2, 2);
        this._svgDoc = svgDoc;
        svgDoc.circle(2).fill({ color: '#ffee54', opacity: 0.25 }).move(-1, -1);
        const anglePI = (ROTATION_FACTOR * 360) * (Math.PI / 180);
        const gradientCoords = {
            x1: Math.round((Math.sin(anglePI) * 50) + 50) + '%',
            y1: Math.round((Math.cos(anglePI) * 50) + 50) + '%',
            x2: Math.round((Math.sin(anglePI + Math.PI) * 50) + 50) + '%',
            y2: Math.round((Math.cos(anglePI + Math.PI) * 50) + 50) + '%'
        };
        const gradient = svgDoc
            .gradient('linear', stop => {
            stop.at(0, '#57c7ef');
            stop.at(1, '#63f1fd');
        })
            .from(gradientCoords.x1, gradientCoords.y1)
            .to(gradientCoords.x2, gradientCoords.y2);
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
        const d = [
            `M ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            'L 0 0'
        ].join(' ');
        this._winningSlice.plot(d);
    }
};
__decorate([
    property({ type: Object })
], GDQBreakBidBinaryElement.prototype, "bid", void 0);
GDQBreakBidBinaryElement = __decorate([
    customElement('gdq-break-bid-binary')
], GDQBreakBidBinaryElement);
export default GDQBreakBidBinaryElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJpZC1iaW5hcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtYnJlYWstYmlkLWJpbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFHM0UsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sR0FBRyxHQUFHLENBQUUsTUFBYyxDQUFDLEtBQUssSUFBSyxNQUFjLENBQUMsR0FBRyxDQUFrQixDQUFDO0FBQzVFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUU3Qjs7O0dBR0c7QUFFSCxJQUFxQix3QkFBd0IsR0FBN0MsTUFBcUIsd0JBQXlCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFPcEUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUNwRixTQUFTLENBQUMsR0FBRyxDQUFD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