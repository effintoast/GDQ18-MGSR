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
let GDQTimekeeperRunnerElement = class GDQTimekeeperRunnerElement extends Polymer.Element {
  calcRunnerStatus(results, index) {
    if (!results) {
      return;
    }

    if (results[index] && results[index].time) {
      return results[index].time.formatted;
    }

    return 'Running';
  }

  calcRunnerStatusClass(results, index) {
    if (!results) {
      return;
    }

    if (results[index] && !results[index].forfeit) {
      return 'finished';
    }

    return '';
  }

  calcFinishHidden(results, index) {
    if (!results) {
      return;
    }

    return results[index] && !results[index].forfeit;
  }

  calcResumeHidden(results, index) {
    if (!results) {
      return;
    }

    return !results[index];
  }

  calcForfeitHidden(results, index) {
    if (!results) {
      return;
    }

    return results[index] && results[index].forfeit;
  }

  calcEditDisabled(results, runnerIndex) {
    if (!results) {
      return;
    }

    return !results[runnerIndex];
  }

  finish() {
    nodecg.sendMessage('completeRunner', {
      index: this.index,
      forfeit: false
    });
  }

  forfeit() {
    nodecg.sendMessage('completeRunner', {
      index: this.index,
      forfeit: true
    });
  }

  resume() {
    nodecg.sendMessage('resumeRunner', this.index);
  }

  editTime() {
    this.dispatchEvent(new CustomEvent('edit-time', {
      bubbles: true,
      composed: true
    }));
  }

};

__decorate([property({
  type: String
})], GDQTimekeeperRunnerElement.prototype, "importPath", void 0);

__decorate([property({
  type: Number
})], GDQTimekeeperRunnerElement.prototype, "index", void 0);

__decorate([property({
  type: Object
})], GDQTimekeeperRunnerElement.prototype, "runner", void 0);

__decorate([property({
  type: Array
})], GDQTimekeeperRunnerElement.prototype, "results", void 0);

GDQTimekeeperRunnerElement = __decorate([customElement('gdq-timekeeper-runner')], GDQTimekeeperRunnerElement);
export default GDQTimekeeperRunnerElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS10aW1la2VlcGVyLXJ1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFHQSxJQUFxQiwwQkFBMEIsR0FBL0MsTUFBcUIsMEJBQXJCLFNBQXdELE9BQU8sQ0FBQyxPQUFoRSxDQUF1RTtBQWF0RSxFQUFBLGdCQUFnQixDQUFDLE9BQUQsRUFBNkIsS0FBN0IsRUFBMEM7QUFDekQsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNiO0FBQ0E7O0FBRUQsUUFBSSxPQUFPLENBQUMsS0FBRCxDQUFQLElBQWtCLE9BQU8sQ0FBQyxLQUFELENBQVAsQ0FBZSxJQUFyQyxFQUEyQztBQUMxQyxhQUFPLE9BQU8sQ0FBQyxLQUFELENBQVAsQ0FBZSxJQUFmLENBQW9CLFNBQTNCO0FBQ0E7O0FBRUQsV0FBTyxTQUFQO0FBQ0E7O0FBRUQsRUFBQSxxQkFBcUIsQ0FBQyxPQUFELEVBQTZCLEtBQTdCLEVBQTBDO0FBQzlELFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDYjtBQUNBOztBQUVELFFBQUksT0FBTyxDQUFDLEtBQUQsQ0FBUCxJQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFELENBQVAsQ0FBZSxPQUF0QyxFQUErQztBQUM5QyxhQUFPLFVBQVA7QUFDQTs7QUFFRCxXQUFPLEVBQVA7QUFDQTs7QUFFRCxFQUFBLGdCQUFnQixDQUFDLE9BQUQsRUFBNkIsS0FBN0IsRUFBMEM7QUFDekQsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNiO0FBQ0E7O0FBRUQsV0FBTyxPQUFPLENBQUMsS0FBRCxDQUFQLElBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUQsQ0FBUCxDQUFlLE9BQXpDO0FBQ0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxPQUFELEVBQTZCLEtBQTdCLEVBQTBDO0FBQ3pELFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDYjtBQUNBOztBQUVELFdBQU8sQ0FBQyxPQUFPLENBQUMsS0FBRCxDQUFmO0FBQ0E7O0FBRUQsRUFBQSxpQkFBaUIsQ0FBQyxPQUFELEVBQTZCLEtBQTdCLEVBQTBDO0FBQzFELFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDYjtBQUNBOztBQUVELFdBQU8sT0FBTyxDQUFDLEtBQUQsQ0FBUCxJQUFrQixPQUFPLENBQUMsS0FBRCxDQUFQLENBQWUsT0FBeEM7QUFDQTs7QUFFRCxFQUFBLGdCQUFnQixDQUFDLE9BQUQsRUFBNkIsV0FBN0IsRUFBZ0Q7QUFDL0QsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNiO0FBQ0E7O0FBRUQsV0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFELENBQWY7QUFDQTs7QUFFRCxFQUFBLE1BQU0sR0FBQTtBQUNMLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsZ0JBQW5CLEVBQXFDO0FBQUMsTUFBQSxLQUFLLEVBQUUsS0FBSyxLQUFiO0FBQW9CLE1BQUEsT0FBTyxFQUFFO0FBQTdCLEtBQXJDO0FBQ0E7O0FBRUQsRUFBQSxPQUFPLEdBQUE7QUFDTixJQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLGdCQUFuQixFQUFxQztBQUFDLE1BQUEsS0FBSyxFQUFFLEtBQUssS0FBYjtBQUFvQixNQUFBLE9BQU8sRUFBRTtBQUE3QixLQUFyQztBQUNBOztBQUVELEVBQUEsTUFBTSxHQUFBO0FBQ0wsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixjQUFuQixFQUFtQyxLQUFLLEtBQXhDO0FBQ0E7O0FBRUQsRUFBQSxRQUFRLEdBQUE7QUFDUCxTQUFLLGFBQUwsQ0FBbUIsSUFBSSxXQUFKLENBQWdCLFdBQWhCLEVBQTZCO0FBQUMsTUFBQSxPQUFPLEVBQUUsSUFBVjtBQUFnQixNQUFBLFFBQVEsRUFBRTtBQUExQixLQUE3QixDQUFuQjtBQUNBOztBQW5GcUUsQ0FBdkU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLG9DQUFBLEUsWUFBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLG9DQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxvQ0FBQSxFLFFBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsb0NBQUEsRSxTQUFBLEUsS0FBb0MsQ0FBcEMsQ0FBQTs7QUFYb0IsMEJBQTBCLEdBQUEsVUFBQSxDQUFBLENBRDlDLGFBQWEsQ0FBQyx1QkFBRCxDQUNpQyxDQUFBLEVBQTFCLDBCQUEwQixDQUExQjtlQUFBLDBCIiwic291cmNlUm9vdCI6IiJ9