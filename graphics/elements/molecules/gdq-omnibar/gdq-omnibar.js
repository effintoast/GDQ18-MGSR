var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
const MILESTONES = [
    { name: 'AGDQ 2014', total: 1031665.5 },
    { name: 'AGDQ 2015', total: 1576085 },
    { name: 'AGDQ 2016', total: 1216309.02 },
    { name: 'GDQx 2016', total: 1294139.5 },
    { name: 'AGDQ 2017', total: 2222790.52 },
    { name: 'GDQx 2017', total: 1792342.37 },
    { name: 'AGDQ 2018', total: 2295190.66 }
].sort((a, b) => {
    return a.total - b.total;
}).map((milestone, index, array) => {
    const precedingMilestone = index > 0 ?
        array[index - 1] :
        { name: 'none', total: 1000000 };
    const succeedingMilestone = array[index + 1];
    const modifiedMilestone = Object.assign({}, milestone, { precedingMilestone,
        succeedingMilestone });
    Object.freeze(modifiedMilestone);
    return modifiedMilestone;
});
Object.freeze(MILESTONES);
// Configuration consts.
const DISPLAY_DURATION = nodecg.bundleConfig.displayDuration;
const SCROLL_HOLD_DURATION = nodecg.bundleConfig.omnibar.scrollHoldDuration;
// Replicants.
const currentBids = nodecg.Replicant('currentBids');
const currentLayout = nodecg.Replicant('gdq:currentLayout');
const currentPrizes = nodecg.Replicant('currentPrizes');
const currentRun = nodecg.Replicant('currentRun');
const nextRun = nodecg.Replicant('nextRun');
const recordTrackerEnabled = nodecg.Replicant('recordTrackerEnabled');
const schedule = nodecg.Replicant('schedule');
const total = nodecg.Replicant('total');
let GDQOmnibarElement = class GDQOmnibarElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.milestones = MILESTONES;
        this.noAutoLoop = false;
        this.skipLabelAnims = false;
    }
    ready() {
        super.ready();
        const replicants = [
            currentBids,
            currentLayout,
            currentPrizes,
            currentRun,
            nextRun,
            recordTrackerEnabled,
            schedule,
            total
        ];
        let numDeclared = 0;
        replicants.forEach(replicant => {
            replicant.once('change', () => {
                numDeclared++;
                // Start the loop once all replicants are declared;
                if (numDeclared >= replicants.length) {
                    Polymer.RenderStatus.beforeNextRender(this, this.run);
                }
            });
        });
    }
    run() {
        const self = this; // tslint:disable-line:no-this-assignment
        if (this.noAutoLoop) {
            return;
        }
        // For development, comment out whichever parts you don't want to see right now.
        const parts = [
            this.showCTA,
            this.showUpNext,
            this.showChallenges,
            this.showChoices,
            this.showCurrentPrizes,
            this.showMilestoneProgress
        ];
        function processNextPart() {
            if (parts.length > 0) {
                const part = parts.shift().bind(self);
                promisifyTimeline(part())
                    .then(processNextPart)
                    .catch(error => {
                    nodecg.log.error('Error when running main loop:', error);
                });
            }
            else {
                self.run();
            }
        }
        async function promisifyTimeline(tl) {
            return new Promise(resolve => {
                tl.call(resolve, undefined, null, '+=0.03');
            });
        }
        processNextPart();
    }
    /**
     * Creates an animation timeline for showing the label.
     * @param text - The text to show.
     * @param options - Options for this animation.
     * @returns An animation timeline.
     */
    showLabel(text, options) {
        const tl = new TimelineLite();
        const labelElem = this.$.label;
        const fullOptions = Object.assign({}, options, { flagHoldDuration: Math.max(DISPLAY_DURATION / 2, 5) });
        if (labelElem._showing) {
            tl.add(labelElem.change(text, fullOptions));
        }
        else {
            tl.add(labelElem.show(text, fullOptions));
        }
        if (this.skipLabelAnims) {
            tl.progress(1);
            return new TimelineLite();
        }
        return tl;
    }
    /**
     * Creates an animation timeline for hiding the label.
     * @returns An animation timeline.
     */
    hideLabel() {
        const hideAnim = this.$.label.hide();
        if (this.skipLabelAnims) {
            hideAnim.progress(1);
            return new TimelineLite();
        }
        return hideAnim;
    }
    setContent(tl, element) {
        tl.to({}, 0.03, {}); // Safety buffer to avoid issues where GSAP might skip our `call`.
        tl.call(() => {
            tl.pause();
            this.$.content.innerHTML = '';
            this.$.content.appendChild(element);
            Polymer.flush(); // Might not be necessary, but better safe than sorry.
            Polymer.RenderStatus.afterNextRender(this, () => {
                Polymer.flush(); // Might not be necessary, but better safe than sorry.
                requestAnimationFrame(() => {
                    tl.resume(null, false);
                });
            });
        });
    }
    showContent(tl, element) {
        tl.to({}, 0.03, {}); // Safety buffer to avoid issues where GSAP might skip our `call`.
        tl.call(() => {
            tl.pause();
            const elementEntranceAnim = element.enter(DISPLAY_DURATION, SCROLL_HOLD_DURATION);
            elementEntranceAnim.call(tl.resume, null, tl);
        });
    }
    hideContent(tl, element) {
        tl.to({}, 0.03, {}); // Safety buffer to avoid issues where GSAP might skip our `call`.
        tl.call(() => {
            tl.pause();
            const elementExitAnim = element.exit();
            elementExitAnim.call(tl.resume, null, tl);
        });
    }
    showCTA() {
        const tl = new TimelineLite();
        tl.add(this.hideLabel());
        tl.call(() => {
            this.$.content.innerHTML = '';
        });
        tl.add(this.$.cta.show(DISPLAY_DURATION));
        return tl;
    }
    showUpNext() {
        const tl = new TimelineLite();
        let upNextRun = nextRun.value;
        if (currentLayout.value === 'break' || currentLayout.value === 'interview') {
            upNextRun = currentRun.value;
        }
        // If we're at the final run, bail out and just skip straight to showing the next item in the rotation.
        if (!upNextRun || !schedule.value) {
            return tl;
        }
        const upcomingRuns = [upNextRun];
        schedule.value.some(item => {
            if (item.type !== 'run') {
                return false;
            }
            if (item.order <= upNextRun.order) {
                return false;
            }
            upcomingRuns.push(item);
            return upcomingRuns.length >= 4;
        });
        const listElement = document.createElement('gdq-omnibar-list');
        upcomingRuns.forEach((run, index) => {
            const element = document.createElement('gdq-omnibar-run');
            element.run = run;
            if (index === 0) {
                element.first = true;
            }
            listElement.appendChild(element);
        });
        this.setContent(tl, listElement);
        tl.add(this.showLabel('Up Next', {
            avatarIconName: 'upnext',
            flagColor: '#7EF860',
            ringColor: '#50A914'
        }), '+=0.03');
        this.showContent(tl, listElement);
        this.hideContent(tl, listElement);
        return tl;
    }
    showChallenges(overrideBids, { showClosed = false } = {}) {
        const bids = overrideBids || currentBids.value;
        const tl = new TimelineLite();
        // If there's no bids whatsoever, bail out.
        if (!bids || bids.length <= 0) {
            return tl;
        }
        // Figure out what bids to display in this batch
        const bidsToDisplay = [];
        bids.forEach(bid => {
            // Don't show closed bids in the automatic rotation.
            if (!showClosed && bid.state.toLowerCase() === 'closed') {
                return;
            }
            // Only show challenges.
            if (bid.type !== 'challenge') {
                return;
            }
            // If we have already have our three bids determined, we still need to check
            // if any of the remaining bids are for the same speedrun as the third bid.
            // This ensures that we are never displaying a partial list of bids for a given speedrun.
            if (bidsToDisplay.length < 3) {
                bidsToDisplay.push(bid);
            }
            else if (bid.speedrun === bidsToDisplay[bidsToDisplay.length - 1].speedrun) {
                bidsToDisplay.push(bid);
            }
        });
        // If there's no challenges to display, bail out.
        if (bidsToDisplay.length <= 0) {
            return tl;
        }
        const containerElement = document.createElement('gdq-omnibar-challenges');
        containerElement.challenges = bidsToDisplay;
        this.setContent(tl, containerElement);
        tl.add(this.showLabel('Challenges', {
            avatarIconName: 'challenges',
            flagColor: '#82EFFF',
            ringColor: '#FFFFFF'
        }), '+=0.03');
        this.showContent(tl, containerElement);
        this.hideContent(tl, containerElement);
        return tl;
    }
    showChoices(overrideBids, { showClosed = false } = {}) {
        const bids = overrideBids || currentBids.value;
        const tl = new TimelineLite();
        // If there's no bids whatsoever, bail out.
        if (bids.length <= 0) {
            return tl;
        }
        // Figure out what bids to display in this batch
        const bidsToDisplay = [];
        bids.forEach(bid => {
            // Don't show closed bids in the automatic rotation.
            if (!showClosed && bid.state.toLowerCase() === 'closed') {
                return;
            }
            // Only show choices.
            if (bid.type !== 'choice-binary' && bid.type !== 'choice-many') {
                return;
            }
            // If we have already have our three bids determined, we still need to check
            // if any of the remaining bids are for the same speedrun as the third bid.
            // This ensures that we are never displaying a partial list of bids for a given speedrun.
            if (bidsToDisplay.length < 3) {
                bidsToDisplay.push(bid);
            }
            else if (bid.speedrun === bidsToDisplay[bidsToDisplay.length - 1].speedrun) {
                bidsToDisplay.push(bid);
            }
        });
        // If there's no choices to display, bail out.
        if (bidsToDisplay.length <= 0) {
            return tl;
        }
        const containerElement = document.createElement('gdq-omnibar-bidwars');
        containerElement.bidWars = bidsToDisplay;
        this.setContent(tl, containerElement);
        tl.add(this.showLabel('Bid Wars', {
            avatarIconName: 'bidwars',
            flagColor: '#FF4D4A',
            ringColor: '#FF4D4D'
        }), '+=0.03');
        this.showContent(tl, containerElement);
        this.hideContent(tl, containerElement);
        return tl;
    }
    showCurrentPrizes(overridePrizes) {
        const prizes = overridePrizes || currentPrizes.value;
        const tl = new TimelineLite();
        // No prizes to show? Bail out.
        if (prizes.length <= 0) {
            return tl;
        }
        const specialPrizesToDisplayLast = [];
        const prizesToDisplay = prizes.filter(prize => {
            if (prize.id === 1892) {
                specialPrizesToDisplayLast.push(prize);
                return false;
            }
            return true;
        }).concat(specialPrizesToDisplayLast);
        const listElement = document.createElement('gdq-omnibar-list');
        prizesToDisplay.forEach(prize => {
            const element = document.createElement('gdq-omnibar-prize');
            element.prize = prize;
            listElement.appendChild(element);
        });
        this.setContent(tl, listElement);
        tl.add(this.showLabel('Prizes', {
            avatarIconName: 'prizes',
            flagColor: '#FF70C8',
            ringColor: '#EC0793'
        }), '+=0.03');
        this.showContent(tl, listElement);
        this.hideContent(tl, listElement);
        return tl;
    }
    showMilestoneProgress() {
        const tl = new TimelineLite();
        // If we have manually disabled this feature, return.
        if (!recordTrackerEnabled.value || !total.value) {
            return tl;
        }
        // If the current total is < $1M, return.
        if (total.value.raw < 1000000) {
            return tl;
        }
        const currentMilestone = MILESTONES.find(milestone => {
            return total.value.raw < milestone.total;
        });
        // If we are out of milestones to show, return.
        if (!currentMilestone) {
            return tl;
        }
        const milestoneTrackerElement = document.createElement('gdq-omnibar-milestone-tracker');
        milestoneTrackerElement.milestone = currentMilestone;
        milestoneTrackerElement.currentTotal = total.value.raw;
        this.setContent(tl, milestoneTrackerElement);
        tl.add(this.showLabel('Milestone Progress', {
            avatarIconName: 'milestones',
            flagColor: '#FFB800',
            ringColor: '#E7EC07'
        }), '+=0.03');
        this.showContent(tl, milestoneTrackerElement);
        this.hideContent(tl, milestoneTrackerElement);
        return tl;
    }
};
__decorate([
    property({ type: Array })
], GDQOmnibarElement.prototype, "milestones", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOmnibarElement.prototype, "noAutoLoop", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOmnibarElement.prototype, "skipLabelAnims", void 0);
GDQOmnibarElement = __decorate([
    customElement('gdq-omnibar')
], GDQOmnibarElement);
export default GDQOmnibarElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBY2xDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLFVBQVUsR0FBRztJQUNsQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztJQUNuQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQztJQUN0QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQztJQUN0QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQztJQUN0QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQztDQUN0QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNmLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDbEMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FB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