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
    return prizePlaylist.findIndex(({
      id
    }) => id === prizeId) >= 0;
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
    if (!allPrizes || allPrizes.length === 0 || !prizePlaylist || prizePlaylist.length === 0) {
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

__decorate([property({
  type: Array
})], DashInterviewPrizesElement.prototype, "allPrizes", void 0);

__decorate([property({
  type: Array
})], DashInterviewPrizesElement.prototype, "prizePlaylist", void 0);

__decorate([property({
  type: String
})], DashInterviewPrizesElement.prototype, "searchString", void 0);

DashInterviewPrizesElement = __decorate([customElement('dash-interview-prizes')], DashInterviewPrizesElement);
export default DashInterviewPrizesElement;
/**
 * Given a prize Object or prize ID Number, will always return a prize ID Number.
 * @param prizeOrPrizeId - Either a prize Object or a prize ID Number.
 * @returns A prize ID Number.
 */

function disambiguatePrizeId(prizeOrPrizeId) {
  return typeof prizeOrPrizeId === 'object' ? prizeOrPrizeId.id : prizeOrPrizeId;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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