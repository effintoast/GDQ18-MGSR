var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Power1, TweenLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
const SCORE_FADE_IN_EASE = Power1.easeOut;
const SCORE_FADE_OUT_EASE = Power1.easeIn;
const scoresRep = nodecg.Replicant('scores');
let AtomScoreDisplayElement = class AtomScoreDisplayElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        /**
         * How long, in seconds, to fade scores in/out.
         *
         * For example, a value of 0.33 means that the fade out will take 0.33
         * seconds, and then the subsequent fade in will take another 0.33 seconds.
         */
        this.scoreFadeDuration = 0.33;
    }
    ready() {
        super.ready();
        // Workaround for: https://bugs.chromium.org/p/chromium/issues/detail?id=844880
        this.shadowRoot.querySelectorAll('sc-fitted-text').forEach((node) => {
            node.$.fittedContent.style.webkitBackgroundClip = 'text';
        });
        Polymer.RenderStatus.afterNextRender(this, () => {
            scoresRep.on('change', this.updateScore.bind(this));
        });
    }
    updateScore(newScores) {
        if (!newScores || typeof newScores[this.teamIndex] !== 'number') {
            return;
        }
        if (newScores[this.teamIndex] === this.score) {
            return;
        }
        TweenLite.to(this.$.scoreText, this.scoreFadeDuration, {
            opacity: 0,
            ease: SCORE_FADE_OUT_EASE,
            callbackScope: this,
            onComplete() {
                this.score = newScores[this.teamIndex];
                TweenLite.to(this.$.scoreText, this.scoreFadeDuration, { opacity: 1, ease: SCORE_FADE_IN_EASE });
            }
        });
    }
};
__decorate([
    property({ type: Number })
], AtomScoreDisplayElement.prototype, "score", void 0);
__decorate([
    property({ type: Number })
], AtomScoreDisplayElement.prototype, "teamIndex", void 0);
__decorate([
    property({ type: Number })
], AtomScoreDisplayElement.prototype, "scoreFadeDuration", void 0);
AtomScoreDisplayElement = __decorate([
    customElement('atom-score-display')
], AtomScoreDisplayElement);
export default AtomScoreDisplayElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1zY29yZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvbS1zY29yZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDMUMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVMsUUFBUSxDQUFDLENBQUM7QUFHckQsSUFBcUIsdUJBQXVCLEdBQTVDLE1BQXFCLHVCQUF3QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRHBFOztRQVFDOzs7OztXQUtHO1FBRUgsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0lBa0MxQixDQUFDO0lBaENBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLFVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtZQUNwRixJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWdDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0MsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsU0FBa0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2hFLE9BQU87U0FDUDtRQUVELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzdDLE9BQU87U0FDUDtRQUVELFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RELE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixhQUFhLEVBQUUsSUFBSTtZQUNuQixVQUFVO2dCQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7WUFDaEcsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFBO0FBOUNBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3NEQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MERBQ1A7QUFTbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0VBQ0E7QUFkTCx1QkFBdUI7SUFEM0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0dBQ2YsdUJBQXVCLENBZ0QzQztlQWhEb0IsdUJBQXVCIn0=