var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const prizePlaylistRep = nodecg.Replicant('interview:prizePlaylist');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let DashInterviewPrizePlaylistItemElement = class DashInterviewPrizePlaylistItemElement extends Polymer.MutableData(Polymer.Element) {
    connectedCallback() {
        super.connectedCallback();
        if (!this._initialized) {
            this._initialized = true;
            prizePlaylistRep.on('change', newVal => {
                this._prizePlaylist = newVal;
            });
        }
    }
    markAsDone() {
        if (!this.prize) {
            return;
        }
        nodecg.sendMessage('interview:markPrizeAsDone', this.prize.id);
    }
    markAsNotDone() {
        if (!this.prize) {
            return;
        }
        nodecg.sendMessage('interview:markPrizeAsNotDone', this.prize.id);
    }
    removeFromPlaylist() {
        if (!this.prize) {
            return;
        }
        nodecg.sendMessage('interview:removePrizeFromPlaylist', this.prize.id);
    }
    _computePrizeId(prizeId) {
        return prizeId;
    }
    _computeComplete(prize, prizePlaylist) {
        if (!prize || !Array.isArray(prizePlaylist)) {
            return;
        }
        const playlistEntry = prizePlaylist.find(entry => entry.id === this.prize.id);
        return Boolean(playlistEntry && playlistEntry.complete);
    }
    _completeChanged(newVal) {
        this.parentNode.host.style.backgroundColor = newVal ? '#C2C2C2' : '';
    }
    _handleCheckboxChanged(e) {
        if (!this._handledFirstCheckboxChange) {
            this._handledFirstCheckboxChange = true;
            if (e.detail.value === false) {
                return;
            }
        }
        if (e.detail.value) {
            this.markAsDone();
        }
        else {
            this.markAsNotDone();
        }
    }
};
__decorate([
    property({ type: Object })
], DashInterviewPrizePlaylistItemElement.prototype, "prize", void 0);
__decorate([
    property({ type: String,
        reflectToAttribute: true,
        computed: '_computePrizeId(prize.id)'
    })
], DashInterviewPrizePlaylistItemElement.prototype, "prizeId", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        computed: '_computeComplete(prize, _prizePlaylist)',
        observer: '_completeChanged'
    })
], DashInterviewPrizePlaylistItemElement.prototype, "complete", void 0);
__decorate([
    property({ type: Array })
], DashInterviewPrizePlaylistItemElement.prototype, "_prizePlaylist", void 0);
DashInterviewPrizePlaylistItemElement = __decorate([
    customElement('dash-interview-prize-playlist-item')
], DashInterviewPrizePlaylistItemElement);
export default DashInterviewPrizePlaylistItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctcHJpemUtcGxheWxpc3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LXByaXplLXBsYXlsaXN0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBMkIseUJBQXlCLENBQUMsQ0FBQztBQUUvRjs7OztHQUlHO0FBRUgsSUFBcUIscUNBQXFDLEdBQTFELE1BQXFCLHFDQUFzQyxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQXdCdEcsaUJBQWlCO1FBQ2hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsVUFBVTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWU7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxhQUF3QztRQUN2RSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QyxPQUFPO1NBQ1A7UUFFRCxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLE9BQU8sT0FBTyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWU7UUFDOUIsSUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxDQUFNO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDN0IsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNsQjthQUFNO1lBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQztDQUNELENBQUE7QUFyRkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7b0VBQ1o7QUFNYjtJQUpDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNO1FBQ3RCLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsUUFBUSxFQUFFLDJCQUEyQjtLQUNyQyxDQUFDO3NFQUNjO0FBUWhCO0lBTkMsUUFBUSxDQUFDO1FBQ1QsSUFBSSxFQUFFLE9BQU87UUFDYixrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsUUFBUSxFQUFFLGtCQUFrQjtLQUM1QixDQUFDO3VFQUNnQjtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQzs2RUFDaUI7QUFuQnJCLHFDQUFxQztJQUR6RCxhQUFhLENBQUMsb0NBQW9DLENBQUM7R0FDL0IscUNBQXFDLENBdUZ6RDtlQXZGb0IscUNBQXFDIn0=