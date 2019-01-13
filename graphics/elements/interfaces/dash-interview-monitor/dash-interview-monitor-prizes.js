var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MapSortMixin from '../../../mixins/map-sort-mixin';
const { customElement, property } = Polymer.decorators;
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
        if (!allPrizes || allPrizes.length === 0 ||
            !prizePlaylist || prizePlaylist.length === 0) {
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
__decorate([
    property({ type: Array })
], DashInterviewMonitorPrizesElement.prototype, "allPrizes", void 0);
__decorate([
    property({ type: Array })
], DashInterviewMonitorPrizesElement.prototype, "prizePlaylist", void 0);
__decorate([
    property({ type: Array, computed: '_computePlaylistPrizes(allPrizes, prizePlaylist)' })
], DashInterviewMonitorPrizesElement.prototype, "playlistPrizes", void 0);
__decorate([
    property({ type: Boolean, computed: '_computeNoPlaylistPrizes(playlistPrizes)' })
], DashInterviewMonitorPrizesElement.prototype, "noPlaylistPrizes", void 0);
DashInterviewMonitorPrizesElement = __decorate([
    customElement('dash-interview-monitor-prizes')
], DashInterviewMonitorPrizesElement);
export default DashInterviewMonitorPrizesElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbW9uaXRvci1wcml6ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWludGVydmlldy1tb25pdG9yLXByaXplcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRCxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSxXQUFXLENBQUMsQ0FBQztBQUM1RCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQTJCLHlCQUF5QixDQUFDLENBQUM7QUFDL0YsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFXLGdDQUFnQyxDQUFDLENBQUM7QUFFN0Y7Ozs7R0FJRztBQUVILElBQXFCLGlDQUFpQyxHQUF0RCxNQUFxQixpQ0FBa0MsU0FBUSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFhaEgsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLE9BQU87YUFDUDtZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsdUJBQXVCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQTRCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxTQUFtQixFQUFFLGFBQXdDO1FBQ25GLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3ZDLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxLQUFLLENBQUMsRUFBRSxLQUFLLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxjQUF3QjtRQUNoRCxPQUFPLENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRCxDQUFBO0FBL0RBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO29FQUNMO0FBR25CO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3dFQUNnQjtBQUd4QztJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGtEQUFrRCxFQUFDLENBQUM7eUVBQzlEO0FBR3hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsMENBQTBDLEVBQUMsQ0FBQzsyRUFDdEQ7QUFYTixpQ0FBaUM7SUFEckQsYUFBYSxDQUFDLCtCQUErQixDQUFDO0dBQzFCLGlDQUFpQyxDQWlFckQ7ZUFqRW9CLGlDQUFpQyJ9