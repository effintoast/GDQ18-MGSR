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
let GDQTimekeeperCoopElement = class GDQTimekeeperCoopElement extends Polymer.Element {
  calcRunnerStatus(results) {
    if (results[0]) {
      return results[0].time.formatted;
    }

    return 'Running';
  }

  calcRunnerStatusClass(results) {
    if (results[0] && !results[0].forfeit) {
      return 'finished';
    }

    return '';
  }

  calcFinishHidden(results) {
    return results[0] && !results[0].forfeit;
  }

  calcResumeHidden(results) {
    return !results[0];
  }

  calcForfeitHidden(results) {
    return results[0] && results[0].forfeit;
  }

  calcEditDisabled(results) {
    return !results[0];
  }

  finish() {
    nodecg.sendMessage('completeRunner', {
      index: this.index,
      forfeit: false
    });
  }

  forfeit() {
    nodecg.sendMessage('completeRunner', {
      index: this.index,
      forfeit: true
    });
  }

  resume() {
    nodecg.sendMessage('resumeRunner', this.index);
  }

  editTime() {
    this.dispatchEvent(new CustomEvent('edit-time', {
      bubbles: true,
      composed: true
    }));
  }

  calcConcatenatedRunners(runners) {
    let concatenatedRunners = runners[0].name;

    if (runners.length > 1) {
      concatenatedRunners = runners.slice(1).reduce((prev, curr, index, array) => {
        if (!curr || !curr.name) {
          return prev;
        }

        if (index === array.length - 1) {
          return `${prev} & ${curr.name}`;
        }

        return `${prev}, ${curr.name}`;
      }, concatenatedRunners);
    }

    return concatenatedRunners;
  }

};

__decorate([property({
  type: String
})], GDQTimekeeperCoopElement.prototype, "importPath", void 0);

__decorate([property({
  type: Number
})], GDQTimekeeperCoopElement.prototype, "index", void 0);

__decorate([property({
  type: Array
})], GDQTimekeeperCoopElement.prototype, "runners", void 0);

__decorate([property({
  type: Array
})], GDQTimekeeperCoopElement.prototype, "results", void 0);

GDQTimekeeperCoopElement = __decorate([customElement('gdq-timekeeper-coop')], GDQTimekeeperCoopElement);
export default GDQTimekeeperCoopElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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