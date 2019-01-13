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
 * @appliesMixin Polymer.MutableData
 */

let AtomOotbingoBoardElement = class AtomOotbingoBoardElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   */
  constructor() {
    super(...arguments);
    this.lineFocused = true;
  }

  _computeLineFocused(lineFocused) {
    return lineFocused;
  }

  _calcCells(cells, selectedLine, lineFocused) {
    if (!lineFocused || !selectedLine) {
      return cells;
    }

    switch (selectedLine) {
      case 'row1':
      case 'row2':
      case 'row3':
      case 'row4':
      case 'row5':
        {
          const rowIndex = parseInt(selectedLine.slice(3), 10) - 1;
          const rowStart = rowIndex * 5;
          return cells.slice(rowStart, rowStart + 5);
        }

      case 'col1':
      case 'col2':
      case 'col3':
      case 'col4':
      case 'col5':
        {
          const columnStart = parseInt(selectedLine.slice(3), 10) - 1;
          return [cells[columnStart], cells[columnStart + 5], cells[columnStart + 10], cells[columnStart + 15], cells[columnStart + 20]];
        }

      case 'tl-br':
        {
          return [cells[0], cells[6], cells[12], cells[18], cells[24]];
        }

      case 'bl-tr':
        {
          return [cells[20], cells[16], cells[12], cells[8], cells[4]];
        }

      default:
        return cells;
    }
  }

  _calcComplete(cell) {
    if (!cell || !cell.colors) {
      return false;
    }

    return cell.colors.length > 0 && cell.colors !== 'none' && cell.colors !== 'blank';
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeLineFocused(board.lineFocused)'
})], AtomOotbingoBoardElement.prototype, "lineFocused", void 0);

AtomOotbingoBoardElement = __decorate([customElement('atom-ootbingo-board')], AtomOotbingoBoardElement);
export default AtomOotbingoBoardElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tb290YmluZ28tYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBUUE7Ozs7OztBQU1BLElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBckIsU0FBc0QsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsT0FBTyxDQUFDLE9BQTVCLENBQXRELENBQTBGO0FBTjFGOzs7OztBQUtBLEVBQUEsV0FBQSxHQUFBOztBQUdDLFNBQUEsV0FBQSxHQUFjLElBQWQ7QUFpRUE7O0FBL0RBLEVBQUEsbUJBQW1CLENBQUMsV0FBRCxFQUFxQjtBQUN2QyxXQUFPLFdBQVA7QUFDQTs7QUFFRCxFQUFBLFVBQVUsQ0FBQyxLQUFELEVBQXFCLFlBQXJCLEVBQTJDLFdBQTNDLEVBQStEO0FBQ3hFLFFBQUksQ0FBQyxXQUFELElBQWdCLENBQUMsWUFBckIsRUFBbUM7QUFDbEMsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsWUFBUSxZQUFSO0FBQ0MsV0FBSyxNQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQWE7QUFDWixnQkFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBUixHQUFzQyxDQUF2RDtBQUNBLGdCQUFNLFFBQVEsR0FBRyxRQUFRLEdBQUcsQ0FBNUI7QUFDQSxpQkFBTyxLQUFLLENBQUMsS0FBTixDQUFZLFFBQVosRUFBc0IsUUFBUSxHQUFHLENBQWpDLENBQVA7QUFDQTs7QUFDRCxXQUFLLE1BQUw7QUFDQSxXQUFLLE1BQUw7QUFDQSxXQUFLLE1BQUw7QUFDQSxXQUFLLE1BQUw7QUFDQSxXQUFLLE1BQUw7QUFBYTtBQUNaLGdCQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFSLEdBQXNDLENBQTFEO0FBQ0EsaUJBQU8sQ0FDTixLQUFLLENBQUMsV0FBRCxDQURDLEVBRU4sS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFmLENBRkMsRUFHTixLQUFLLENBQUMsV0FBVyxHQUFHLEVBQWYsQ0FIQyxFQUlOLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBZixDQUpDLEVBS04sS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFmLENBTEMsQ0FBUDtBQU9BOztBQUNELFdBQUssT0FBTDtBQUFjO0FBQ2IsaUJBQU8sQ0FDTixLQUFLLENBQUMsQ0FBRCxDQURDLEVBRU4sS0FBSyxDQUFDLENBQUQsQ0FGQyxFQUdOLEtBQUssQ0FBQyxFQUFELENBSEMsRUFJTixLQUFLLENBQUMsRUFBRCxDQUpDLEVBS04sS0FBSyxDQUFDLEVBQUQsQ0FMQyxDQUFQO0FBT0E7O0FBQ0QsV0FBSyxPQUFMO0FBQWM7QUFDYixpQkFBTyxDQUNOLEtBQUssQ0FBQyxFQUFELENBREMsRUFFTixLQUFLLENBQUMsRUFBRCxDQUZDLEVBR04sS0FBSyxDQUFDLEVBQUQsQ0FIQyxFQUlOLEtBQUssQ0FBQyxDQUFELENBSkMsRUFLTixLQUFLLENBQUMsQ0FBRCxDQUxDLENBQVA7QUFPQTs7QUFDRDtBQUNDLGVBQU8sS0FBUDtBQTNDRjtBQTZDQTs7QUFFRCxFQUFBLGFBQWEsQ0FBQyxJQUFELEVBQWlCO0FBQzdCLFFBQUksQ0FBQyxJQUFELElBQVMsQ0FBQyxJQUFJLENBQUMsTUFBbkIsRUFBMkI7QUFDMUIsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsV0FBTyxJQUFJLENBQUMsTUFBTCxDQUFZLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsTUFBMUMsSUFBb0QsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsT0FBM0U7QUFDQTs7QUFsRXdGLENBQTFGOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRSxJQUFwQztBQUEwQyxFQUFBLFFBQVEsRUFBRTtBQUFwRCxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsYUFBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBRm9CLHdCQUF3QixHQUFBLFVBQUEsQ0FBQSxDQUQ1QyxhQUFhLENBQUMscUJBQUQsQ0FDK0IsQ0FBQSxFQUF4Qix3QkFBd0IsQ0FBeEI7ZUFBQSx3QiIsInNvdXJjZVJvb3QiOiIifQ==