/**
 * @mixinFunction
 * @polymer
 */
export default Polymer.dedupingMixin(base => {
  class MapSortMixin extends base {
    constructor() {
      super(...arguments);
      this._sortMapVal = null;
    }

    ready() {
      this._createMapSort = this._createMapSort.bind(this);
      super.ready();
    }

    _createMapSort(idKey) {
      return (a, b) => {
        if (!this._sortMapVal) {
          return 0;
        }

        const aMapIndex = a ? this._sortMapVal.indexOf(a[idKey]) : -1;
        const bMapIndex = b ? this._sortMapVal.indexOf(b[idKey]) : -1;

        if (aMapIndex >= 0 && bMapIndex < 0) {
          return -1;
        }

        if (aMapIndex < 0 && bMapIndex >= 0) {
          return 1;
        } // If neither of these replies are in the sort map, just leave them where they are.


        if (aMapIndex < 0 && bMapIndex < 0) {
          return 0;
        }

        return aMapIndex - bMapIndex;
      };
    }

    _shouldFlash(replicantChangeOperations) {
      if (replicantChangeOperations && replicantChangeOperations.length === 1) {
        // Don't flash if the change was just the addition of a new question.
        if (replicantChangeOperations[0].method === 'push') {
          return false;
        } // Don't flash if the change was just caused by hitting "Show Next" on tier2.


        if (replicantChangeOperations[0].method === 'splice' && replicantChangeOperations[0].args.length === 2 && replicantChangeOperations[0].args[0] === 0 && replicantChangeOperations[0].args[1] === 1) {
          return false;
        }
      }

      return true;
    }

    _flashElementBackground(element, {
      flashColor = '#9966cc',
      endColor = window.getComputedStyle(element).backgroundColor,
      duration = 1600,
      easing = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    } = {}) {
      return element.animate([{
        backgroundColor: flashColor
      }, {
        backgroundColor: endColor
      }], {
        duration,
        easing
      });
    }

    _flashAddedNodes(container, selector, condition) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (!mutation.addedNodes) {
            return;
          }

          Array.from(mutation.addedNodes).filter(node => {
            return node && 'matches' in node && node.matches(selector);
          }).forEach(node => {
            if (condition && !condition(node)) {
              return;
            }

            this._flashElementBackground(node);
          });
        });
      });
      observer.observe(container, {
        childList: true,
        subtree: true
      });
      return observer;
    }

  }

  return MapSortMixin;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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