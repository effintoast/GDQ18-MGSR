var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Linear, Sine, Power2 } from 'gsap';
import InterruptMixin from '../../../mixins/interrupt-mixin';
import { typeAnim, untypeAnim } from '../../../../shared/lib/type-anims';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
import * as DrawSVGPlugin from '../../../../shared/lib/vendor/DrawSVGPlugin';
window._gsapPlugins = [DrawSVGPlugin]; // prevent tree shaking
const { customElement, property } = Polymer.decorators;
const SVG = (window.svgjs || window.SVG);
/**
 * @customElement
 * @polymer
 */
let GDQTweetElement = class GDQTweetElement extends InterruptMixin(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.label = '';
        this.companionElement = document.querySelector('gdq-sponsors');
        this.bindToMessage = 'showTweet';
        this.backgroundOpacity = 0.25;
    }
    ready() {
        super.ready();
        this._initBackgroundSVG();
        this._addReset();
        Polymer.RenderStatus.beforeNextRender(this, () => {
            const layoutAppElement = document.querySelector('layout-app');
            if (!this.companionElement && layoutAppElement) {
                const sponsorsElement = layoutAppElement.shadowRoot.querySelector('gdq-sponsors');
                if (sponsorsElement) {
                    this.companionElement = sponsorsElement;
                }
            }
        });
    }
    /**
     * Adds a reset to the master timeline.
     */
    _addReset() {
        const tl = this.timeline;
        tl.call(() => {
            this.$['body-actual'].innerHTML = '';
            this.$.name.innerHTML = '';
        }, undefined, null, '+=0.03');
        tl.set(this.$svg.bgRect.node, { drawSVG: '0%', 'fill-opacity': 0 });
        tl.set([this.$.label, this.$.name], { scaleX: 0, color: 'transparent', clipPath: '' });
        tl.set(this.$['body-actual'], { opacity: 1 });
    }
    /**
     * Creates an entrance animation timeline.
     * @param tweet - The tweet to enter.
     * @returns A GSAP animation timeline.
     */
    _createEntranceAnim(tweet) {
        const tl = new TimelineLite();
        tl.addLabel('start', '+=0.03');
        tl.call(() => {
            this.$.name.innerText = `@${tweet.user.screen_name}`;
        }, undefined, null, 'start');
        tl.to(this.$svg.bgRect.node, 0.75, {
            drawSVG: '100%',
            ease: Linear.easeNone
        }, 'start');
        tl.to(this.$.name, 0.334, {
            scaleX: 1,
            ease: Sine.easeInOut,
            onComplete: () => {
                this.$.name.style.color = '';
                typeAnim(this.$.name);
            }
        }, 'start+=0.05');
        tl.to(this.$.label, 0.334, {
            scaleX: 1,
            ease: Sine.easeInOut,
            onComplete: () => {
                this.$.label.style.color = '';
                typeAnim(this.$.label);
            }
        }, 'start+=0.4');
        tl.to(this.$svg.bgRect.node, 0.5, {
            'fill-opacity': this.backgroundOpacity,
            ease: Sine.easeOut
        }, 'start+=1');
        tl.call(() => {
            this.$['body-actual'].innerHTML = tweet.text;
            typeAnim(this.$['body-actual'], { typeInterval: 0.01 });
        });
        return tl;
    }
    /**
     * Creates an animation for changing the currently displayed tweet.
     * This is only used when hot-swapping tweets
     * (i.e., changing tweets while the graphic is already showing).
     * @param tweet - The new tweet to show.
     * @returns A GSAP animation timeline.
     */
    _createChangeAnim(tweet) {
        const tl = new TimelineLite();
        let exitedPreviousTweet = false;
        tl.call(() => {
            if (exitedPreviousTweet) {
                return;
            }
            tl.pause();
            const exitTextTl = new TimelineLite();
            exitTextTl.add(untypeAnim(this.$.name, 0.01), 0);
            exitTextTl.add(untypeAnim(this.$['body-actual'], 0.01), 0.08);
            exitTextTl.call(() => {
                exitedPreviousTweet = true;
                tl.resume();
            });
        }, undefined, null, '+=0.03');
        tl.call(() => {
            this.$.name.innerText = `@${tweet.user.screen_name}`;
            this.$['body-actual'].innerHTML = tweet.text;
            const enterTextTl = new TimelineLite();
            enterTextTl.add(typeAnim(this.$.name, { typeInterval: 0.01 }), 0);
            enterTextTl.add(typeAnim(this.$['body-actual'], { typeInterval: 0.01 }), 0.08);
        }, undefined, null, '+=0.03');
        return tl;
    }
    /**
     * Creates an exit animation timeline.
     * @returns A GSAP animation timeline.
     */
    _createExitAnim() {
        const tl = new TimelineLite();
        tl.add('exit');
        tl.add(createMaybeRandomTween({
            target: this.$['body-actual'].style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }), 'exit');
        tl.to(this.$svg.bgRect.node, 0.5, {
            'fill-opacity': 0,
            ease: Sine.easeOut
        }, 'exit');
        tl.to(this.$svg.bgRect.node, 1.5, {
            drawSVG: '0%',
            ease: Power2.easeIn
        }, 'exit');
        tl.fromTo(this.$.label, 0.334, {
            clipPath: 'inset(0 0% 0 0)'
        }, {
            clipPath: 'inset(0 100% 0 0)',
            ease: Sine.easeInOut
        }, 'exit+=0.9');
        tl.fromTo(this.$.name, 0.334, {
            clipPath: 'inset(0 0 0 0%)'
        }, {
            clipPath: 'inset(0 0 0 100%)',
            ease: Sine.easeInOut
        }, 'exit+=1.3');
        return tl;
    }
    _initBackgroundSVG() {
        if (this._initialized) {
            throw new Error('this element has already been initialized');
        }
        this._initialized = true;
        const STROKE_SIZE = 1;
        this.$svg = {};
        const svgDoc = SVG(this.$.background);
        const bgRect = svgDoc.rect();
        this.$svg.svgDoc = svgDoc;
        this.$svg.bgRect = bgRect;
        // Intentionally flip the width and height.
        // This is part of how we get the drawSVG anim to go in the direction we want.
        bgRect.stroke({
            color: 'white',
            // Makes it effectively STROKE_SIZE, because all SVG strokes
            // are center strokes, and the outer half is cut off.
            width: STROKE_SIZE * 2
        });
        bgRect.fill({ color: 'black', opacity: this.backgroundOpacity });
        this.resize();
    }
    resize() {
        if (!this._initialized) {
            return;
        }
        const ELEMENT_WIDTH = this.$.background.clientWidth;
        const ELEMENT_HEIGHT = this.$.background.clientHeight;
        this.$svg.svgDoc.size(ELEMENT_WIDTH, ELEMENT_HEIGHT);
        this.$svg.bgRect.size(ELEMENT_HEIGHT, ELEMENT_WIDTH);
        // Rotate and translate such that drawSVG anims start from the top right
        // and move clockwise to un-draw, counter-clockwise to un-draw.
        this.$svg.bgRect.style({ transform: `rotate(90deg) translateY(${-ELEMENT_WIDTH}px)` });
    }
    _falsey(value) {
        return !value;
    }
};
__decorate([
    property({ type: String })
], GDQTweetElement.prototype, "label", void 0);
__decorate([
    property({ type: Object })
], GDQTweetElement.prototype, "companionElement", void 0);
__decorate([
    property({ type: String })
], GDQTweetElement.prototype, "bindToMessage", void 0);
__decorate([
    property({ type: Number })
], GDQTweetElement.prototype, "backgroundOpacity", void 0);
GDQTweetElement = __decorate([
    customElement('gdq-tweet')
], GDQTweetElement);
export default GDQTweetElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXR3ZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLXR3ZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxjQUFtQyxNQUFNLGlDQUFpQyxDQUFDO0FBRWxGLE9BQU8sRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxLQUFLLGFBQWEsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxNQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7QUFFdkUsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sR0FBRyxHQUFHLENBQUUsTUFBYyxDQUFDLEtBQUssSUFBSyxNQUFjLENBQUMsR0FBRyxDQUFrQixDQUFDO0FBRTVFOzs7R0FHRztBQUVILElBQXFCLGVBQWUsR0FBcEMsTUFBcUIsZUFBZ0IsU0FBUSxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUw1RTs7O09BR0c7SUFDSDs7UUFHQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBR1gscUJBQWdCLEdBQStCLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFHdEYsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFHNUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0lBMk4xQixDQUFDO0lBbE5BLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsT0FBTyxD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