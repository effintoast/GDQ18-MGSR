var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property,
  observe
} = Polymer.decorators;
const checklistRep = nodecg.Replicant('checklist');
const stopwatchRep = nodecg.Replicant('stopwatch');
const cyclingRecordingsRep = nodecg.Replicant('obs:cyclingRecordings');
/**
 * @customElement
 * @polymer
 */

let GDQChecklistRecordingElement = class GDQChecklistRecordingElement extends Polymer.Element {
  ready() {
    super.ready();
    checklistRep.on('change', newVal => {
      if (!newVal) {
        return;
      }

      const incompleteTasks = [];

      for (const key in newVal) {
        // tslint:disable-line:no-for-in
        if (!{}.hasOwnProperty.call(newVal, key)) {
          continue;
        }

        const category = newVal[key];
        category.forEach(task => {
          if (!task.complete) {
            incompleteTasks.push(task);
          }
        });
      }

      this.warning = incompleteTasks.length > 1 && incompleteTasks[0].name !== 'Cycle Recordings';
    });
    stopwatchRep.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this._stopwatchState = newVal.state === 'running';
    });
    cyclingRecordingsRep.on('change', newVal => {
      this._cyclingRecordings = newVal;
    });
    nodecg.listenFor('obs:recordingsCycled', error => {
      const toast = this.$.toast;

      if (error) {
        let errorString = error;

        if (error.message) {
          errorString = error.message;
        } else if (error.error) {
          errorString = error.error;
        }

        toast.showErrorToast('Failed to cycle recordings: ' + errorString);
      } else {
        toast.showSuccessToast('Recordings cycled.');
      }
    });
    this.addEventListener('click', () => {
      const checkbox = this.$.checkbox;
      checkbox.click();
    });
  }

  _calcDisabled(stopwatchState, cyclingRecordings) {
    this.disabled = Boolean(stopwatchState || cyclingRecordings);
  }

  _calcContextPage(warning, disabled, cyclingRecordings) {
    if (cyclingRecordings) {
      return 'cycling';
    }

    if (disabled) {
      return 'disabled';
    }

    if (warning) {
      return 'warning';
    }

    return 'all-clear';
  }

};

__decorate([property({
  type: String
})], GDQChecklistRecordingElement.prototype, "name", void 0);

__decorate([property({
  type: String
})], GDQChecklistRecordingElement.prototype, "category", void 0);

__decorate([property({
  type: Boolean,
  notify: true,
  reflectToAttribute: true
})], GDQChecklistRecordingElement.prototype, "checked", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQChecklistRecordingElement.prototype, "warning", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQChecklistRecordingElement.prototype, "disabled", void 0);

__decorate([property({
  type: Boolean
})], GDQChecklistRecordingElement.prototype, "_stopwatchState", void 0);

__decorate([property({
  type: Boolean
})], GDQChecklistRecordingElement.prototype, "_cyclingRecordings", void 0);

__decorate([observe('_stopwatchState', '_cyclingRecordings')], GDQChecklistRecordingElement.prototype, "_calcDisabled", null);

GDQChecklistRecordingElement = __decorate([customElement('gdq-checklist-recording')], GDQChecklistRecordingElement);
export default GDQChecklistRecordingElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1jaGVja2xpc3QtcmVjb3JkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBLFFBQWhCO0FBQTBCLEVBQUE7QUFBMUIsSUFBcUMsT0FBTyxDQUFDLFVBQW5EO0FBQ0EsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBNEIsV0FBNUIsQ0FBckI7QUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUCxDQUE0QixXQUE1QixDQUFyQjtBQUNBLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBMEIsdUJBQTFCLENBQTdCO0FBRUE7Ozs7O0FBS0EsSUFBcUIsNEJBQTRCLEdBQWpELE1BQXFCLDRCQUFyQixTQUEwRCxPQUFPLENBQUMsT0FBbEUsQ0FBeUU7QUFzQnhFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBRUEsSUFBQSxZQUFZLENBQUMsRUFBYixDQUFnQixRQUFoQixFQUEwQixNQUFNLElBQUc7QUFDbEMsVUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNaO0FBQ0E7O0FBRUQsWUFBTSxlQUFlLEdBQW1CLEVBQXhDOztBQUNBLFdBQUssTUFBTSxHQUFYLElBQWtCLE1BQWxCLEVBQTBCO0FBQUU7QUFDM0IsWUFBSSxDQUFDLEdBQUcsY0FBSCxDQUFrQixJQUFsQixDQUF1QixNQUF2QixFQUErQixHQUEvQixDQUFMLEVBQTBDO0FBQ3pDO0FBQ0E7O0FBRUQsY0FBTSxRQUFRLEdBQUksTUFBYyxDQUFDLEdBQUQsQ0FBaEM7QUFDQSxRQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLElBQUksSUFBRztBQUN2QixjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVYsRUFBb0I7QUFDbkIsWUFBQSxlQUFlLENBQUMsSUFBaEIsQ0FBcUIsSUFBckI7QUFDQTtBQUNELFNBSkQ7QUFLQTs7QUFDRCxXQUFLLE9BQUwsR0FBZSxlQUFlLENBQUMsTUFBaEIs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