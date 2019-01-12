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
const boardRep = nodecg.Replicant('ootBingo:board');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let DashOotbingoElement = class DashOotbingoElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   */
  constructor() {
    super(...arguments);
    this._submitting = false;
  }

  ready() {
    super.ready();
    this._$lineSelectors = Array.from(this.shadowRoot.querySelectorAll('.lineSelector'));

    this._$lineSelectors.forEach(button => {
      button.addEventListener('click', event => {
        nodecg.sendMessage('ootBingo:selectLine', event.target.innerText.toLowerCase());
      });
    });

    boardRep.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this._$lineSelectors.forEach(button => {
        if (button.innerText.toLowerCase() === newVal.selectedLine) {
          button.setAttribute('selected', 'true');
        } else {
          button.removeAttribute('selected');
        }
      });
    });
  }

  toggleLineFocus() {
    nodecg.sendMessage('ootBingo:toggleLineFocus');
  }

  toggleCard() {
    nodecg.sendMessage('ootBingo:toggleCard');
  }

  toggleEmbiggen() {
    nodecg.sendMessage('ootBingo:toggleEmbiggen');
  }

  async submit() {
    this._submitting = true;
    await nodecg.sendMessage('ootBingo:joinRoom', {
      siteUrl: this.$.siteUrl.value,
      socketUrl: this.$.socketUrl.value,
      playerName: this.$.playerName.value,
      roomCode: this.$.roomCode.value,
      passphrase: this.$.passphrase.value
    });
    this._submitting = false;
  }

  defaults() {
    this.$.siteUrl.value = 'https://bingosync.com';
    this.$.socketUrl.value = 'wss://sockets.bingosync.com';
    this.$.playerName.value = 'NodeCG';
  }

  _computeStatus(socket) {
    if (!socket) {
      return 'disconnected';
    }

    return socket.status;
  }

  _calcToggleClass(cardHidden) {
    return cardHidden ? 'green' : 'red';
  }

  _calcFocusToggleText(lineFocused) {
    return lineFocused ? 'See whole board' : 'Focus on selected group';
  }

  _calcToggleCardText(cardHidden) {
    return cardHidden ? 'Show Card' : 'Hide Card';
  }

  _calcToggleEmbiggenText(embiggen) {
    return embiggen ? 'Debiggen Card' : 'Embiggen Card';
  }

};

__decorate([property({
  type: String
})], DashOotbingoElement.prototype, "socket", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computeStatus(socket)'
})], DashOotbingoElement.prototype, "status", void 0);

DashOotbingoElement = __decorate([customElement('dash-ootbingo')], DashOotbingoElement);
export default DashOotbingoElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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