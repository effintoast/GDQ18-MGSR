var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
const currentRun = nodecg.Replicant('currentRun');
const stopwatch = nodecg.Replicant('stopwatch');
const gameAudioChannels = nodecg.Replicant('gameAudioChannels');
/**
 * @customElement
 * @polymer
 */

let GDQRunnerNameplateElement = class GDQRunnerNameplateElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.noLeftCap = false;
    this.noRightCap = false;
    this.audio = false;
    this.noAudio = false;
    this.coop = false;
    this.finished = false;
    this.forfeit = false;
    this._numRunners = 1;
  }

  ready() {
    super.ready();
    this.currentRunChanged = this.currentRunChanged.bind(this);
    this.stopwatchChanged = this.stopwatchChanged.bind(this);
    this.gameAudioChannelsChanged = this.gameAudioChannelsChanged.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      // Attach replicant change listeners.
      currentRun.on('change', this.currentRunChanged);
      stopwatch.on('change', this.stopwatchChanged);
      gameAudioChannels.on('change', this.gameAudioChannelsChanged);
    });
  }
  /*
   * 1) For singleplayer, if both match (ignoring capitalization), show only twitch.
   * 2) For races, if everyone matches (ignoring capitalization), show only twitch, otherwise,
   *    if even one person needs to show both, everyone shows both.
   */


  currentRunChanged(newVal, oldVal) {
    if (!newVal || typeof newVal !== 'object') {
      return;
    }

    this.coop = newVal.coop;
    this._numRunners = newVal.runners.length; // Only invoke updateNames if the names could have changed.

    if (!oldVal || JSON.stringify(newVal.runners) !== JSON.stringify(oldVal.runners)) {
      this.updateNames(newVal.runners);
    }
  }

  updateNames(runners) {
    let canConflateAllRunners = true;
    runners.forEach(r => {
      if (r && (!r.stream || r.name.toLowerCase() !== r.stream.toLowerCase())) {
        canConflateAllRunners = false;
      }
    });
    const runner = runners[this.index];
    let alias;
    let twitchAlias;

    if (runner) {
      alias = runner.name;

      if (runner.stream) {
        twitchAlias = runner.stream;
      } else {
        twitchAlias = '';
      }
    } else {
      alias = '?';
      twitchAlias = '?';
    }

    this.$.nameplate.updateName({
      alias,
      twitchAlias,
      rotate: !canConflateAllRunners
    });
  }

  stopwatchChanged(newVal) {
    if (newVal.results[this.index]) {
      this.forfeit = newVal.results[this.index].forfeit;
      this.place = newVal.results[this.index].place;
      this.time = newVal.results[this.index].time.formatted;
      this.finished = true;
    } else {
      this.forfeit = false;
      this.finished = false;
    }
  }

  gameAudioChannelsChanged(newVal) {
    if (this.noAudio) {
      return;
    }

    if (!newVal || newVal.length <= 0) {
      return;
    }

    const channels = newVal[this.index];
    const canHearSd = !channels.sd.muted && !channels.sd.fadedBelowThreshold;
    const canHearHd = !channels.hd.muted && !channels.hd.fadedBelowThreshold;
    this.audio = canHearSd || canHearHd;
  }

  _computeFirstPlace(place) {
    return place === 1;
  }

  _computeLastPlace(place, numRunners) {
    return place === numRunners;
  }

  _calcResultHidden(resultSide) {
    return !resultSide;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "noLeftCap", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "noRightCap", void 0);

__decorate([property({
  type: Number
})], GDQRunnerNameplateElement.prototype, "index", void 0);

__decorate([property({
  type: String
})], GDQRunnerNameplateElement.prototype, "audioVertPos", void 0);

__decorate([property({
  type: String
})], GDQRunnerNameplateElement.prototype, "audioHorizPos", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "audio", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "noAudio", void 0);

__decorate([property({
  type: String
})], GDQRunnerNameplateElement.prototype, "resultSide", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "coop", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "finished", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRunnerNameplateElement.prototype, "forfeit", void 0);

__decorate([property({
  type: String
})], GDQRunnerNameplateElement.prototype, "time", void 0);

__decorate([property({
  type: Number
})], GDQRunnerNameplateElement.prototype, "place", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeFirstPlace(place)'
})], GDQRunnerNameplateElement.prototype, "firstPlace", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeLastPlace(place, _numRunners)'
})], GDQRunnerNameplateElement.prototype, "lastPlace", void 0);

__decorate([property({
  type: Number
})], GDQRunnerNameplateElement.prototype, "_numRunners", void 0);

GDQRunnerNameplateElement = __decorate([customElement('gdq-runner-nameplate')], GDQRunnerNameplateElement);
export default GDQRunnerNameplateElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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