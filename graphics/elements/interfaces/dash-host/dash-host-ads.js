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
const currentIntermission = nodecg.Replicant('currentIntermission');
const casparConnected = nodecg.Replicant('caspar:connected');
const compositingOBSWebsocket = nodecg.Replicant('compositingOBS:websocket');
let DashHostAdsElement = class DashHostAdsElement extends Polymer.MutableData(Polymer.Element) {
  constructor() {
    super(...arguments);
    this._connectedToNodeCG = true;
  }

  ready() {
    super.ready();
    this._checkCover = this._checkCover.bind(this);
    currentIntermission.on('change', newVal => {
      this.content = newVal ? newVal.content : [];
    });
    casparConnected.on('change', this._checkCover);
    compositingOBSWebsocket.on('change', this._checkCover);
    window.socket.on('disconnect', () => {
      this._connectedToNodeCG = false;

      this._checkCover();
    });
    window.socket.on('reconnect', () => {
      this._connectedToNodeCG = true;

      this._checkCover();
    });
  }

  startAdBreak(adBreakId) {
    nodecg.sendMessage('intermissions:startAdBreak', adBreakId);
  }

  cancelAdBreak(adBreakId) {
    nodecg.sendMessage('intermissions:cancelAdBreak', adBreakId);
  }

  completeAdBreak(event) {
    nodecg.sendMessage('intermissions:completeAdBreak', event.detail.adBreakId);
  }

  equal(a, b) {
    return a === b;
  }

  _confirmStartAdBreak(e) {
    this._adBreakIdBeingConfirmed = e.detail.adBreakId;
    this.$.confirmStartDialog.open();
  }

  _confirmCancelAdBreak(e) {
    this._adBreakIdBeingConfirmed = e.detail.adBreakId;
    this.$.confirmStartDialog.open();
  }

  _handleConfirmStartDialogClosed(e) {
    if (e.detail.confirmed === true) {
      this.startAdBreak(this._adBreakIdBeingConfirmed);
    }
  }

  _handleConfirmCancelDialogClosed(e) {
    if (e.detail.confirmed === true) {
      this.cancelAdBreak(this._adBreakIdBeingConfirmed);
    }
  }

  _checkCover() {
    if (casparConnected.status !== 'declared' || compositingOBSWebsocket.status !== 'declared') {
      return;
    }

    this.$.cover.hidden = false;
    const casparIsConnected = casparConnected.value;
    const compositingOBSWebsocketIsConnected = compositingOBSWebsocket.value.status === 'connected';

    if (!this._connectedToNodeCG) {
      this.$.cover.innerHTML = 'Disconnected from NodeCG!<br/>' + 'Ads cannot be played until we reconnect.' + '<br/><br/>Tell the producer immediately!';
    } else if (!casparIsConnected && !compositingOBSWebsocketIsConnected) {
      this.$.cover.innerHTML = 'CasparCG and the compositing OBS are both disconnected!<br/>' + 'Ads cannot be played until both of them are connected.' + '<br/><br/>Tell the producer immediately!';
    } else if (!casparIsConnected) {
      this.$.cover.innerHTML = 'CasparCG is disconnected!<br/>' + 'Ads cannot be played until it is connected.' + '<br/><br/>Tell the producer immediately!';
    } else if (!compositingOBSWebsocketIsConnected) {
      // eslint-disable-line no-negated-condition
      this.$.cover.innerHTML = 'The compositing OBS is disconnected!<br/>' + 'Ads cannot be played until it is connected.' + '<br/><br/>Tell the producer immediately!';
    } else {
      this.$.cover.hidden = true;
    }
  }

};

__decorate([property({
  type: Array
})], DashHostAdsElement.prototype, "content", void 0);

__decorate([property({
  type: Boolean
})], DashHostAdsElement.prototype, "_connectedToNodeCG", void 0);

DashHostAdsElement = __decorate([customElement('dash-host-ads')], DashHostAdsElement);
export default DashHostAdsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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