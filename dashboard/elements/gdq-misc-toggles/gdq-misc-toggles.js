var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement
} = Polymer.decorators;
const autoUploadRecordings = nodecg.Replicant('autoUploadRecordings');
const recordTrackerEnabled = nodecg.Replicant('recordTrackerEnabled');
/**
 * @customElement
 * @polymer
 */

let GDQMiscTogglesElement = class GDQMiscTogglesElement extends Polymer.Element {
  ready() {
    super.ready();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      recordTrackerEnabled.on('change', newVal => {
        if (newVal) {
          this.$.milestoneToggle.checked = newVal;
        }
      });
      autoUploadRecordings.on('change', newVal => {
        this.$.uploadToggle.checked = newVal;
      });

      this._checkUploadToggleDisable();
    });
  }

  _checkUploadToggleDisable() {
    if (nodecg.bundleConfig.youtubeUploadScriptPath) {
      this.$.uploadToggle.removeAttribute('disabled');
    } else {
      this.$.uploadToggle.setAttribute('disabled', 'true');
    }
  }

  _handleMiletoneTrackerToggleChange(e) {
    if (!e.target) {
      return;
    }

    recordTrackerEnabled.value = Boolean(e.target.checked);
  }

  _handleUploadToggleChange(e) {
    if (!e.target) {
      return;
    }

    autoUploadRecordings.value = Boolean(e.target.checked);
  }

};
GDQMiscTogglesElement = __decorate([customElement('gdq-misc-toggles')], GDQMiscTogglesElement);
export default GDQMiscTogglesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1taXNjLXRvZ2dsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNO0FBQUMsRUFBQTtBQUFELElBQWtCLE9BQU8sQ0FBQyxVQUFoQztBQUNBLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBMEIsc0JBQTFCLENBQTdCO0FBQ0EsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEwQixzQkFBMUIsQ0FBN0I7QUFFQTs7Ozs7QUFLQSxJQUFxQixxQkFBcUIsR0FBMUMsTUFBcUIscUJBQXJCLFNBQW1ELE9BQU8sQ0FBQyxPQUEzRCxDQUFrRTtBQUNqRSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLElBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXNDLElBQXRDLEVBQTRDLE1BQUs7QUFDaEQsTUFBQSxvQkFBb0IsQ0FBQyxFQUFyQixDQUF3QixRQUF4QixFQUFrQyxNQUFNLElBQUc7QUFDMUMsWUFBSSxNQUFKLEVBQVk7QUFDVixlQUFLLENBQUwsQ0FBTyxlQUFQLENBQW9ELE9BQXBELEdBQThELE1BQTlEO0FBQ0Q7QUFDRCxPQUpEO0FBTUEsTUFBQSxvQkFBb0IsQ0FBQyxFQUFyQixDQUF3QixRQUF4QixFQUFrQyxNQUFNLElBQUc7QUFDekMsYUFBSyxDQUFMLENBQU8sWUFBUCxDQUFpRCxPQUFqRCxHQUEyRCxNQUEzRDtBQUNELE9BRkQ7O0FBSUEsV0FBSyx5QkFBTDtBQUNBLEtBWkQ7QUFhQTs7QUFFRCxFQUFBLHlCQUF5QixHQUFBO0FBQ3hCLFFBQUksTUFBTSxDQUFDLFlBQVAsQ0FBb0IsdUJBQXhCLEVBQWlEO0FBQ2hELFdBQUssQ0FBTCxDQUFPLFlBQVAsQ0FBb0IsZUFBcEIsQ0FBb0MsVUFBcEM7QUFDQSxLQUZELE1BRU87QUFDTixXQUFLLENBQUwsQ0FBTyxZQUFQLENBQW9CLFlBQXBCLENBQWlDLFVBQWpDLEVBQTZDLE1BQTdDO0FBQ0E7QUFDRDs7QUFFRCxFQUFBLGtDQUFrQyxDQUFDLENBQUQsRUFBUztBQUMxQyxRQUFJLENBQUMsQ0FBQyxDQUFDLE1BQVAsRUFBZTtBQUNkO0FBQ0E7O0FBQ0QsSUFBQSxvQkFBb0IsQ0FBQyxLQUFyQixHQUE2QixPQUFPLENBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBc0MsT0FBeEMsQ0FBcEM7QUFDQTs7QUFFRCxFQUFBLHlCQUF5QixDQUFDLENBQUQsRUFBUztBQUNqQyxRQUFJLENBQUMsQ0FBQyxDQUFDLE1BQVAsRUFBZTtBQUNkO0FBQ0E7O0FBQ0QsSUFBQSxvQkFBb0IsQ0FBQyxLQUFyQixHQUE2QixPQUFPLENBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBc0MsT0FBeEMsQ0FBcEM7QUFDQTs7QUF0Q2dFLENBQWxFO0FBQXFCLHFCQUFxQixHQUFBLFVBQUEsQ0FBQSxDQUR6QyxhQUFhLENBQUMsa0JBQUQsQ0FDNEIsQ0FBQSxFQUFyQixxQkFBcUIsQ0FBckI7ZUFBQSxxQiIsInNvdXJjZVJvb3QiOiIifQ==