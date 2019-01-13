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

__decorate([property({
  type: Object
})], GDQMarioScoresElement.prototype, "scores", void 0);

GDQMarioScoresElement = __decorate([customElement('gdq-marioscores')], GDQMarioScoresElement);
export default GDQMarioScoresElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1tYXJpb3Njb3Jlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUF5QixRQUF6QixDQUFsQjtBQUdBLElBQXFCLHFCQUFxQixHQUExQyxNQUFxQixxQkFBckIsU0FBbUQsT0FBTyxDQUFDLE9BQTNELENBQWtFO0FBSWpFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsSUFBQSxTQUFTLENBQUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsTUFBTSxJQUFHO0FBQy9CLFVBQUksTUFBSixFQUFZO0FBQ1gsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBO0FBQ0QsS0FKRDtBQUtBOztBQUVELEVBQUEsa0JBQWtCLENBQUMsQ0FBRCxFQUFTO0FBQzFCLFFBQUksQ0FBQyxTQUFTLENBQUMsS0FBWCxJQUFvQixDQUFDLENBQUMsQ0FBQyxNQUEzQixFQUFtQztBQUNsQztBQUNBOztBQUVELFVBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFqQjtBQUNBLFVBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsaUJBQXBCLENBQUQsQ0FBUCxFQUFpRCxFQUFqRCxDQUExQjtBQUNBLFVBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVIsQ0FBUCxFQUF1QixFQUF2QixDQUFwQjs7QUFDQSxRQUFJLE9BQU8sR0FBUCxLQUFlLFFBQWYsSUFBMkIsQ0FBQyxLQUFLLENBQUMsR0FBRCxDQUFyQyxFQUE0QztBQUMzQyxNQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLFNBQWhCLElBQTZCLEdBQTdCO0FBQ0E7QUFDRDs7QUF4QmdFLENBQWxFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwrQkFBQSxFLFFBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFGb0IscUJBQXFCLEdBQUEsVUFBQSxDQUFBLENBRHpDLGFBQWEsQ0FBQyxpQkFBRCxDQUM0QixDQUFBLEVBQXJCLHFCQUFxQixDQUFyQjtlQUFBLHFCIiwic291cmNlUm9vdCI6IiJ9