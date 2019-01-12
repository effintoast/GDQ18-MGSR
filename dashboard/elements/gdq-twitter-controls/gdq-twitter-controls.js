var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentLayout = nodecg.Replicant('gdq:currentLayout');
const tweets = nodecg.Replicant('tweets');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let GDQTwitterControlsElement = class GDQTwitterControlsElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        const cover = this.$.cover;
        currentLayout.on('change', newVal => {
            switch (newVal) {
                case 'countdown':
                case 'interview':
                case 'standard_4':
                case 'widescreen_4':
                case 'gameboy_4':
                case 'ds':
                    cover.style.display = 'flex';
                    break;
                default:
                    cover.style.display = 'none';
            }
        });
        tweets.on('change', newVal => {
            this.$.empty.style.display = newVal.length > 0 ? 'none' : 'flex';
            this.tweets = newVal;
        });
    }
    _sortTweets(a, b) {
        // @ts-ignore
        return new Date(b.created_at) - new Date(a.created_at);
    }
};
__decorate([
    property({ type: Array })
], GDQTwitterControlsElement.prototype, "tweets", void 0);
GDQTwitterControlsElement = __decorate([
    customElement('gdq-twitter-controls')
], GDQTwitterControlsElement);
export default GDQTwitterControlsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXR3aXR0ZXItY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtdHdpdHRlci1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBcUIsbUJBQW1CLENBQUMsQ0FBQztBQUNoRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFTLFFBQVEsQ0FBQyxDQUFDO0FBRWxEOzs7O0dBSUc7QUFFSCxJQUFxQix5QkFBeUIsR0FBOUMsTUFBcUIseUJBQTBCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBSTFGLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQW9CLENBQUM7UUFFMUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkMsUUFBUSxNQUFNLEVBQUU7Z0JBQ2YsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLFlBQVksQ0FBQztnQkFDbEIsS0FBSyxjQUFjLENBQUM7Z0JBQ3BCLEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLElBQUk7b0JBQ1IsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUM3QixNQUFNO2dCQUNQO29CQUNDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUM5QjtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFxQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtRQUM3QixhQUFhO1FBQ2IsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRCxDQUFBO0FBL0JBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3lEQUNUO0FBRksseUJBQXlCO0lBRDdDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztHQUNqQix5QkFBeUIsQ0FpQzdDO2VBakNvQix5QkFBeUIifQ==