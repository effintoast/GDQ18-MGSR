var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const canPlayTwitchAd = nodecg.Replicant('twitch:canPlayAd');
const timeLeft = nodecg.Replicant('twitch:timeLeftInAd');
const timeSince = nodecg.Replicant('twitch:timeSinceLastAd');
let DashHostTwitchAdsElement = class DashHostTwitchAdsElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.canPlay = false;
        this.cantPlayReason = '';
        this.timeLeft = '8:88';
        this.timeSince = '8:88:88';
        this.hideControls = false;
    }
    ready() {
        super.ready();
        canPlayTwitchAd.on('change', newVal => {
            if (!newVal) {
                return;
            }
            this.canPlay = newVal.canPlay;
            this.cantPlayReason = newVal.reason;
        });
        timeLeft.on('change', newVal => {
            if (!newVal) {
                return;
            }
            this.timeLeft = newVal.formatted.split('.')[0];
        });
        timeSince.on('change', newVal => {
            if (!newVal) {
                return;
            }
            this.timeSince = newVal.formatted.split('.')[0];
        });
    }
    play() {
        this.$.confirmDialog.open();
    }
    _handleConfirmDialogClosed(e) {
        if (e.detail.confirmed === true) {
            const listbox = this.$.listbox;
            const selectedItem = listbox.selectedItem;
            if (!selectedItem) {
                return;
            }
            const duration = parseInt(selectedItem.getAttribute('data-value'), 10);
            nodecg.sendMessage('twitch:playAd', duration);
        }
    }
    _calcPlayButtonLabel(canPlay, cantPlayReason) {
        if (canPlay) {
            return 'Play Twitch Ad';
        }
        return cantPlayReason;
    }
};
__decorate([
    property({ type: Boolean })
], DashHostTwitchAdsElement.prototype, "canPlay", void 0);
__decorate([
    property({ type: String })
], DashHostTwitchAdsElement.prototype, "cantPlayReason", void 0);
__decorate([
    property({ type: String })
], DashHostTwitchAdsElement.prototype, "timeLeft", void 0);
__decorate([
    property({ type: String })
], DashHostTwitchAdsElement.prototype, "timeSince", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashHostTwitchAdsElement.prototype, "hideControls", void 0);
DashHostTwitchAdsElement = __decorate([
    customElement('dash-host-twitch-ads')
], DashHostTwitchAdsElement);
export default DashHostTwitchAdsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LXR3aXRjaC1hZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtdHdpdGNoLWFkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBb0Isa0JBQWtCLENBQUMsQ0FBQztBQUNoRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFhLHFCQUFxQixDQUFDLENBQUM7QUFDckUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYSx3QkFBd0IsQ0FBQyxDQUFDO0FBR3pFLElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBeUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQURyRTs7UUFHQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBR3BCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUd0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQW1EdEIsQ0FBQztJQWpEQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsZUFBZSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQW9DLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELDBCQUEwQixDQUFDLENBQU07UUFDaEMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUE4QixDQUFDO1lBQ3RELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUEyQixDQUFDO1lBQ3pELElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUDtZQUNELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUVELG9CQUFvQixDQUFDLE9BQWdCLEVBQUUsY0FBc0I7UUFDNUQsSUFBSSxPQUFPLEVBQUU7WUFDWixPQUFPLGdCQUFnQixDQUFDO1NBQ3hCO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQztDQUNELENBQUE7QUEvREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7eURBQ1Y7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0VBQ0w7QUFHcEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MERBQ1A7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MkRBQ0g7QUFHdEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDOzhEQUMvQjtBQWRELHdCQUF3QjtJQUQ1QyxhQUFhLENBQUMsc0JBQXNCLENBQUM7R0FDakIsd0JBQXdCLENBaUU1QztlQWpFb0Isd0JBQXdCIn0=