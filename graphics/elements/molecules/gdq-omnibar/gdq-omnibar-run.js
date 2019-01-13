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
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarRunElement = class GDQOmnibarRunElement extends Polymer.Element {
  enter() {
    return this.$.listItem.enter();
  }

  exit() {
    return this.$.listItem.exit();
  }

  formatName(name) {
    return name.replace('\\n', ' ').trim();
  }

  concatenateRunners(run) {
    if (run.pk === 2640) {
      // Pre-Show
      return 'SpikeVegeta, feasel, Blechy, Protomagicalgirl & JHobz';
    }

    if (run.pk === 2779) {
      // Mega Man 1 - 3 Team Relay Race Any%
      return '12 Runners';
    }

    let concatenatedRunners = run.runners[0] ? run.runners[0].name : '';

    if (run.runners.length > 1) {
      concatenatedRunners = run.runners.slice(1).reduce((prev, curr, index, array) => {
        if (index === array.length - 1) {
          return `${prev} & ${curr.name}`;
        }

        return `${prev}, ${curr.name}`;
      }, concatenatedRunners);
    }

    return concatenatedRunners;
  }

};

__decorate([property({
  type: Object
})], GDQOmnibarRunElement.prototype, "run", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOmnibarRunElement.prototype, "first", void 0);

GDQOmnibarRunElement = __decorate([customElement('gdq-omnibar-run')], GDQOmnibarRunElement);
export default GDQOmnibarRunElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLXJ1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFFQTs7Ozs7QUFLQSxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXJCLFNBQWtELE9BQU8sQ0FBQyxPQUExRCxDQUFpRTtBQU9oRSxFQUFBLEtBQUssR0FBQTtBQUNKLFdBQVEsS0FBSyxDQUFMLENBQU8sUUFBUCxDQUE4QyxLQUE5QyxFQUFSO0FBQ0E7O0FBRUQsRUFBQSxJQUFJLEdBQUE7QUFDSCxXQUFRLEtBQUssQ0FBTCxDQUFPLFFBQVAsQ0FBOEMsSUFBOUMsRUFBUjtBQUNBOztBQUVELEVBQUEsVUFBVSxDQUFDLElBQUQsRUFBYTtBQUN0QixXQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUFQO0FBQ0E7O0FBRUQsRUFBQSxrQkFBa0IsQ0FBQyxHQUFELEVBQVM7QUFDMUIsUUFBSSxHQUFHLENBQUMsRUFBSixLQUFXLElBQWYsRUFBcUI7QUFDcEI7QUFDQSxhQUFPLHVEQUFQO0FBQ0E7O0FBRUQsUUFBSSxHQUFHLENBQUMsRUFBSixLQUFXLElBQWYsRUFBcUI7QUFDcEI7QUFDQSxhQUFPLFlBQVA7QUFDQTs7QUFFRCxRQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxPQUFKLENBQVksQ0FBWixJQUFpQixHQUFHLENBQUMsT0FBSixDQUFZLENBQVosRUFBZSxJQUFoQyxHQUF1QyxFQUFqRTs7QUFDQSxRQUFJLEdBQUcsQ0FBQyxPQUFKLENBQVksTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMzQixNQUFBLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxPQUFKLENBQVksS0FBWixDQUFrQixDQUFsQixFQUFxQixNQUFyQixDQUE0QixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixFQUFvQixLQUFwQixLQUE2QjtBQUM5RSxZQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTixHQUFlLENBQTdCLEVBQWdDO0FBQy9CLGlCQUFPLEdBQUcsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQTdCO0FBQ0E7O0FBRUQsZUFBTyxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUE1QjtBQUNBLE9BTnFCLEVBTW5CLG1CQU5tQixDQUF0QjtBQU9BOztBQUNELFdBQU8sbUJBQVA7QUFDQTs7QUF6QytELENBQWpFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw4QkFBQSxFLEtBQUEsRSxLQUFTLENBQVQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUU7QUFBcEMsQ0FBRCxDQUNULENBQUEsRSw4QkFBQSxFLE9BQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFMb0Isb0JBQW9CLEdBQUEsVUFBQSxDQUFBLENBRHhDLGFBQWEsQ0FBQyxpQkFBRCxDQUMyQixDQUFBLEVBQXBCLG9CQUFvQixDQUFwQjtlQUFBLG9CIiwic291cmNlUm9vdCI6IiJ9