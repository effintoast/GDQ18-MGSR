var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQBreakScheduleRunElement_1;
import { TweenLite, TimelineMax, Sine } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const DISPALY_DURATION = nodecg.bundleConfig.displayDuration;
/**
 * @customElement
 * @polymer
 */

let GDQBreakScheduleRunElement = GDQBreakScheduleRunElement_1 = class GDQBreakScheduleRunElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.upNext = false;
    this._currentRunnerIndex = 0;
  }

  ready() {
    super.ready();
    this.hidden = true;
  }

  _runChanged(newVal) {
    this.hidden = !newVal;

    if (!newVal) {
      return;
    }

    const WIDTH_ADDED_BY_BORDERS = 2;
    const PADDING_OF_INFO_RUNNER = 48;
    const infoRunnerElem = this.$['info-runner'];

    this._killRunnerLoopTimeline();

    infoRunnerElem.maxWidth = 0;
    infoRunnerElem.text = this._getLongestName(newVal.runners);
    TweenLite.set(infoRunnerElem, {
      opacity: 1,
      width: 'auto'
    });
    TweenLite.set(infoRunnerElem.$.fittedContent, {
      scaleX: 1
    });
    Polymer.RenderStatus.beforeNextRender(this, () => {
      infoRunnerElem.maxWidth = this.$.info.clientWidth - WIDTH_ADDED_BY_BORDERS - PADDING_OF_INFO_RUNNER - this.$['info-category'].clientWidth;
      infoRunnerElem.style.width = `${this.$['info-runner'].clientWidth - PADDING_OF_INFO_RUNNER}px`;
      infoRunnerElem.text = newVal.runners[0].name;

      if (newVal.runners.length > 1) {
        this._killRunnerLoopTimeline();

        this._runnerTimeline = this._createRunnerLoopTimeline(newVal.runners);
      }
    });
  }

  _createRunnerLoopTimeline(runners) {
    const tl = new TimelineMax({
      repeat: -1
    });
    runners.slice(1).concat([runners[0]]).forEach(runner => {
      tl.to(this.$['info-runner'], 0.5, {
        opacity: 0,
        ease: Sine.easeInOut
      }, `+=${DISPALY_DURATION}`);
      tl.call(() => {
        this.$['info-runner'].text = runner.name;
      });
      tl.to(this.$['info-runner'], 0.5, {
        opacity: 1,
        ease: Sine.easeInOut
      }, '+=0.1');
    });
    return tl;
  }

  _killRunnerLoopTimeline() {
    if (this._runnerTimeline) {
      this._runnerTimeline.kill();

      this._runnerTimeline = null;
    }
  }

  _formatRunName(runName) {
    if (!runName || typeof runName !== 'string') {
      return '?';
    }

    return runName.replace(/\\n/g, ' ');
  }

  _getLongestName(runners) {
    return runners.reduce((accumulator, currentValue) => {
      if (!currentValue || !currentValue.name) {
        return accumulator;
      }

      return currentValue.name.length > accumulator.length ? currentValue.name : accumulator;
    }, '');
  }

};

__decorate([property({
  type: Object,
  observer: GDQBreakScheduleRunElement_1.prototype._runChanged
})], GDQBreakScheduleRunElement.prototype, "run", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQBreakScheduleRunElement.prototype, "upNext", void 0);

__decorate([property({
  type: Number
})], GDQBreakScheduleRunElement.prototype, "_currentRunnerIndex", void 0);

