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
    } else {
      this.markAsNotDone();
    }
  }

};

__decorate([property({
  type: Object
})], DashInterviewPrizePlaylistItemElement.prototype, "prize", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computePrizeId(prize.id)'
})], DashInterviewPrizePlaylistItemElement.prototype, "prizeId", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeComplete(prize, _prizePlaylist)',
  observer: '_completeChanged'
})], DashInterviewPrizePlaylistItemElement.prototype, "complete", void 0);

__decorate([property({
  type: Array
})], DashInterviewPrizePlaylistItemElement.prototype, "_prizePlaylist", void 0);

DashInterviewPrizePlaylistItemElement = __decorate([customElement('dash-interview-prize-playlist-item')], DashInterviewPrizePlaylistItemElement);
export default DashInterviewPrizePlaylistItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LXByaXplLXBsYXlsaXN0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEyQyx5QkFBM0MsQ0FBekI7QUFFQTs7Ozs7O0FBTUEsSUFBcUIscUNBQXFDLEdBQTFELE1BQXFCLHFDQUFyQixTQUFtRSxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBbkUsQ0FBdUc7QUF3QnRHLEVBQUEsaUJBQWlCLEdBQUE7QUFDaEIsVUFBTSxpQkFBTjs7QUFFQSxRQUFJLENBQUMsS0FBSyxZQUFWLEVBQXdCO0FBQ3ZCLFdBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNBLE1BQUEsZ0JBQWdCLENBQUMsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsTUFBTSxJQUFHO0FBQ3RDLGFBQUssY0FBTCxHQUFzQixNQUF0QjtBQUNBLE9BRkQ7QUFHQTtBQUNEOztBQUVELEVBQUEsVUFBVSxHQUFBO0FBQ1QsUUFBSSxDQUFDLEtBQUssS0FBVixFQUFpQjtBQUNoQjtBQUNBOztBQUNELElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsMkJBQW5CLEVBQWdELEtBQUssS0FBTCxDQUFXLEVBQTNEO0FBQ0E7O0FBRUQsRUFBQSxhQUFhLEdBQUE7QUFDWixRQUFJLENBQUMsS0FBSyxLQUFWLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBQ0QsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQiw4QkFBbkIsRUFBbUQsS0FBSyxLQUFMLENBQVcsRUFBOUQ7QUFDQTs7QUFFRCxFQUFBLGtCQUFrQixHQUFBO0FBQ2pCLFFBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7QUFDaEI7QUFDQTs7QUFDRCxJQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLG1DQUFuQixFQUF3RCxLQUFLLEtBQUwsQ0FBVyxFQUFuRTtBQUNBOztBQUVELEVBQUEsZUFBZSxDQUFDLE9BQUQsRUFBZ0I7QUFDOUIsV0FBTyxPQUFQO0FBQ0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxLQUFELEVBQWdCLGFBQWhCLEVBQXdEO0FBQ3ZFLFFBQUksQ0FBQyxLQUFELElBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTixDQUFjLGFBQWQsQ0FBZixFQUE2QztBQUM1QztBQUNBOztBQUVELFVBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxJQUFkLENBQW1CLEtBQUssSUFBSSxLQUFLLENBQUMsRUFBTixLQUFhLEtBQUssS0FBTCxDQUFXLEVBQXBELENBQXRCO0FBQ0EsV0FBTyxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFoQyxDQUFkO0FBQ0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxNQUFELEVBQWdCO0FBQzlCLFNBQWEsVUFBYixDQUF3QixJQUF4QixDQUE2QixLQUE3QixDQUFtQyxlQUFuQyxHQUFxRCxNQUFNLEdBQUcsU0FBSCxHQUFlLEVBQTFFO0FBQ0Q7O0FBRUQsRUFBQSxzQkFBc0IsQ0FBQyxDQUFELEVBQU87QUFDNUIsUUFBSSxDQUFDLEtBQUssMkJBQVYsRUFBdUM7QUFDdEMsV0FBSywyQkFBTCxHQUFtQyxJQUFuQzs7QUFDQSxVQUFJLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVCxLQUFtQixLQUF2QixFQUE4QjtBQUM3QjtBQUNBO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLENBQUMsTUFBRixDQUFTLEtBQWIsRUFBb0I7QUFDbkIsV0FBSyxVQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sV0FBSyxhQUFMO0FBQ0E7QUFDRDs7QUF0RnFHLENBQXZHOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwrQ0FBQSxFLE9BQUEsRSxLQUFhLENBQWIsQ0FBQTs7QUFNQSxVQUFBLENBQUEsQ0FKQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQ1QsRUFBQSxrQkFBa0IsRUFBRSxJQURYO0FBRVQsRUFBQSxRQUFRLEVBQUU7QUFGRCxDQUFELENBSVQsQ0FBQSxFLCtDQUFBLEUsU0FBQSxFLEtBQWdCLENBQWhCLENBQUE7O0FBUUEsVUFBQSxDQUFBLENBTkMsUUFBUSxDQUFDO0FBQ1QsRUFBQSxJQUFJLEVBQUUsT0FERztBQUVULEVBQUEsa0JBQWtCLEVBQUUsSUFGWDtBQUdULEVBQUEsUUFBUSxFQUFFLHlDQUhEO0FBSVQsRUFBQSxRQUFRLEVBQUU7QUFKRCxDQUFELENBTVQsQ0FBQSxFLCtDQUFBLEUsVUFBQSxFLEtBQWtCLENBQWxCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLCtDQUFBLEUsZ0JBQUEsRSxLQUF5QyxDQUF6QyxDQUFBOztBQW5Cb0IscUNBQXFDLEdBQUEsVUFBQSxDQUFBLENBRHpELGFBQWEsQ0FBQyxvQ0FBRCxDQUM0QyxDQUFBLEVBQXJDLHFDQUFxQyxDQUFyQztlQUFBLHFDIiwic291cmNlUm9vdCI6IiJ9