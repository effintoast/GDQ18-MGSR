var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const scoresRep = nodecg.Replicant('scores');
let GDQMarioScoresElement = class GDQMarioScoresElement extends Polymer.Element {
    ready() {
        super.ready();
        scoresRep.on('change', newVal => {
            if (newVal) {
                this.scores = newVal;
            }
        });
    }
    _scoreInputChanged(e) {
        if (!scoresRep.value || !e.target) {
            return;
        }
        const target = e.target;
        const teamIndex = parseInt(String(target.getAttribute('data-team-index')), 10);
        const val = parseInt(String(target.value), 10);
        if (typeof val === 'number' && !isNaN(val)) {
            scoresRep.value[teamIndex] = val;
        }
    }
};
__decorate([
    property({ type: Object })
], GDQMarioScoresElement.prototype, "scores", void 0);
GDQMarioScoresElement = __decorate([
    customElement('gdq-marioscores')
], GDQMarioScoresElement);
export default GDQMarioScoresElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW1hcmlvc2NvcmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW1hcmlvc2NvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFTLFFBQVEsQ0FBQyxDQUFDO0FBR3JELElBQXFCLHFCQUFxQixHQUExQyxNQUFxQixxQkFBc0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQUlqRSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDckI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxDQUFRO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBMkIsQ0FBQztRQUM3QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQztDQUNELENBQUE7QUF2QkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7cURBQ1Y7QUFGSyxxQkFBcUI7SUFEekMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0dBQ1oscUJBQXFCLENBeUJ6QztlQXpCb0IscUJBQXFCIn0=