GDQBreakScheduleRunElement = GDQBreakScheduleRunElement_1 = __decorate([customElement('gdq-break-schedule-run')], GDQBreakScheduleRunElement);
export default GDQBreakScheduleRunElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1icmVhay1zY2hlZHVsZS1ydW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsU0FBUSxTQUFSLEVBQW1CLFdBQW5CLEVBQWdDLElBQWhDLFFBQTJDLG9EQUEzQztBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxZQUFQLENBQW9CLGVBQTdDO0FBRUE7Ozs7O0FBS0EsSUFBcUIsMEJBQTBCLEdBQUEsNEJBQUEsR0FBL0MsTUFBcUIsMEJBQXJCLFNBQXdELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUF4RCxDQUE0RjtBQUw1Rjs7OztBQUlBLEVBQUEsV0FBQSxHQUFBOztBQU1DLFNBQUEsTUFBQSxHQUFTLEtBQVQ7QUFHQSxTQUFBLG1CQUFBLEdBQXNCLENBQXRCO0FBd0ZBOztBQXBGQSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLFNBQUssTUFBTCxHQUFjLElBQWQ7QUFDQTs7QUFFRCxFQUFBLFdBQVcsQ0FBQyxNQUFELEVBQVk7QUFDdEIsU0FBSyxNQUFMLEdBQWMsQ0FBQyxNQUFmOztBQUNBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWjtBQUNBOztBQUVELFVBQU0sc0JBQXNCLEdBQUcsQ0FBL0I7QUFDQSxVQUFNLHNCQUFzQixHQUFHLEVBQS9CO0FBQ0EsVUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFMLENBQU8sYUFBUCxDQUF2Qjs7QUFFQSxTQUFLLHVCQUFMOztBQUVDLElBQUEsY0FBc0IsQ0FBQyxRQUF2QixHQUFrQyxDQUFsQztBQUNBLElBQUEsY0FBc0IsQ0FBQyxJQUF2QixHQUE4QixLQUFLLGVBQUwsQ0FBcUIsTUFBTSxDQUFDLE9BQTVCLENBQTlCO0FBQ0QsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLGNBQWQsRUFBOEI7QUFBQyxNQUFBLE9BQU8sRUFBRSxDQUFWO0FBQWEsTUFBQSxLQUFLLEVBQUU7QUFBcEIsS0FBOUI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsY0FBYyxDQUFDLENBQWYsQ0FBaUIsYUFBL0IsRUFBOEM7QUFBQyxNQUFBLE1BQU0sRUFBRTtBQUFULEtBQTlDO0FBRUEsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixnQkFBckIsQ0FBc0MsSUFBdEMsRUFBNEMsTUFBSztBQUMvQyxNQUFBLGNBQXNCLENBQUMsUUFBdkIsR0FDQSxLQUFLLENBQUwsQ0FBTyxJQUFQLENBQVksV0FBWixHQUNBLHNCQURBLEdBRUEsc0JBRkEsR0FHQSxLQUFLLENBQUwsQ0FBTyxlQUFQLEVBQXdCLFdBSnhCO0FBTUQsTUFBQSxjQUFjLENBQUMsS0FBZixDQUFxQixLQUFyQixHQUE2QixHQUFHLEtBQUssQ0FBTCxDQUFPLGFBQVAsRUFBc0IsV0FBdEIsR0FBb0Msc0JBQXNCLElBQTFGO0FBQ0MsTUFBQSxjQUFzQixDQUFDLElBQXZCLEdBQThCLE1BQU0sQ0FBQyxPQUFQLENBQWUsQ0FBZixFQUFrQixJQUFoRDs7QUFFRCxVQUFJLE1BQU0sQ0FBQyxPQUFQLENBQWUsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM5QixhQUFLLHVCQUFMOztBQUNBLGFBQUssZUFBTCxHQUF1QixLQUFLLHlCQUFMLENBQStCLE1BQU0sQ0FBQyxPQUF0QyxDQUF2QjtBQUNBO0FBQ0QsS0FkRDtBQWVBOztBQUVELEVBQUEseUJBQXlCLENBQUMsT0FBRCxFQUFrQjtBQUMxQyxVQUFNLEVBQUUsR0FBRyxJQUFJLFdBQUosQ0FBZ0I7QUFBQyxNQUFBLE1BQU0sRUFBRSxDQUFDO0FBQVYsS0FBaEIsQ0FBWDtBQUVBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkLEVBQWlCLE1BQWpCLENBQXdCLENBQUMsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUF4QixFQUFzQyxPQUF0QyxDQUE4QyxNQUFNLElBQUc7QUFDdEQsTUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLGFBQVAsQ0FBTixFQUE2QixHQUE3QixFQUFrQztBQUNqQyxRQUFBLE9BQU8sRUFBRSxDQUR3QjtBQUVqQyxRQUFBLElBQUksRUFBRSxJQUFJLENBQUM7QUFGc0IsT0FBbEMsRUFHRyxLQUFLLGdCQUFnQixFQUh4QjtBQUtBLE1BQUEsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFLO0FBQ1gsYUFBSyxDQUFMLENBQU8sYUFBUCxFQUE4QixJQUE5QixHQUFxQyxNQUFNLENBQUMsSUFBNUM7QUFDRCxPQUZEO0FBSUEsTUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLGFBQVAsQ0FBTixFQUE2QixHQUE3QixFQUFrQztBQUNqQyxRQUFBLE9BQU8sRUFBRSxDQUR3QjtBQUVqQyxRQUFBLElBQUksRUFBRSxJQUFJLENBQUM7QUFGc0IsT0FBbEMsRUFHRyxPQUhIO0FBSUEsS0FkRDtBQWdCQSxXQUFPLEVBQVA7QUFDQTs7QUFFRCxFQUFBLHVCQUF1QixHQUFBO0FBQ3RCLFFBQUksS0FBSyxlQUFULEVBQTBCO0FBQ3pCLFdBQUssZUFBTCxDQUFxQixJQUFyQjs7QUFDQSxXQUFLLGVBQUwsR0FBdUIsSUFBdkI7QUFDQTtBQUNEOztBQUVELEVBQUEsY0FBYyxDQUFDLE9BQUQsRUFBaUI7QUFDOUIsUUFBSSxDQUFDLE9BQUQsSUFBWSxPQUFPLE9BQVAsS0FBbUIsUUFBbkMsRUFBNkM7QUFDNUMsYUFBTyxHQUFQO0FBQ0E7O0FBRUQsV0FBTyxPQUFPLENBQUMsT0FBUixDQUFnQixNQUFoQixFQUF3QixHQUF4QixDQUFQO0FBQ0E7O0FBRUQsRUFBQSxlQUFlLENBQUMsT0FBRCxFQUFrQjtBQUNoQyxXQUFPLE9BQU8sQ0FBQyxNQUFSLENBQWUsQ0FBQyxXQUFELEVBQWMsWUFBZCxLQUE4QjtBQUNuRCxVQUFJLENBQUMsWUFBRCxJQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFuQyxFQUF5QztBQUN4QyxlQUFPLFdBQVA7QUFDQTs7QUFDRCxhQUFPLFlBQVksQ0FBQyxJQUFiLENBQWtCLE1BQWxCLEdBQTJCLFdBQVcsQ0FBQyxNQUF2QyxHQUFnRCxZQUFZLENBQUMsSUFBN0QsR0FBb0UsV0FBM0U7QUFDQSxLQUxNLEVBS0osRUFMSSxDQUFQO0FBTUE7O0FBL0YwRixDQUE1Rjs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxRQUFRLEVBQUUsNEJBQTBCLENBQUMsU0FBM0IsQ0FBcUM7QUFBOUQsQ0FBRCxDQUNULENBQUEsRSxvQ0FBQSxFLEtBQUEsRSxLQUFTLENBQVQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUU7QUFBcEMsQ0FBRCxDQUNULENBQUEsRSxvQ0FBQSxFLFFBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsb0NBQUEsRSxxQkFBQSxFLEtBQXdCLENBQXhCLENBQUE7O0FBUm9CLDBCQUEwQixHQUFBLDRCQUFBLEdBQUEsVUFBQSxDQUFBLENBRDlDLGFBQWEsQ0FBQyx3QkFBRCxDQUNpQyxDQUFBLEVBQTFCLDBCQUEwQixDQUExQjtlQUFBLDBCIiwic291cmNlUm9vdCI6IiJ9