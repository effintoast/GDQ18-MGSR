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
const canSeekSchedule = nodecg.Replicant('canSeekSchedule');
const currentRun = nodecg.Replicant('currentRun');
const nextRun = nodecg.Replicant('nextRun');
const schedule = nodecg.Replicant('schedule');
/**
 * @customElement
 * @polymer
 */

let GDQScheduleElement = class GDQScheduleElement extends Polymer.Element {
  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      canSeekSchedule.on('change', () => {
        this._checkButtons();
      });
      schedule.on('change', newVal => {
        if (!newVal) {
          return;
        } // We don't have typings for vaadin-combo-box@^2.0.0


        this.$.typeahead.items = newVal.filter(item => item.type === 'run').map(speedrun => speedrun.name);

        this._checkButtons();
      });
      nextRun.on('change', newVal => {
        if (!newVal) {
          return;
        } // Disable "next" button if at end of schedule


        const nextRunEl = this.$.nextRun;

        if (newVal) {
          nextRunEl.setRun(newVal);
          this.$.editNext.removeAttribute('disabled');
        } else {
          nextRunEl.setRun({});
          this.$.editNext.setAttribute('disabled', 'true');
        }

        this._checkButtons();
      });
      currentRun.on('change', newVal => {
        if (!newVal) {
          return;
        }

        const currentRunEl = this.$.currentRun;
        currentRunEl.setRun(newVal);

        this._checkButtons();
      });
    });
  }
  /**
   * Takes the current value of the typeahead and loads that as the current speedrun.
   * Shows a helpful error toast if no matching speedrun could be found.
   */


  takeTypeahead() {
    // We don't have typings for vaadin-combo-box@^2.0.0
    const typeahead = this.$.typeahead;

    if (!typeahead.value || !schedule.value) {
      return;
    }

    const nameToFind = typeahead.value; // Find the run based on the name.

    const matched = schedule.value.some(run => {
      if (run.type !== 'run') {
        return false;
      }

      if (run.name.toLowerCase() === nameToFind.toLowerCase()) {
        this._pendingSetCurrentRunByOrderMessageResponse = true;

        this._checkButtons();

        nodecg.sendMessage('setCurrentRunByOrder', run.order, () => {
          this._pendingSetCurrentRunByOrderMessageResponse = false;
          typeahead.value = '';
          typeahead._suggestions = [];

          this._checkButtons();
        });
        return true;
      }

      return false;
    });

    if (!matched) {
      this.$.toast.show(`Could not find speedrun with name "${nameToFind}".`);
    }
  }

  fetchLatestSchedule() {
    const toast = this.$.toast;
    this.$.fetchLatestSchedule.setAttribute('disabled', 'true');
    nodecg.sendMessage('updateSchedule', (err, updated) => {
      this.$.fetchLatestSchedule.removeAttribute('disabled');

      if (err) {
        nodecg.log.warn(err.message);
        toast.show('Error updating schedule. Check console.');
        return;
      }

      if (updated) {
        nodecg.log.info('Schedule successfully updated');
        toast.show('Successfully updated schedule.');
      } else {
        nodecg.log.info('Schedule unchanged, not updated');
        toast.show('Schedule unchanged, not updated.');
      }
    });
  }

  next() {
    this._pendingNextRunMessageResponse = true;

    this._checkButtons();

    nodecg.sendMessage('nextRun', () => {
      this._pendingNextRunMessageResponse = false;

      this._checkButtons();
    });
  }

  previous() {
    this._pendingPreviousRunMessageResponse = true;

    this._checkButtons();

    nodecg.sendMessage('previousRun', () => {
      this._pendingPreviousRunMessageResponse = false;

      this._checkButtons();
    });
  }

  editCurrent() {
    if (!currentRun.value) {
      return;
    }

    const editor = this.$.editor;
    const editDialog = this.$.editDialog;
    editor.title = `Edit Current Run (#${currentRun.value.order})`;
    editor.loadRun(currentRun.value);
    editDialog.open();
  }

  editNext() {
    if (!nextRun.value) {
      return;
    }

    const editor = this.$.editor;
    const editDialog = this.$.editDialog;
    editor.title = `Edit Next Run (#${nextRun.value.order})`;
    editor.loadRun(nextRun.value);
    editDialog.open();
  }

  _checkButtons() {
    if (canSeekSchedule.status !== 'declared' || schedule.status !== 'declared' || currentRun.status !== 'declared' || nextRun.status !== 'declared' || !schedule.value) {
      return;
    }

    let shouldDisableNext = false;
    let shouldDisablePrev = false;
    let shouldDisableTake = false;

    if (!canSeekSchedule.value || this._pendingSetCurrentRunByOrderMessageResponse || this._pendingPreviousRunMessageResponse || this._pendingNextRunMessageResponse) {
      shouldDisableNext = true;
      shouldDisablePrev = true;
      shouldDisableTake = true;
    } // Disable nextRun button if there is no next run.


    if (!nextRun.value) {
      shouldDisableNext = true;
    } // Disable prevRun button if there is no prev run, or if there is no currentRun.


    if (currentRun.value) {
      // If there is any run in the schedule with an earlier order than currentRun,
      // then there must be a prevRun.
      const prevRunExists = schedule.value.find(run => {
        if (run.type !== 'run' || !currentRun.value) {
          return false;
        }

        return run.order < currentRun.value.order;
      });

      if (!prevRunExists) {
        shouldDisablePrev = true;
      }
    } else {
      shouldDisablePrev = true;
    } // Disable take button if there's no takeTypeahead value.


    if (!this.$.typeahead.value) {
      shouldDisableTake = true;
    }

    if (shouldDisableNext) {
      this.$.next.setAttribute('disabled', 'true');
    } else {
      this.$.next.removeAttribute('disabled');
    }

    if (shouldDisablePrev) {
      this.$.previous.setAttribute('disabled', 'true');
    } else {
      this.$.previous.removeAttribute('disabled');
    }

    if (shouldDisableTake) {
      this.$.take.setAttribute('disabled', 'true');
    } else {
      this.$.take.removeAttribute('disabled');
    }
  }

  _typeaheadKeyup(e) {
    if (e.key === 'Enter' && this.$.typeahead.inputValue) {
      this.takeTypeahead();
    }
  }

};

__decorate([property({
  type: Boolean
})], GDQScheduleElement.prototype, "_pendingSetCurrentRunByOrderMessageResponse", void 0);

__decorate([property({
  type: Boolean
})], GDQScheduleElement.prototype, "_pendingNextRunMessageResponse", void 0);

__decorate([property({
  type: Boolean
})], GDQScheduleElement.prototype, "_pendingPreviousRunMessageResponse", void 0);

GDQScheduleElement = __decorate([customElement('gdq-schedule')], GDQScheduleElement);
export default GDQScheduleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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