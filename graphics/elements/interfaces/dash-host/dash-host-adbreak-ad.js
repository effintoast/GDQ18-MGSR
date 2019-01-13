var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let DashHostAdbreakAdElement = class DashHostAdbreakAdElement extends Polymer.MutableData(Polymer.Element) {
    static get observers() {
        return [
            '_updateProgressBar(ad.state.*)'
        ];
    }
    frameNumberToTimeString(fps, frameNumber) {
        if (typeof fps !== 'number' || Number.isNaN(fps) ||
            typeof frameNumber !== 'number' || Number.isNaN(frameNumber)) {
            return ':??';
        }
        return this.formatSeconds(frameNumber / fps);
    }
    completeImageAd() {
        nodecg.sendMessage('intermissions:completeImageAd', this.ad.id);
    }
    _booleanReflect(bool) {
        return bool;
    }
    _updateProgressBar() {
        const progressFillElem = this.$['progress-fill'];
        if (!this.ad) {
            progressFillElem.style.transform = 'scaleX(0)';
            return;
        }
        let percent = this.ad.state.frameNumber / this.ad.state.durationFrames;
        percent = Math.max(percent, 0); // Clamp to minimum 0.
        percent = Math.min(percent, 1); // Clamp to maximum 1.
        progressFillElem.style.transform = `scaleX(${percent})`;
    }
    _calcAdvanceHidden(ad, adBreak) {
        if (!ad || !adBreak) {
            return true;
        }
        const lastAd = adBreak.ads[adBreak.ads.length - 1];
        return ad.adType.toLowerCase() !== 'image' || ad === lastAd;
    }
    /**
     * Formats a number of seconds into a string ([hh:]mm:ss).
     * @param seconds - The number of seconds to format.
     * @returns The formatted time sting.
     */
    formatSeconds(seconds) {
        const hms = {
            h: Math.floor(seconds / 3600),
            m: Math.floor(seconds % 3600 / 60),
            s: Math.floor(seconds % 3600 % 60)
        };
        let str = '';
        if (hms.h) {
            str += `${hms.h}:`;
        }
        str += `${(hms.m < 10 ? `0${hms.m}` : hms.m)}:${(hms.s < 10 ? `0${hms.s}` : hms.s)}`;
        return str;
    }
};
__decorate([
    property({ type: Object })
], DashHostAdbreakAdElement.prototype, "adBreak", void 0);
__decorate([
    property({ type: Object })
], DashHostAdbreakAdElement.prototype, "ad", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        computed: '_booleanReflect(ad.state.completed)'
    })
], DashHostAdbreakAdElement.prototype, "completed", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        computed: '_booleanReflect(ad.state.hasFile)'
    })
], DashHostAdbreakAdElement.prototype, "hasFile", void 0);
DashHostAdbreakAdElement = __decorate([
    customElement('dash-host-adbreak-ad')
], DashHostAdbreakAdElement);
export default DashHostAdbreakAdElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWFkYnJlYWstYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtYWRicmVhay1hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsd0JBQXdCLEdBQTdDLE1BQXFCLHdCQUF5QixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQXFCekYsTUFBTSxLQUFLLFNBQVM7UUFDbkIsT0FBTztZQUNOLGdDQUFnQztTQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUFDLEdBQVksRUFBRSxXQUFvQjtRQUN6RCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMvQyxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5RCxPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZUFBZTtRQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQWE7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQW1CLENBQUM7UUFFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDYixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUMvQyxP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