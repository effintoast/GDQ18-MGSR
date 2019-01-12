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
let GDQRunEditorElement = class GDQRunEditorElement extends Polymer.MutableData(Polymer.Element) {
  constructor() {
    super(...arguments);
    this.showingOriginal = false;
  }

  loadRun(run) {
    this.name = run.name;
    this.category = run.category;
    this.estimate = run.estimate;
    this.console = run.console;
    this.releaseYear = String(run.releaseYear);
    this.runners = run.runners.map(runner => {
      if (runner) {
        return {
          name: runner.name,
          stream: runner.stream
        };
      }

      return;
    });
    this.coop = run.coop;
    this.originalValues = run.originalValues;
    this.pk = run.pk;
  }

  applyChanges() {
    // We have to build a new runners object.
    const runners = [];
    const runnerNameInputs = this.$.runners.querySelectorAll('paper-input[label^="Runner"]:not([disabled])');
    const runnerStreamInputs = this.$.runners.querySelectorAll('paper-input[label="Twitch Channel"]:not([disabled])');

    for (let i = 0; i < 4; i++) {
      if (runnerNameInputs[i].value || runnerStreamInputs[i].value) {
        runners[i] = {
          name: runnerNameInputs[i].value,
          stream: runnerStreamInputs[i].value
        };
      }
    }

    nodecg.sendMessage('modifyRun', {
      name: this.name,
      category: this.category,
      estimate: this.estimate,
      console: this.console,
      releaseYear: this.releaseYear,
      coop: this.coop,
      runners,
      pk: this.pk
    }, () => {
      const dialog = this.closest('paper-dialog');

      if (dialog) {
        dialog.close();
      }
    });
  }

  resetRun() {
    nodecg.sendMessage('resetRun', this.pk, () => {
      const dialog = this.closest('paper-dialog');

      if (dialog) {
        dialog.close();
      }
    });
  }

  calcHide(path, showingOriginal) {
    const originalPath = path.split('.').slice(0);
    originalPath.unshift('originalValues');
    const originalValue = this.get(originalPath);
    const hasOriginal = originalValue !== undefined;
    return showingOriginal && hasOriginal;
  }

  showOriginal() {
    this.showingOriginal = true;
  }

  hideOriginal() {
    this.showingOriginal = false;
  }

  _moveRunnerDown(e) {
    const target = e.target;

    if (!target) {
      return;
    }

    const rowDiv = target.closest('[data-index]');

    if (!rowDiv) {
      return;
    }

    const index = parseInt(String(rowDiv.getAttribute('data-index')), 10);
    this.runners = this._moveRunner(this.runners, index, 'down');
  }

  _moveRunnerUp(e) {
    const target = e.target;

    if (!target) {
      return;
    }

    const rowDiv = target.closest('[data-index]');

    if (!rowDiv) {
      return;
    }

    const index = parseInt(String(rowDiv.getAttribute('data-index')), 10);
    this.runners = this._moveRunner(this.runners, index, 'up');
  }
  /**
   * Moves a runner up or down in the runners array.
   * @param runnersArray - The array of runners to base these changes on.
   * @param index - The index of the runner to move in the array.
   * @param direction - Which direction to move the runner in.
   * @returns An array of runners with the desired runner re-arrangement applied to it.
   */


  _moveRunner(runnersArray, index, direction) {
    if (isNaN(index)) {
      throw new Error(`Index must be a number, got "${index}" which is a "${typeof index}"`);
    }

    if (index < 0 || index >= 4) {
      throw new Error(`Index must be >= 0 and < 4, got "${index}"`);
    }

    const newRunnersArray = runnersArray.slice(0);

    while (newRunnersArray.length < 4) {
      newRunnersArray.push(undefined);
    }

    const runnerToMove = newRunnersArray.splice(index, 1)[0];
    newRunnersArray.splice(index + (direction === 'up' ? -1 : 1), 0, runnerToMove);
    return newRunnersArray.slice(0, 4);
  }

};

__decorate([property({
  type: Boolean
})], GDQRunEditorElement.prototype, "showingOriginal", void 0);

__decorate([property({
  type: Boolean
})], GDQRunEditorElement.prototype, "coop", void 0);

__decorate([property({
  type: String
})], GDQRunEditorElement.prototype, "releaseYear", void 0);

__decorate([property({
  type: String
})], GDQRunEditorElement.prototype, "console", void 0);

__decorate([property({
  type: String
})], GDQRunEditorElement.prototype, "estimate", void 0);

__decorate([property({
  type: String
})], GDQRunEditorElement.prototype, "category", void 0);

__decorate([property({
  type: String
})], GDQRunEditorElement.prototype, "name", void 0);

__decorate([property({
  type: Object
})], GDQRunEditorElement.prototype, "originalValues", void 0);

__decorate([property({
  type: Array
})], GDQRunEditorElement.prototype, "runners", void 0);

__decorate([property({
  type: Number
})], GDQRunEditorElement.prototype, "pk", void 0);

GDQRunEditorElement = __decorate([customElement('gdq-run-editor')], GDQRunEditorElement);
export default GDQRunEditorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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