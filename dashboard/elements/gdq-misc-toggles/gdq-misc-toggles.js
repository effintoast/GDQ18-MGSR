var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement } = Polymer.decorators;
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
        }
        else {
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
GDQMiscTogglesElement = __decorate([
    customElement('gdq-misc-toggles')
], GDQMiscTogglesElement);
export default GDQMiscTogglesElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW1pc2MtdG9nZ2xlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1taXNjLXRvZ2dsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDM0MsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLHNCQUFzQixDQUFDLENBQUM7QUFDL0UsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLHNCQUFzQixDQUFDLENBQUM7QUFFL0U7OztHQUdHO0FBRUgsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFzQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQ2pFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDaEQsb0JBQW9CLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUE0QyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7aUJBQ3RFO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQXlDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHlCQUF5QjtRQUN4QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztJQUVELGtDQUFrQyxDQUFDLENBQVE7UUFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPO1NBQ1A7UUFDRCxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFFLENBQUMsQ0FBQyxNQUFtQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxDQUFRO1FBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNQO1FBQ0Qsb0JBQW9CLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBRSxDQUFDLENBQUMsTUFBbUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RixDQUFDO0NBQ0QsQ0FBQTtBQXZDb0IscUJBQXFCO0lBRHpDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztHQUNiLHFCQUFxQixDQXVDekM7ZUF2Q29CLHFCQUFxQiJ9