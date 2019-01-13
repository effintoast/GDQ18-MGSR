var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
            this.$.cover.innerHTML = 'Disconnected from NodeCG!<br/>' +
                'Ads cannot be played until we reconnect.' +
                '<br/><br/>Tell the producer immediately!';
        }
        else if (!casparIsConnected && !compositingOBSWebsocketIsConnected) {
            this.$.cover.innerHTML = 'CasparCG and the compositing OBS are both disconnected!<br/>' +
                'Ads cannot be played until both of them are connected.' +
                '<br/><br/>Tell the producer immediately!';
        }
        else if (!casparIsConnected) {
            this.$.cover.innerHTML = 'CasparCG is disconnected!<br/>' +
                'Ads cannot be played until it is connected.' +
                '<br/><br/>Tell the producer immediately!';
        }
        else if (!compositingOBSWebsocketIsConnected) { // eslint-disable-line no-negated-condition
            this.$.cover.innerHTML = 'The compositing OBS is disconnected!<br/>' +
                'Ads cannot be played until it is connected.' +
                '<br/><br/>Tell the producer immediately!';
        }
        else {
            this.$.cover.hidden = true;
        }
    }
};
__decorate([
    property({ type: Array })
], DashHostAdsElement.prototype, "content", void 0);
__decorate([
    property({ type: Boolean })
], DashHostAdsElement.prototype, "_connectedToNodeCG", void 0);
DashHostAdsElement = __decorate([
    customElement('dash-host-ads')
], DashHostAdsElement);
export default DashHostAdsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWFkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaG9zdC1hZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBc0IscUJBQXFCLENBQUMsQ0FBQztBQUN6RixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLGtCQUFrQixDQUFDLENBQUM7QUFDdEUsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFrQiwwQkFBMEIsQ0FBQyxDQUFDO0FBRzlGLElBQXFCLGtCQUFrQixHQUF2QyxNQUFxQixrQkFBbUIsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFEcEY7O1FBTVMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0lBMEZuQyxDQUFDO0lBdkZBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILGVBQWUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCxNQUFjLENBQUMsTUFBTSxD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