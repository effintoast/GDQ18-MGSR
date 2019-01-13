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
    } else if (incident.currentPhase.toLowerCase() === 'acked') {
      targetStr = incident.transitions.filter(transition => {
        return transition.name.toLowerCase() === 'acked';
      }).map(transition => {
        return transition.by;
      }).join(', ');
    } else if (incident.currentPhase.toLowerCase() === 'resolved') {
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

__decorate([property({
  type: Object
})], DashIncidentsIncidentElement.prototype, "incident", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computeCurrentPhase(incident.*)'
})], DashIncidentsIncidentElement.prototype, "currentPhase", void 0);

DashIncidentsIncidentElement = __decorate([customElement('dash-incidents-incident')], DashIncidentsIncidentElement);
export default DashIncidentsIncidentElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW5jaWRlbnRzLWluY2lkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLDRCQUE0QixHQUFqRCxNQUFxQiw0QkFBckIsU0FBMEQsT0FBTyxDQUFDLE9BQWxFLENBQXlFO0FBT3hFLEVBQUEsb0JBQW9CLEdBQUE7QUFDbkIsV0FBTyxLQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixXQUEzQixFQUFoQixHQUEyRCxTQUFsRTtBQUNBOztBQUVELEVBQUEsd0JBQXdCLENBQUMsUUFBRCxFQUFtQjtBQUMxQyxRQUFJLENBQUMsUUFBTCxFQUFlO0FBQ2QsYUFBTyxFQUFQO0FBQ0E7O0FBRUQsUUFBSSxTQUFTLEdBQUcsS0FBSyxpQkFBTCxDQUF1QixRQUF2QixDQUFoQjs7QUFDQSxRQUFJLFFBQVEsQ0FBQyxZQUFULENBQXNCLFdBQXRCLE9BQXdDLFNBQTVDLEVBQXVEO0FBQ3RELE1BQUEsU0FBUyxHQUFHLFdBQVcsU0FBUyxFQUFoQztBQUNBLEtBRkQsTUFFTyxJQUFJLFFBQVEsQ0FBQyxZQUFULENBQXNCLFdBQXRCLE9BQXdDLE9BQTVDLEVBQXFEO0FBQzNELE1BQUEsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFULENBQXFCLE1BQXJCLENBQTRCLFVBQVUsSUFBRztBQUNwRCxlQUFPLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFdBQWhCLE9BQWtDLE9BQXpDO0FBQ0EsT0FGVyxFQUVULEdBRlMsQ0FFTCxVQUFVLElBQUc7QUFDbkIsZUFBTyxVQUFVLENBQUMsRUFBbEI7QUFDQSxPQUpXLEVBSVQsSUFKUyxDQUlKLElBSkksQ0FBWjtBQUtBLEtBTk0sTUFNQSxJQUFJLFFBQVEsQ0FBQyxZQUFULENBQXNCLFdBQXRCLE9BQXdDLFVBQTVDLEVBQXdEO0FBQzlELE1BQUEsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFULENBQXFCLE1BQXJCLENBQTRCLFVBQVUsSUFBRztBQUNwRCxlQUFPLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFdBQWhCLE9BQWtDLFVBQXpDO0FBQ0EsT0FGVyxFQUVULEdBRlMsQ0FFTCxVQUFVLElBQUc7QUFDbkIsZUFBTyxVQUFVLENBQUMsRUFBbEI7QUFDQSxPQUpXLEVBSVQsSUFKUyxDQUlKLElBSkksQ0FBWjtBQUtBOztBQUVELFdBQU8sU0FBUDtBQUNBOztBQUVELEVBQUEsaUJBQWlCLENBQUMsUUFBRCxFQUFtQjtBQUNuQyxRQUFJLENBQUMsUUFBTCxFQUFlO0FBQ2QsYUFBTyxFQUFQO0FBQ0E7O0FBRUQsUUFBSSxRQUFRLENBQUMsVUFBVCxJQUF1QixRQUFRLENBQUMsVUFBVCxDQUFvQixNQUFwQixHQUE2QixDQUF4RCxFQUEyRDtBQUMxRCxhQUFPLFFBQVEsQ0FBQyxVQUFULENBQW9CLElBQXBCLENBQXlCLElBQXpCLENBQVA7QUFDQTs7QUFFRCxXQUFPLG9CQUFQO0FBQ0E7O0FBRUQsRUFBQSxXQUFXLENBQUMsVUFBRCxFQUFtQjtBQUM3QixVQUFNLElBQUksR0FBRyxJQUFJLElBQUosQ0FBUyxVQUFULENBQWI7QUFDQSxXQUFPLElBQUksQ0FBQyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCO0FBQ25DLE1BQUEsR0FBRyxFQUFFLFNBRDhCO0FBRW5DLE1BQUEsS0FBSyxFQUFFLFNBRjRCO0FBR25DLE1BQUEsSUFBSSxFQUFFLFNBSDZCO0FBSW5DLE1BQUEsTUFBTSxFQUFFLElBSjJCO0FBS25DLE1BQUEsSUFBSSxFQUFFLFNBTDZCO0FBTW5DLE1BQUEsTUFBTSxFQUFFO0FBTjJCLEtBQTdCLENBQVA7QUFRQTs7QUFFRCxFQUFBLGVBQWUsQ0FBQyxZQUFELEVBQXFCO0FBQ25DLFFBQUksWUFBWSxDQUFDLFdBQWIsT0FBK0IsT0FBbkMsRUFBNEM7QUFDM0MsYUFBTyxXQUFQO0FBQ0E7O0FBRUQsUUFBSSxZQUFZLENBQUMsV0FBYixPQUErQixVQUFuQyxFQUErQztBQUM5QyxhQUFPLGNBQVA7QUFDQTs7QUFFRCxXQUFPLFlBQVA7QUFDQTs7QUF0RXVFLENBQXpFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxzQ0FBQSxFLFVBQUEsRSxLQUFtQixDQUFuQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLGtCQUFrQixFQUFFLElBQW5DO0FBQXlDLEVBQUEsUUFBUSxFQUFFO0FBQW5ELENBQUQsQ0FDVCxDQUFBLEUsc0NBQUEsRSxjQUFBLEUsS0FBcUIsQ0FBckIsQ0FBQTs7QUFMb0IsNEJBQTRCLEdBQUEsVUFBQSxDQUFBLENBRGhELGFBQWEsQ0FBQyx5QkFBRCxDQUNtQyxDQUFBLEVBQTVCLDRCQUE0QixDQUE1QjtlQUFBLDRCIiwic291cmNlUm9vdCI6IiJ9