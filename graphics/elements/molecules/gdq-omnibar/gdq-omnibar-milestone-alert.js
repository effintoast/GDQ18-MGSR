var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power3 } from 'gsap';
const { customElement, property } = Polymer.decorators;
const SLIDE_HOLD_DURATION = 4;
const recordTrackerEnabled = nodecg.Replicant('recordTrackerEnabled');
const total = nodecg.Replicant('total');
let GDQOmnibarMilestoneAlertElement = class GDQOmnibarMilestoneAlertElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.tl = new TimelineLite({ autoRemoveChildren: true });
    }
    ready() {
        super.ready();
        let lastRaw;
        total.on('change', newVal => {
            if (!newVal || typeof newVal.raw !== 'number') {
                return;
            }
            if (!this._initialized) {
                lastRaw = newVal.raw;
                this._initialized = true;
                return;
            }
            // If we have manually disabled this feature, return.
            if (!recordTrackerEnabled.value) {
                return;
            }
            const highestPassedMilestone = this.milestones
                .slice(0)
                .reverse()
                .find(milestone => {
                return newVal.raw >= milestone.total;
            });
            if (!highestPassedMilestone) {
                return;
            }
            if (lastRaw &&
                newVal.raw >= highestPassedMilestone.total &&
                lastRaw < highestPassedMilestone.total) {
                const alertAnim = this.alertMilestonePassed(highestPassedMilestone);
                this.tl.add(alertAnim, '+=0.1');
            }
            lastRaw = newVal.raw;
        });
    }
    alertMilestonePassed(milestone) {
        const tl = new TimelineLite();
        tl.call(() => {
            this.displayingMilestone = milestone;
        }, undefined, null, '+=0.1');
        tl.to(this.$.layer1, 0.5, {
            clipPath: 'inset(0 0% 0 0%)',
            ease: Power3.easeInOut
        });
        tl.to(this.$.layer2, 0.5, {
            clipPath: 'inset(0 0% 0 0%)',
            ease: Power3.easeInOut
        }, `+=${SLIDE_HOLD_DURATION}`);
        tl.to(this.$.layer3, 0.5, {
            clipPath: 'inset(0 0% 0 0%)',
            ease: Power3.easeInOut
        }, `+=${SLIDE_HOLD_DURATION}`);
        tl.set([this.$.layer1, this.$.layer2], { opacity: 0 });
        tl.set(this.$.layer3, {
            // Prevent GSAP from using shorthand, which would break the next anim.
            clipPath: 'inset(0.01px 0.01% 0.02px 0%)'
        });
        tl.to(this.$.layer3, 0.5, {
            clipPath: 'inset(0px 0% 0px 100%)',
            ease: Power3.easeInOut
        }, `+=${SLIDE_HOLD_DURATION}`);
        tl.set([
            this.$.layer1,
            this.$.layer2,
            this.$.layer3
        ], {
            clearProps: 'all'
        });
        return tl;
    }
    _formatTotal(amount) {
        return '$' + amount.toLocaleString('en-US', {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        });
    }
    _calcLayer3Message(succeedingMilestone) {
        if (succeedingMilestone) {
            return `NEXT MILESTONE:&nbsp;<b>${succeedingMilestone.name} - ${this._formatTotal(succeedingMilestone.total)}</b>`;
        }
        return '<b>NEW GAMES DONE QUICK PB!</b>';
    }
};
__decorate([
    property({ type: Array })
], GDQOmnibarMilestoneAlertElement.prototype, "milestones", void 0);
__decorate([
    property({ type: Object })
], GDQOmnibarMilestoneAlertElement.prototype, "displayingMilestone", void 0);
GDQOmnibarMilestoneAlertElement = __decorate([
    customElement('gdq-omnibar-milestone-alert')
], GDQOmnibarMilestoneAlertElement);
export default GDQOmnibarMilestoneAlertElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItbWlsZXN0b25lLWFsZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW9tbmliYXItbWlsZXN0b25lLWFsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBSTFDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsQ0FBQztBQUM5QixNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQXVCLHNCQUFzQixDQUFDLENBQUM7QUFDNUYsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBUSxPQUFPLENBQUMsQ0FBQztBQUcvQyxJQUFxQiwrQkFBK0IsR0FBcEQsTUFBcUIsK0JBQWdDLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFENUU7O1FBUUMsT0FBRSxHQUFpQixJQUFJLFlBQVksQ0FBQyxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUF1R2pFLENBQUM7SUFwR0EsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLElBQUksT0FBZSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDOUMsT0FBTzthQUNQO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTzthQUNQO1lBRUQscURBQXFEO1lBQ3JELElBQUksQ0FBQyxvQkFBb0Is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