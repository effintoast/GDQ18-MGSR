var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const allPrizesRep = nodecg.Replicant('allPrizes');
const prizePlaylistRep = nodecg.Replicant('interview:prizePlaylist');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let DashInterviewPrizesElement = class DashInterviewPrizesElement extends Polymer.MutableData(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     * @appliesMixin Polymer.MutableData
     */
    constructor() {
        super(...arguments);
        this.searchString = '';
    }
    ready() {
        super.ready();
        allPrizesRep.on('change', newVal => {
            this.allPrizes = newVal;
        });
        prizePlaylistRep.on('change', newVal => {
            this.prizePlaylist = newVal;
        });
    }
    clearFilter() {
        this.searchString = '';
    }
    addPrizeToPlayList(prizeOrPrizeId) {
        const prizeId = disambiguatePrizeId(prizeOrPrizeId);
        nodecg.sendMessage('interview:addPrizeToPlaylist', prizeId);
    }
    removePrizeFromPlaylist(prizeOrPrizeId) {
        const prizeId = disambiguatePrizeId(prizeOrPrizeId);
        nodecg.sendMessage('interview:removePrizeFromPlaylist', prizeId);
    }
    clearPlaylist() {
        nodecg.sendMessage('interview:clearPrizePlaylist');
    }
    _calcClearIconHidden(searchString) {
        return !searchString || searchString.length <= 0;
    }
    _calcPrizesToList(allPrizes, searchString) {
        if (!allPrizes || allPrizes.length <= 0) {
            return [];
        }
        if (!searchString || searchString.trim().length === 0) {
            return allPrizes;
        }
        return allPrizes.filter(prize => {
            return prize.description.toLowerCase().includes(searchString.toLowerCase());
        });
    }
    _isPrizeInPlaylist(prizeOrPrizeId, prizePlaylist) {
        if (!prizePlaylist) {
            return false;
        }
        const prizeId = disambiguatePrizeId(prizeOrPrizeId);
        return prizePlaylist.findIndex(({ id }) => id === prizeId) >= 0;
    }
    _calcClearPlaylistDisabled(prizePlaylist) {
        return !prizePlaylist || prizePlaylist.length <= 0;
    }
    _handlePrizeListingAddTap(e) {
        this.addPrizeToPlayList(e.model.prize);
    }
    _handlePrizeListingRemoveTap(e) {
        this.removePrizeFromPlaylist(e.model.prize);
    }
    _calcPrizesInPlaylist(allPrizes, prizePlaylist) {
        if (!allPrizes || allPrizes.length === 0 ||
            !prizePlaylist || prizePlaylist.length === 0) {
            return [];
        }
        return prizePlaylist.map(playlistEntry => {
            return allPrizes.find(prize => {
                return prize.id === playlistEntry.id;
            });
        });
    }
    _calcPlaylistPrizeChecked(prize, prizePlaylist) {
        if (!prize || !prizePlaylist || prizePlaylist.length <= 0) {
            return false;
        }
        console.log(prize, prizePlaylist);
        const playlistEntry = prizePlaylist.find(pe => pe.id === prize.id);
        if (!playlistEntry) {
            return false;
        }
        return playlistEntry.complete;
    }
};
__decorate([
    property({ type: Array })
], DashInterviewPrizesElement.prototype, "allPrizes", void 0);
__decorate([
    property({ type: Array })
], DashInterviewPrizesElement.prototype, "prizePlaylist", void 0);
__decorate([
    property({ type: String })
], DashInterviewPrizesElement.prototype, "searchString", void 0);
DashInterviewPrizesElement = __decorate([
    customElement('dash-interview-prizes')
], DashInterviewPrizesElement);
export default DashInterviewPrizesElement;
/**
 * Given a prize Object or prize ID Number, will always return a prize ID Number.
 * @param prizeOrPrizeId - Either a prize Object or a prize ID Number.
 * @returns A prize ID Number.
 */
function disambiguatePrizeId(prizeOrPrizeId) {
    return typeof prizeOrPrizeId === 'object' ?
        prizeOrPrizeId.id :
        prizeOrPrizeId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctcHJpemVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaC1pbnRlcnZpZXctcHJpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLFdBQVcsQ0FBQyxDQUFDO0FBQzVELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBMkIseUJBQXlCLENBQUMsQ0FBQztBQUUvRjs7OztHQUlHO0FBRUgsSUFBcUIsMEJBQTBCLEdBQS9DLE1BQXFCLDBCQUEyQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQU41Rjs7OztPQUlHO0lBQ0g7O1FBU0MsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFrR25CLENBQUM7SUFoR0EsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtCQUFrQixDQUFDLGNBQThCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsT0FBTyxD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