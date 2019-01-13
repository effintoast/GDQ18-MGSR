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
const smalttpData = nodecg.Replicant('smalttpData');
/**
 * @customElement
 * @polymer
 */

let GDQSmalttpTrackerElement = class GDQSmalttpTrackerElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    smalttpData.on('change', newVal => {
      this.items = newVal;
    });
  }

  _advance(e) {
    const updated = e.model.item;

    if (updated.state === updated.maxState) {
      updated.state = 0;
    } else {
      updated.state++;
    }
  }

  _highlight(e) {
    e.model.item.highlight = !e.model.item.highlight;
  }

  _calcCellClass(itemOrPrize) {
    const classes = new Set(['cell']);

    if (itemOrPrize.state === 0) {
      classes.add('cell--dimmed');
    }

    if (itemOrPrize.highlight === true) {
      classes.add('cell--highlight');
    }

    return Array.from(classes).join(' ');
  }

  _calcToggleClass(itemOrPrize) {
    const classes = new Set(['cell']);

    if (itemOrPrize.highlight === true) {
      classes.add('cell--highlight');
    }

    return Array.from(classes).join(' ');
  }

  _calcCellSrc(itemOrPrize) {
    let src = itemOrPrize.name;

    if (itemOrPrize.state > 1) {
      src += itemOrPrize.state;
    }

    return src ? src : 'blank-pixel';
  }

};

__decorate([property({
  type: Array
})], GDQSmalttpTrackerElement.prototype, "items", void 0);

GDQSmalttpTrackerElement = __decorate([customElement('gdq-smalttp-tracker')], GDQSmalttpTrackerElement);
export default GDQSmalttpTrackerElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1zbWFsdHRwLXRyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBOEIsYUFBOUIsQ0FBcEI7QUFFQTs7Ozs7QUFLQSxJQUFxQix3QkFBd0IsR0FBN0MsTUFBcUIsd0JBQXJCLFNBQXNELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUF0RCxDQUEwRjtBQUl6RixFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLElBQUEsV0FBVyxDQUFDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLE1BQU0sSUFBRztBQUNqQyxXQUFLLEtBQUwsR0FBYSxNQUFiO0FBQ0EsS0FGRDtBQUdBOztBQUVELEVBQUEsUUFBUSxDQUFDLENBQUQsRUFBTztBQUNkLFVBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFGLENBQVEsSUFBeEI7O0FBQ0EsUUFBSSxPQUFPLENBQUMsS0FBUixLQUFrQixPQUFPLENBQUMsUUFBOUIsRUFBd0M7QUFDdkMsTUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQixDQUFoQjtBQUNBLEtBRkQsTUFFTztBQUNOLE1BQUEsT0FBTyxDQUFDLEtBQVI7QUFDQTtBQUNEOztBQUVELEVBQUEsVUFBVSxDQUFDLENBQUQsRUFBTztBQUNoQixJQUFBLENBQUMsQ0FBQyxLQUFGLENBQVEsSUFBUixDQUFhLFNBQWIsR0FBeUIsQ0FBQyxDQUFDLENBQUMsS0FBRixDQUFRLElBQVIsQ0FBYSxTQUF2QztBQUNBOztBQUVELEVBQUEsY0FBYyxDQUFDLFdBQUQsRUFBaUI7QUFDOUIsVUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFKLENBQVEsQ0FBQyxNQUFELENBQVIsQ0FBaEI7O0FBRUEsUUFBSSxXQUFXLENBQUMsS0FBWixLQUFzQixDQUExQixFQUE2QjtBQUM1QixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNBOztBQUVELFFBQUksV0FBVyxDQUFDLFNBQVosS0FBMEIsSUFBOUIsRUFBb0M7QUFDbkMsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ0E7O0FBRUQsV0FBTyxLQUFLLENBQUMsSUFBTixDQUFXLE9BQVgsRUFBb0IsSUFBcEIsQ0FBeUIsR0FBekIsQ0FBUDtBQUNBOztBQUVELEVBQUEsZ0JBQWdCLENBQUMsV0FBRCxFQUFpQjtBQUNoQyxVQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUosQ0FBUSxDQUFDLE1BQUQsQ0FBUixDQUFoQjs7QUFFQSxRQUFJLFdBQVcsQ0FBQyxTQUFaLEtBQTBCLElBQTlCLEVBQW9DO0FBQ25DLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBOztBQUVELFdBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYLEVBQW9CLElBQXBCLENBQXlCLEdBQXpCLENBQVA7QUFDQTs7QUFFRCxFQUFBLFlBQVksQ0FBQyxXQUFELEVBQWlCO0FBQzVCLFFBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUF0Qjs7QUFDQSxRQUFJLFdBQVcsQ0FBQyxLQUFaLEdBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE1BQUEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFuQjtBQUNBOztBQUNELFdBQU8sR0FBRyxHQUFHLEdBQUgsR0FBUyxhQUFuQjtBQUNBOztBQXREd0YsQ0FBMUY7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsT0FBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUZvQix3QkFBd0IsR0FBQSxVQUFBLENBQUEsQ0FENUMsYUFBYSxDQUFDLHFCQUFELENBQytCLENBQUEsRUFBeEIsd0JBQXdCLENBQXhCO2VBQUEsd0IiLCJzb3VyY2VSb290IjoiIn0=