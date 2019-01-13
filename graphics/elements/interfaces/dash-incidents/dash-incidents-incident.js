var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let DashIncidentsIncidentElement = class DashIncidentsIncidentElement extends Polymer.Element {
    _computeCurrentPhase() {
        return this.incident ? this.incident.currentPhase.toLowerCase() : 'unknown';
    }
    _calcFormattedPageTarget(incident) {
        if (!incident) {
            return '';
        }
        let targetStr = this._parsePageTargets(incident);
        if (incident.currentPhase.toLowerCase() === 'unacked') {
            targetStr = `PAGING: ${targetStr}`;
        }
        else if (incident.currentPhase.toLowerCase() === 'acked') {
            targetStr = incident.transitions.filter(transition => {
                return transition.name.toLowerCase() === 'acked';
            }).map(transition => {
                return transition.by;
            }).join(', ');
        }
        else if (incident.currentPhase.toLowerCase() === 'resolved') {
            targetStr = incident.transitions.filter(transition => {
                return transition.name.toLowerCase() === 'resolved';
            }).map(transition => {
                return transition.by;
            }).join(', ');
        }
        return targetStr;
    }
    _parsePageTargets(incident) {
        if (!incident) {
            return '';
        }
        if (incident.pagedUsers && incident.pagedUsers.length > 0) {
            return incident.pagedUsers.join(', ');
        }
        return 'NOBODY - TRY SLACK';
    }
    _formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: '2-digit',
            hour12: true,
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    _calcStatusText(currentPhase) {
        if (currentPhase.toLowerCase() === 'acked') {
            return 'ACKED BY:';
        }
        if (currentPhase.toLowerCase() === 'resolved') {
            return 'RESOLVED BY:';
        }
        return currentPhase;
    }
};
__decorate([
    property({ type: Object })
], DashIncidentsIncidentElement.prototype, "incident", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true, computed: '_computeCurrentPhase(incident.*)' })
], DashIncidentsIncidentElement.prototype, "currentPhase", void 0);
DashIncidentsIncidentElement = __decorate([
    customElement('dash-incidents-incident')
], DashIncidentsIncidentElement);
export default DashIncidentsIncidentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbmNpZGVudHMtaW5jaWRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWluY2lkZW50cy1pbmNpZGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7OztHQUdHO0FBRUgsSUFBcUIsNEJBQTRCLEdBQWpELE1BQXFCLDRCQUE2QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBT3hFLG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQztJQUVELHdCQUF3QixDQUFDLFFBQWtCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDdEQsU0FBUyxHQUFHLFdBQVcsU0FBUyxFQUFFLENBQUM7U0FDbkM7YUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzNELFNBQVMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLEVBQUU7WUFDOUQsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFFBQWtCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxRCxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztTQUNqQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFlBQW9CO1FBQ25DLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUMzQyxPQUFPLFdBQVcsQ0FBQztTQUNuQjtRQUVELElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUM5QyxPQUFPLGNBQWMsQ0FBQztTQUN0QjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FDRCxDQUFBO0FBckVBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhEQUNOO0FBR25CO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFDLENBQUM7a0VBQzVFO0FBTEQsNEJBQTRCO0lBRGhELGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztHQUNwQiw0QkFBNEIsQ0F1RWhEO2VBdkVvQiw0QkFBNEIifQ==