var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import MapSortMixin from "../../../mixins/map-sort-mixin.js";
const {
  customElement,
  property
} = Polymer.decorators;
const allPrizesRep = nodecg.Replicant('allPrizes');
const prizePlaylistRep = nodecg.Replicant('interview:prizePlaylist');
const prizePlaylistSortMapRep = nodecg.Replicant('interview:prizePlaylistSortMap');
/**
 * @customElement
 * @polymer
 * @appliesMixin window.MapSortMixin
 */

let DashInterviewMonitorPrizesElement = class DashInterviewMonitorPrizesElement extends MapSortMixin(Polymer.MutableData(Polymer.Element)) {
  ready() {
    super.ready();
    allPrizesRep.on('change', newVal => {
      if (!newVal || newVal.length === 0) {
        this.allPrizes = [];
        return;
      }

      this.allPrizes = newVal;
    });
    prizePlaylistRep.on('change', newVal => {
      if (!newVal || newVal.length === 0) {
        this.prizePlaylist = [];
        return;
      }

      this.prizePlaylist = newVal;
    });
    prizePlaylistSortMapRep.on('change', (newVal, _oldVal, operations) => {
      if (!newVal) {
        return;
      }

      this._sortMapVal = newVal;
      this.$.repeat.render();

      if (newVal.length > 0 && this._shouldFlash(operations)) {
        this._flashElementBackground(this);
      }
    });
  }

  _computePlaylistPrizes(allPrizes, prizePlaylist) {
    if (!allPrizes || allPrizes.length === 0 || !prizePlaylist || prizePlaylist.length === 0) {
      return [];
    }

    return prizePlaylist.filter(playlistEntry => {
      return !playlistEntry.complete;
    }).map(playlistEntry => {
      return allPrizes.find(prize => {
        return prize.id === playlistEntry.id;
      });
    });
  }

  _computeNoPlaylistPrizes(playlistPrizes) {
    return !playlistPrizes || playlistPrizes.length <= 0;
  }

};

__decorate([property({
  type: Array
})], DashInterviewMonitorPrizesElement.prototype, "allPrizes", void 0);

__decorate([property({
  type: Array
})], DashInterviewMonitorPrizesElement.prototype, "prizePlaylist", void 0);

__decorate([property({
  type: Array,
  computed: '_computePlaylistPrizes(allPrizes, prizePlaylist)'
})], DashInterviewMonitorPrizesElement.prototype, "playlistPrizes", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeNoPlaylistPrizes(playlistPrizes)'
})], DashInterviewMonitorPrizesElement.prototype, "noPlaylistPrizes", void 0);

DashInterviewMonitorPrizesElement = __decorate([customElement('dash-interview-monitor-prizes')], DashInterviewMonitorPrizesElement);
export default DashInterviewMonitorPrizesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItcHJpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsT0FBTyxZQUFQLE1BQXlCLG1DQUF6QjtBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEwQixXQUExQixDQUFyQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBMkMseUJBQTNDLENBQXpCO0FBQ0EsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEyQixnQ0FBM0IsQ0FBaEM7QUFFQTs7Ozs7O0FBTUEsSUFBcUIsaUNBQWlDLEdBQXRELE1BQXFCLGlDQUFyQixTQUErRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsT0FBTyxDQUFDLE9BQTVCLENBQUQsQ0FBM0UsQ0FBaUg7QUFhaEgsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFFQSxJQUFBLFlBQVksQ0FBQyxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLE1BQU0sSUFBRztBQUNsQyxVQUFJLENBQUMsTUFBRCxJQUFXLE1BQU0sQ0FBQyxNQUFQLEtBQWtCLENBQWpDLEVBQW9DO0FBQ25DLGFBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBO0FBQ0E7O0FBRUQsV0FBSyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsS0FQRDtBQVNBLElBQUEsZ0JBQWdCLENBQUMsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsTUFBTSxJQUFHO0FBQ3RDLFVBQUksQ0FBQyxNQUFELElBQVcsTUFBTSxDQUFDLE1BQVAsS0FBa0IsQ0FBakMsRUFBb0M7QUFDbkMsYUFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0E7QUFDQTs7QUFFRCxXQUFLLGFBQUwsR0FBcUIsTUFBckI7QUFDQSxLQVBEO0FBU0EsSUFBQSx1QkFBdUIsQ0FBQyxFQUF4QixDQUEyQixRQUEzQixFQUFxQyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLEtBQWdDO0FBQ3BFLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWjtBQUNBOztBQUNELFdBQUssV0FBTCxHQUFtQixNQUFuQjtBQUNDLFdBQUssQ0FBTCxDQUFPLE1BQVAsQ0FBb0MsTUFBcEM7O0FBRUQsVUFBSSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFoQixJQUFxQixLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBekIsRUFBd0Q7QUFDdkQsYUFBSyx1QkFBTCxDQUE2QixJQUE3QjtBQUNBO0FBQ0QsS0FWRDtBQVdBOztBQUVELEVBQUEsc0JBQXNCLENBQUMsU0FBRCxFQUFzQixhQUF0QixFQUE4RDtBQUNuRixRQUFJLENBQUMsU0FBRCxJQUFjLFNBQVMsQ0FBQyxNQUFWLEtBQXFCLENBQW5DLElBQ0gsQ0FBQyxhQURFLElBQ2UsYUFBYSxDQUFDLE1BQWQsS0FBeUIsQ0FENUMsRUFDK0M7QUFDOUMsYUFBTyxFQUFQO0FBQ0E7O0FBRUQsV0FBTyxhQUFhLENBQUMsTUFBZCxDQUFxQixhQUFhLElBQUc7QUFDM0MsYUFBTyxDQUFDLGFBQWEsQ0FBQyxRQUF0QjtBQUNBLEtBRk0sRUFFSixHQUZJLENBRUEsYUFBYSxJQUFHO0FBQ3RCLGFBQU8sU0FBUyxDQUFDLElBQVYsQ0FBZSxLQUFLLElBQUc7QUFDN0IsZUFBTyxLQUFLLENBQUMsRUFBTixLQUFhLGFBQWEsQ0FBQyxFQUFsQztBQUNBLE9BRk0sQ0FBUDtBQUdBLEtBTk0sQ0FBUDtBQU9BOztBQUVELEVBQUEsd0JBQXdCLENBQUMsY0FBRCxFQUF5QjtBQUNoRCxXQUFPLENBQUMsY0FBRCxJQUFtQixjQUFjLENBQUMsTUFBZixJQUF5QixDQUFuRDtBQUNBOztBQWhFK0csQ0FBakg7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDJDQUFBLEUsV0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDJDQUFBLEUsZUFBQSxFLEtBQXdDLENBQXhDLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsS0FBUDtBQUFjLEVBQUEsUUFBUSxFQUFFO0FBQXhCLENBQUQsQ0FDVCxDQUFBLEUsMkNBQUEsRSxnQkFBQSxFLEtBQXdCLENBQXhCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLFFBQVEsRUFBRTtBQUExQixDQUFELENBQ1QsQ0FBQSxFLDJDQUFBLEUsa0JBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQVhvQixpQ0FBaUMsR0FBQSxVQUFBLENBQUEsQ0FEckQsYUFBYSxDQUFDLCtCQUFELENBQ3dDLENBQUEsRUFBakMsaUNBQWlDLENBQWpDO2VBQUEsaUMiLCJzb3VyY2VSb290IjoiIn0=