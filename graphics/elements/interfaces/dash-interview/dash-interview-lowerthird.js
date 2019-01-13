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
const currentIntermissionRep = nodecg.Replicant('currentIntermission');
const currentRunRep = nodecg.Replicant('currentRun');
const interviewNamesRep = nodecg.Replicant('interview:names');
const lowerthirdShowingRep = nodecg.Replicant('interview:lowerthirdShowing');
const runnersRep = nodecg.Replicant('runners');
const scheduleRep = nodecg.Replicant('schedule');
/**
 * @customElement
 * @polymer
 */

let DashInterviewLowerthirdElement = class DashInterviewLowerthirdElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.lowerthirdShowing = false;
    this._typeaheadCandidates = [];
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      runnersRep.on('change', newVal => {
        if (newVal && newVal.length > 0) {
          this._typeaheadCandidates = newVal.filter(Boolean).map(runner => runner.name).map(String).sort();
        } else {
          this._typeaheadCandidates = [];
        }
      });
      interviewNamesRep.on('change', newVal => {
        this.setNames(newVal);
      });
      lowerthirdShowingRep.on('change', newVal => {
        this.lowerthirdShowing = newVal;
      });
    });
  }

  openPreview() {
    this.$.lowerthirdPreview.updatePreview(this.getNames());
    this.$.lowerthirdPreviewDialog.open();
  }

  calcStartDisabled(lowerthirdShowing, questionShowing) {
    return lowerthirdShowing || questionShowing;
  }

  showLowerthird() {
    this.takeNames();
    lowerthirdShowingRep.value = true;
  }

  hideLowerthird() {
    lowerthirdShowingRep.value = false;
  }

  autoLowerthird() {
    this.takeNames();
    nodecg.sendMessage('pulseInterviewLowerthird', 10);
  }
  /**
   * Takes the names currently entered into the inputs.
   */


  takeNames() {
    interviewNamesRep.value = this.getNames();
  }
  /**
   * Returns an array of the names currently entered into the inputs.
   */


  getNames() {
    return this.getInputs().map(input => {
      return {
        name: input.name,
        title: input.title
      };
    });
  }

  setNames(names) {
    const typeaheads = this.getInputs();

    if (!names || names.length <= 0) {
      typeaheads.forEach(input => {
        input.name = '';
        input.title = '';
      });
      return;
    }

    typeaheads.forEach((input, index) => {
      input.name = String(names[index] ? names[index].name : '');
      input.title = String(names[index] ? names[index].title : '');
    });
  }
  /**
   * Retrieves the name inputs as an array of DOM elements.
   */


  getInputs() {
    return Array.from(this.$.nameInputs.shadowRoot.querySelectorAll('ui-sortable-list-item')).map(uiSortableListItem => uiSortableListItem.shadowRoot.querySelector('dash-lowerthird-name-input'));
  }

  any(...args) {
    return args.find(arg => arg);
  }

  openRefillDialog() {
    if (!currentIntermissionRep.value || !scheduleRep.value || !currentRunRep.value) {
      return;
    }

    const currentInterview = currentIntermissionRep.value.content.find(item => item.type === 'interview');
    const nextInterview = scheduleRep.value.find(scheduleItem => {
      // Ignore items which are not interviews.
      if (scheduleItem.type !== 'interview') {
        return false;
      } // If we have a currentInterview, return the first interview after it.


      if (currentInterview) {
        return scheduleItem.order > currentInterview.order;
      } // If we don't have a currentInterview, return the first interview after the currentRun.
      // Ignore items before the currentRun.


      return scheduleItem.order >= currentRunRep.value.order;
    });
    let currentInterviewNames = [];
    let nextInterviewNames = [];

    if (currentInterview) {
      currentInterviewNames = currentInterview.interviewers.concat(currentInterview.interviewees);
    }

    if (nextInterview) {
      nextInterviewNames = nextInterview.interviewers.concat(nextInterview.interviewees);
    }

    while (currentInterviewNames.length < 5) {
      currentInterviewNames.push('(none)');
    }

    while (nextInterviewNames.length < 5) {
      nextInterviewNames.push('(none)');
    }

    this.$.currentLowerthirdRefillOption.names = currentInterviewNames;
    this.$.nextLowerthirdRefillOption.names = nextInterviewNames;
    this.$.lowerthirdRefillDialog.open();
    nodecg.log.info('currentInterview:', currentInterview);
    nodecg.log.info('currentInterviewNames:', currentInterviewNames);
    nodecg.log.info('nextInterview:', nextInterview);
    nodecg.log.info('nextInterviewNames:', nextInterviewNames);
  }

  closeRefillDialog() {
    this.$.lowerthirdRefillDialog.close();
  }

  _handleRefillOptionAccepted(e) {
    this.setNames(e.detail.names);
    this.takeNames();
    this.closeRefillDialog();
  }

  _handleNameInputChange(event) {
    if (!interviewNamesRep.value) {
      return;
    }

    interviewNamesRep.value[event.model.index] = {
      name: event.target.name,
      title: event.target.title
    };
  }

};

__decorate([property({
  type: Boolean,
  notify: true
})], DashInterviewLowerthirdElement.prototype, "lowerthirdShowing", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewLowerthirdElement.prototype, "questionShowing", void 0);

__decorate([property({
  type: Array
})], DashInterviewLowerthirdElement.prototype, "_typeaheadCandidates", void 0);

DashInterviewLowerthirdElement = __decorate([customElement('dash-interview-lowerthird')], DashInterviewLowerthirdElement);
export default DashInterviewLowerthirdElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LWxvd2VydGhpcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUFzQyxxQkFBdEMsQ0FBL0I7QUFDQSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUFzQixZQUF0QixDQUF0QjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBbUMsaUJBQW5DLENBQTFCO0FBQ0EsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEwQiw2QkFBMUIsQ0FBN0I7QUFDQSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEyQixTQUEzQixDQUFuQjtBQUNBLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlDLFVBQWpDLENBQXBCO0FBRUE7Ozs7O0FBS0EsSUFBcUIsOEJBQThCLEdBQW5ELE1BQXFCLDhCQUFyQixTQUE0RCxPQUFPLENBQUMsT0FBcEUsQ0FBMkU7QUFMM0U7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFHQyxTQUFBLGlCQUFBLEdBQW9CLEtBQXBCO0FBTUEsU0FBQSxvQkFBQSxHQUFpQyxFQUFqQztBQXNLQTs7QUFwS0EsRUFBQSxpQkFBaUIsR0FBQTtBQUNoQixVQUFNLGlCQUFOO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixnQkFBckIsQ0FBc0MsSUFBdEMsRUFBNEMsTUFBSztBQUNoRCxNQUFBLFVBQVUsQ0FBQyxFQUFYLENBQWMsUUFBZCxFQUF3QixNQUFNLElBQUc7QUFDaEMsWUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUM7QUFDaEMsZUFBSyxvQkFBTCxHQUE0QixNQUFNLENBQUMsTUFBUCxDQUFjLE9BQWQs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