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

__decorate([property({
  type: Array
})], GDQFanartElement.prototype, "tweets", void 0);

GDQFanartElement = __decorate([customElement('gdq-fanart')], GDQFanartElement);
export default GDQFanartElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1mYW5hcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBcUMsbUJBQXJDLENBQXRCO0FBQ0EsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBK0IsY0FBL0IsQ0FBeEI7QUFFQTs7Ozs7O0FBTUEsSUFBcUIsZ0JBQWdCLEdBQXJDLE1BQXFCLGdCQUFyQixTQUE4QyxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBOUMsQ0FBa0Y7QUFJakYsRUFBQSxpQkFBaUIsR0FBQTtBQUNoQixVQUFNLGlCQUFOO0FBRUEsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixnQkFBckIsQ0FBc0MsSUFBdEMsRUFBNEMsTUFBSztBQUNoRCxNQUFBLGFBQWEsQ0FBQyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLE1BQU0sSUFBRztBQUNuQyxjQUFNLEtBQUssR0FBRyxLQUFLLENBQUwsQ0FBTyxLQUFyQjs7QUFDQSxnQkFBUSxNQUFSO0FBQ0MsZUFBSyxPQUFMO0FBQ0MsWUFBQSxLQUFLLENBQUMsS0FBTixDQUFZLE9BQVosR0FBc0IsTUFBdEI7QUFDQTs7QUFDRDtBQUNDLFlBQUEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE1BQXRCO0FBTEY7QUFPQSxPQVREO0FBV0EsTUFBQSxlQUFlLENBQUMsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsTUFBTSxJQUFHO0FBQ3JDLFlBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWjtBQUNBOztBQUVBLGFBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBNkIsS0FBN0IsQ0FBbUMsT0FBbkMsR0FBNkMsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0IsTUFBcEIsR0FBNkIsTUFBMUU7QUFDRCxhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsT0FQRDtBQVFBLEtBcEJEO0FBcUJBOztBQUVELEVBQUEsV0FBVyxDQUFDLENBQUQsRUFBVyxDQUFYLEVBQW1CO0FBQzdCO0FBQ0EsV0FBTyxJQUFJLElBQUosQ0FBUyxDQUFDLENBQUMsVUFBWCxJQUF5QixJQUFJLElBQUosQ0FBUyxDQUFDLENBQUMsVUFBWCxDQUFoQztBQUNBOztBQUVELEVBQUEsbUJBQW1CLENBQUMsS0FBRCxFQUFhO0FBQy9CLFVBQU0sYUFBYSxHQUFHLEtBQUssQ0FBTCxDQUFPLGFBQTdCO0FBQ0EsSUFBQSxhQUFhLENBQUMsSUFBZCxDQUFvQixLQUFhLENBQUMsS0FBZCxDQUFvQixLQUF4QztBQUNBOztBQXRDZ0YsQ0FBbEY7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDBCQUFBLEUsUUFBQSxFLEtBQXFCLENBQXJCLENBQUE7O0FBRm9CLGdCQUFnQixHQUFBLFVBQUEsQ0FBQSxDQURwQyxhQUFhLENBQUMsWUFBRCxDQUN1QixDQUFBLEVBQWhCLGdCQUFnQixDQUFoQjtlQUFBLGdCIiwic291cmNlUm9vdCI6IiJ9