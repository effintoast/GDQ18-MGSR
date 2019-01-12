var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentRun = nodecg.Replicant('currentRun');
let GDQRuninfoElement = class GDQRuninfoElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.maxNameSize = 45;
        this.forceSingleLineName = false;
        this.name = '?';
        this.initialized = false;
    }
    ready() {
        super.ready();
        Polymer.RenderStatus.afterNextRender(this, () => {
            currentRun.on('change', this.currentRunChanged.bind(this));
        });
    }
    currentRunChanged(newVal) {
        this.name = newVal.name;
        this.category = newVal.category;
        this.console = newVal.console;
        this.releaseYear = String(newVal.releaseYear) || '20XX';
        this.estimate = newVal.estimate;
        // Avoids some issues that can arise on the first time that fitText is run.
        // Currently unsure why these issues happen.
        if (this.initialized) {
            this.fitText();
        }
        else {
            Polymer.RenderStatus.afterNextRender(this, this.fitText);
            this.initialized = true;
        }
    }
    fitText() {
        Polymer.flush();
        window.textFit(this.$.name, { maxFontSize: this.maxNameSize });
        this.$.category.maxTextWidth = this.clientWidth - 76;
        this.$.misc.maxTextWidth = (this.clientWidth - 124) / 3;
    }
    _processName(name) {
        if (!name) {
            return '&nbsp;';
        }
        if (this.forceSingleLineName) {
            return `<div class="name-line">${name.replace('\\n', ' ')}</div>`;
        }
        return name.split('\\n')
            .map(lineText => `<div class="name-line">${lineText}</div>`)
            .join('\n');
    }
};
__decorate([
    property({ type: Number })
], GDQRuninfoElement.prototype, "maxNameSize", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQRuninfoElement.prototype, "forceSingleLineName", void 0);
__decorate([
    property({ type: String })
], GDQRuninfoElement.prototype, "estimate", void 0);
__decorate([
    property({ type: String })
], GDQRuninfoElement.prototype, "releaseYear", void 0);
__decorate([
    property({ type: String })
], GDQRuninfoElement.prototype, "console", void 0);
__decorate([
    property({ type: String })
], GDQRuninfoElement.prototype, "category", void 0);
__decorate([
    property({ type: String })
], GDQRuninfoElement.prototype, "name", void 0);
GDQRuninfoElement = __decorate([
    customElement('gdq-runinfo')
], GDQRuninfoElement);
export default GDQRuninfoElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXJ1bmluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtcnVuaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTSxZQUFZLENBQUMsQ0FBQztBQUd2RCxJQUFxQixpQkFBaUIsR0FBdEMsTUFBcUIsaUJBQWtCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFEOUQ7O1FBR0MsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHakIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBZTVCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFFSCxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQThDN0IsQ0FBQztJQTVDQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUMvQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBVztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVoQywyRUFBMkU7UUFDM0UsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQXNDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ25GLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBOEIsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWE7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNWLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsT0FBTywwQkFBMEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLFFBQVEsUUFBUSxDQUFDO2FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDRCxDQUFBO0FBbEVBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3NEQUNSO0FBR2pCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQzs4REFDeEI7QUFHNUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bURBQ1I7QUFHakI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7c0RBQ0w7QUFHcEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0RBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bURBQ1I7QUFHakI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7K0NBQ2Q7QUFwQlMsaUJBQWlCO0lBRHJDLGFBQWEsQ0FBQyxhQUFhLENBQUM7R0FDUixpQkFBaUIsQ0FvRXJDO2VBcEVvQixpQkFBaUIifQ==