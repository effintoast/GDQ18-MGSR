var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const MILESTONES = [{
  name: 'AGDQ 2014',
  total: 1031665.5
}, {
  name: 'AGDQ 2015',
  total: 1576085
}, {
  name: 'AGDQ 2016',
  total: 1216309.02
}, {
  name: 'GDQx 2016',
  total: 1294139.5
}, {
  name: 'AGDQ 2017',
  total: 2222790.52
}, {
  name: 'GDQx 2017',
  total: 1792342.37
}, {
  name: 'AGDQ 2018',
  total: 2295190.66
}].sort((a, b) => {
  return a.total - b.total;
}).map((milestone, index, array) => {
  const precedingMilestone = index > 0 ? array[index - 1] : {
    name: 'none',
    total: 1000000
  };
  const succeedingMilestone = array[index + 1];
  const modifiedMilestone = Object.assign({}, milestone, {
    precedingMilestone,
    succeedingMilestone
  });
  Object.freeze(modifiedMilestone);
  return modifiedMilestone;
});
Object.freeze(MILESTONES); // Configuration consts.

const DISPLAY_DURATION = nodecg.bundleConfig.displayDuration;
const SCROLL_HOLD_DURATION = nodecg.bundleConfig.omnibar.scrollHoldDuration; // Replicants.

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
    const replicants = [currentBids, currentLayout, currentPrizes, currentRun, nextRun, recordTrackerEnabled, schedule, total];
    let numDeclared = 0;
    replicants.forEach(replicant => {
      replicant.once('change', () => {
        numDeclared++; // Start the loop once all replicants are declared;

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
    } // For development, comment out whichever parts you don't want to see right now.


    const parts = [this.showCTA, this.showUpNext, this.showChallenges, this.showChoices, this.showCurrentPrizes, this.showMilestoneProgress];

    function processNextPart() {
      if (parts.length > 0) {
        const part = parts.shift().bind(self);
        promisifyTimeline(part()).then(processNextPart).catch(error => {
          nodecg.log.error('Error when running main loop:', error);
        });
      } else {
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
    const fullOptions = Object.assign({}, options, {
      flagHoldDuration: Math.max(DISPLAY_DURATION / 2, 5)
    });

    if (labelElem._showing) {
      tl.add(labelElem.change(text, fullOptions));
    } else {
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
    } // If we're at the final run, bail out and just skip straight to showing the next item in the rotation.


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

  showChallenges(overrideBids, {
    showClosed = false
  } = {}) {
    const bids = overrideBids || currentBids.value;
    const tl = new TimelineLite(); // If there's no bids whatsoever, bail out.

    if (!bids || bids.length <= 0) {
      return tl;
    } // Figure out what bids to display in this batch


    const bidsToDisplay = [];
    bids.forEach(bid => {
      // Don't show closed bids in the automatic rotation.
      if (!showClosed && bid.state.toLowerCase() === 'closed') {
        return;
      } // Only show challenges.


      if (bid.type !== 'challenge') {
        return;
      } // If we have already have our three bids determined, we still need to check
      // if any of the remaining bids are for the same speedrun as the third bid.
      // This ensures that we are never displaying a partial list of bids for a given speedrun.


      if (bidsToDisplay.length < 3) {
        bidsToDisplay.push(bid);
      } else if (bid.speedrun === bidsToDisplay[bidsToDisplay.length - 1].speedrun) {
        bidsToDisplay.push(bid);
      }
    }); // If there's no challenges to display, bail out.

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

  showChoices(overrideBids, {
    showClosed = false
  } = {}) {
    const bids = overrideBids || currentBids.value;
    const tl = new TimelineLite(); // If there's no bids whatsoever, bail out.

    if (bids.length <= 0) {
      return tl;
    } // Figure out what bids to display in this batch


    const bidsToDisplay = [];
    bids.forEach(bid => {
      // Don't show closed bids in the automatic rotation.
      if (!showClosed && bid.state.toLowerCase() === 'closed') {
        return;
      } // Only show choices.


      if (bid.type !== 'choice-binary' && bid.type !== 'choice-many') {
        return;
      } // If we have already have our three bids determined, we still need to check
      // if any of the remaining bids are for the same speedrun as the third bid.
      // This ensures that we are never displaying a partial list of bids for a given speedrun.


      if (bidsToDisplay.length < 3) {
        bidsToDisplay.push(bid);
      } else if (bid.speedrun === bidsToDisplay[bidsToDisplay.length - 1].speedrun) {
        bidsToDisplay.push(bid);
      }
    }); // If there's no choices to display, bail out.

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
    const tl = new TimelineLite(); // No prizes to show? Bail out.

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
    const tl = new TimelineLite(); // If we have manually disabled this feature, return.

    if (!recordTrackerEnabled.value || !total.value) {
      return tl;
    } // If the current total is < $1M, return.


    if (total.value.raw < 1000000) {
      return tl;
    }

    const currentMilestone = MILESTONES.find(milestone => {
      return total.value.raw < milestone.total;
    }); // If we are out of milestones to show, return.

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

__decorate([property({
  type: Array
})], GDQOmnibarElement.prototype, "milestones", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOmnibarElement.prototype, "noAutoLoop", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOmnibarElement.prototype, "skipLabelAnims", void 0);

GDQOmnibarElement = __decorate([customElement('gdq-omnibar')], GDQOmnibarElement);
export default GDQOmnibarElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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