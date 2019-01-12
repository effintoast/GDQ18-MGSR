var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentPrizes = nodecg.Replicant('currentPrizes');
let DashHostPrizesElement = class DashHostPrizesElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentPrizes.on('change', newVal => {
            this.prizes = newVal;
        });
        nodecg.listenFor('prizes:updating', () => {
            this.$.cooldown.indeterminate = true;
        });
        nodecg.listenFor('prizes:updated', () => {
            this.$.cooldown.startCountdown(60);
        });
    }
    computePrizesFilter(str) {
        if (str) {
            // Return a filter function for the current search string.
            const regexp = new RegExp(str, 'ig');
            return (prize) => {
                return regexp.test(prize.description);
            };
        }
        // Set filter to null to disable filtering.
        return null;
    }
};
__decorate([
    property({ type: Array })
], DashHostPrizesElement.prototype, "prizes", void 0);
__decorate([
    property({ type: String, notify: true })
], DashHostPrizesElement.prototype, "prizeFilterString", void 0);
DashHostPrizesElement = __decorate([
    customElement('dash-host-prizes')
], DashHostPrizesElement);
export default DashHostPrizesElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LXByaXplcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaG9zdC1wcml6ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsZUFBZSxDQUFDLENBQUM7QUFHakUsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFzQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQU90RixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQXdDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBd0MsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsbUJBQW1CLENBQUMsR0FBVztRQUM5QixJQUFJLEdBQUcsRUFBRTtZQUNSLDBEQUEwRDtZQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztTQUNGO1FBRUQsMkNBQTJDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNELENBQUE7QUFoQ0E7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7cURBQ1I7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnRUFDYjtBQUxOLHFCQUFxQjtJQUR6QyxhQUFhLENBQUMsa0JBQWtCLENBQUM7R0FDYixxQkFBcUIsQ0FrQ3pDO2VBbENvQixxQkFBcUIifQ==