var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, TweenLite, Sine } from 'gsap';
import { typeAnim } from '../../../../shared/lib/type-anims';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
const countdownRunning = nodecg.Replicant('countdownRunning');
const countdownTime = nodecg.Replicant('countdown');
const nowPlaying = nodecg.Replicant('nowPlaying');
/**
 * @customElement
 * @polymer
 */
let GDQCountdownElement = class GDQCountdownElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.countdownTimeline = new TimelineLite({ autoRemoveChildren: true });
        this._fooDebouncer = null;
    }
    ready() {
        super.ready();
        TweenLite.set(this.$.countdown, { opacity: 0 });
        countdownRunning.on('change', newVal => {
            if (newVal) {
                this.showTimer();
            }
            else {
                this._debounceFoo();
            }
        });
        countdownTime.on('change', newVal => {
            this.$.countdownMinutesTens.innerText = String(Math.floor(newVal.minutes / 10));
            this.$.countdownMinutesOnes.innerText = String(newVal.minutes % 10);
            this.$.countdownSecondsTens.innerText = String(Math.floor(newVal.seconds / 10));
            this.$.countdownSecondsOnes.innerText = String(newVal.seconds % 10);
            if (newVal.raw <= 60000) {
                if (!this._didTweenRed) {
                    this._didTweenRed = true;
                    this._didTweenTeal = false;
                    TweenLite.to(this.$.countdown, 1, {
                        color: '#ED5A5A',
                        ease: Sine.easeInOut
                    });
                }
            }
            else if (!this._didTweenTeal) { // eslint-disable-line no-lonely-if
                this._didTweenRed = false;
                this._didTweenTeal = true;
                TweenLite.to(this.$.countdown, 1, {
                    color: '#00FFFF',
                    ease: Sine.easeInOut
                });
            }
            if (newVal.raw <= 0) {
                this.$.countdown.classList.add('blink');
                this._debounceFoo();
            }
            else {
                this.$.countdown.classList.remove('blink');
            }
        });
        nowPlaying.on('change', newVal => {
            this.$.nowPlaying.textContent = `${newVal.game || '?'} - ${newVal.title || '?'}`;
            typeAnim(this.$.nowPlaying);
        });
    }
    showTimer() {
        if (!this._initialized) {
            this._initialized = true;
        }
        clearTimeout(this._fooTimeout);
        const tl = this.countdownTimeline;
        tl.add(createMaybeRandomTween({
            target: this.$.pressStart.style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }), 'flickerTotal');
        tl.set(this.$.countdown, { opacity: 1 });
        tl.staggerFromTo([
            this.$.countdownMinutesTens,
            this.$.countdownMinutesOnes,
            this.$.countdownColon,
            this.$.countdownSecondsTens,
            this.$.countdownSecondsOnes
        ], 0.001, {
            visibility: 'hidden'
        }, {
            visibility: 'visible'
        }, 0.03);
    }
    hideTimer() {
        if (!this._initialized) {
            this._initialized = true;
            return;
        }
        const tl = this.countdownTimeline;
        tl.add(createMaybeRandomTween({
            target: this.$.countdown.style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }), 'flickerTotal');
        tl.set(this.$.pressStart, { opacity: 1 });
        tl.add(typeAnim(this.$.pressStart));
    }
    _debounceFoo() {
        this._fooDebouncer = Polymer.Debouncer.debounce(this._fooDebouncer, Polymer.Async.timeOut.after(300), this._foo.bind(this));
    }
    _foo() {
        clearTimeout(this._fooTimeout);
        if (countdownRunning.value === false) {
            if (countdownTime.value && countdownTime.value.raw <= 0) {
                this._fooTimeout = window.setTimeout(() => {
                    this.hideTimer();
                }, 120);
            }
            else {
                this.hideTimer();
            }
        }
    }
};
__decorate([
    property({ type: Object })
], GDQCountdownElement.prototype, "countdownTimeline", void 0);
GDQCountdownElement = __decorate([
    customElement('gdq-countdown')
], GDQCountdownElement);
export default GDQCountdownElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWNvdW50ZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1jb3VudGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBSW5ELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUUzRSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFtQixrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hGLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFDL0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYSxZQUFZLENBQUMsQ0FBQztBQUU5RDs7O0dBR0c7QUFFSCxJQUFxQixtQkFBbUIsR0FBeEMsTUFBcUIsbUJBQW9CLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMaEU7OztPQUdHO0lBQ0g7O1FBR2tCLHNCQUFpQixHQUFpQixJQUFJLFlBQVksQ0FBQyxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFNeEYsa0JBQWEsR0FBNkIsSUFBSSxDQUFDO0lBMkh4RCxDQUFDO0lBekhBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFOUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QyxJQUFJLE1BQU0sRUFB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