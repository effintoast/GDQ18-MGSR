var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentLayout = nodecg.Replicant('gdq:currentLayout');
const fanartTweetsRep = nodecg.Replicant('fanartTweets');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let GDQFanartElement = class GDQFanartElement extends Polymer.MutableData(Polymer.Element) {
    connectedCallback() {
        super.connectedCallback();
        Polymer.RenderStatus.beforeNextRender(this, () => {
            currentLayout.on('change', newVal => {
                const cover = this.$.cover;
                switch (newVal) {
                    case 'break':
                        cover.style.display = 'none';
                        break;
                    default:
                        cover.style.display = 'flex';
                }
            });
            fanartTweetsRep.on('change', newVal => {
                if (!newVal) {
                    return;
                }
                this.$.empty.style.display = newVal.length > 0 ? 'none' : 'flex';
                this.tweets = newVal;
            });
        });
    }
    _sortTweets(a, b) {
        // @ts-ignore
        return new Date(b.created_at) - new Date(a.created_at);
    }
    _handlePreviewEvent(event) {
        const previewDialog = this.$.previewDialog;
        previewDialog.open(event.model.tweet);
    }
};
__decorate([
    property({ type: Array })
], GDQFanartElement.prototype, "tweets", void 0);
GDQFanartElement = __decorate([
    customElement('gdq-fanart')
], GDQFanartElement);
export default GDQFanartElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWZhbmFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1mYW5hcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQXFCLG1CQUFtQixDQUFDLENBQUM7QUFDaEYsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBZSxjQUFjLENBQUMsQ0FBQztBQUV2RTs7OztHQUlHO0FBRUgsSUFBcUIsZ0JBQWdCLEdBQXJDLE1BQXFCLGdCQUFpQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUlqRixpQkFBaUI7UUFDaEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ2hELGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQW9CLENBQUM7Z0JBQzFDLFFBQVEsTUFBTSxFQUFFO29CQUNmLEtBQUssT0FBTzt3QkFDWCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQzdCLE1BQU07b0JBQ1A7d0JBQ0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2lCQUM5QjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsZUFBZSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1osT0FBTztpQkFDUDtnQkFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQXFCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLENBQVEsRUFBRSxDQUFRO1FBQzdCLGFBQWE7UUFDYixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVk7UUFDL0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUF3QyxDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxJQUFJLENBQUUsS0FBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0QsQ0FBQTtBQXJDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztnREFDSDtBQUZELGdCQUFnQjtJQURwQyxhQUFhLENBQUMsWUFBWSxDQUFDO0dBQ1AsZ0JBQWdCLENBdUNwQztlQXZDb0IsZ0JBQWdCIn0=