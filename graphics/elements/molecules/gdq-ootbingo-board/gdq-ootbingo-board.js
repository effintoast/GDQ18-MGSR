var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GDQOotbingoBoardElement_1;
import { TweenLite, Sine, Power2 } from 'gsap';
const { customElement, property } = Polymer.decorators;
const boardRep = nodecg.Replicant('ootBingo:board');
const urlParams = new URLSearchParams(window.location.search);
const embiggenUrlParam = urlParams.get('embiggen');
let EMBIGGEN;
if (embiggenUrlParam === 'true') {
    EMBIGGEN = true;
    window.title += ' - EMBIGGENED';
}
else if (embiggenUrlParam === 'false') {
    EMBIGGEN = false;
    window.title += ' - debiggened';
}
else {
    EMBIGGEN = null;
}
/**
 * @customElement
 * @polymer
 */
let GDQOotbingoBoardElement = GDQOotbingoBoardElement_1 = class GDQOotbingoBoardElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.embiggened = Boolean(EMBIGGEN);
        this._embiggenState = false;
        this._hiddenState = false;
    }
    ready() {
        super.ready();
        boardRep.on('change', newVal => {
            if (!newVal) {
                return;
            }
            this._embiggenState = newVal.embiggen;
            this._hiddenState = newVal.cardHidden;
        });
    }
    _embiggenStateChanged(newVal) {
        if (EMBIGGEN === null) {
            return;
        }
        if ((newVal && EMBIGGEN) || (!newVal && !EMBIGGEN)) {
            TweenLite.to(this, 0.3, {
                opacity: 1,
                ease: Sine.easeInOut
            });
        }
        else {
            TweenLite.to(this, 0.3, {
                opacity: 0,
                ease: Sine.easeInOut
            });
        }
    }
    _hiddenStateChanged(newVal) {
        if (newVal) {
            TweenLite.to(this.$.cover, 0.3, {
                y: '0%',
                ease: Power2.easeOut
            });
        }
        else {
            TweenLite.to(this.$.cover, 0.3, {
                y: '-100%',
                ease: Power2.easeIn
            });
        }
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOotbingoBoardElement.prototype, "embiggened", void 0);
__decorate([
    property({ type: Boolean, observer: GDQOotbingoBoardElement_1.prototype._embiggenStateChanged })
], GDQOotbingoBoardElement.prototype, "_embiggenState", void 0);
__decorate([
    property({ type: Boolean, observer: GDQOotbingoBoardElement_1.prototype._hiddenStateChanged })
], GDQOotbingoBoardElement.prototype, "_hiddenState", void 0);
GDQOotbingoBoardElement = GDQOotbingoBoardElement_1 = __decorate([
    customElement('gdq-ootbingo-board')
], GDQOotbingoBoardElement);
export default GDQOotbingoBoardElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9vdGJpbmdvLWJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW9vdGJpbmdvLWJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFN0MsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWtCLGdCQUFnQixDQUFDLENBQUM7QUFDckUsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RCxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkQsSUFBSSxRQUF3QixDQUFDO0FBQzdCLElBQUksZ0JBQWdCLEtBQUssTUFBTSxFQUFFO0lBQ2hDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDZixNQUFjLENBQUMsS0FBSyxJQUFJLGVBQWUsQ0FBQztDQUN6QztLQUFNLElBQUksZ0JBQWdCLEtBQUssT0FBTyxFQUFFO0lBQ3hDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDaEIsTUFBYyxDQUFDLEtBQUssSUFBSSxlQUFlLENBQUM7Q0FDekM7S0FBTTtJQUNOLFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDaEI7QUFFRDs7O0dBR0c7QUFFSCxJQUFxQix1QkFBdUIsK0JBQTVDLE1BQXFCLHVCQUF3QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBTHBFOzs7T0FHRztJQUNIOztRQUdDLGVBQVUsR0FBWSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHeEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHdkIsaUJBQVksR0FBRyxLQUFLLENBQUM7SUE2Q3RCLENBQUM7SUEzQ0EsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osT0FBTzthQUNQO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxNQUFlO1FBQ3BDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUN0QixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuRCxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUzthQUNwQixDQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUN2QixPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDcEIsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsbUJBQW1CLENBQUMsTUFBZTtRQUNsQyxJQUFJLE1BQU0sRUFBRTtZQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUMvQixDQUFDLEVBQUUsSUFBSTtnQkFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDcEIsQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUMvQixDQUFDLEVBQUUsT0FBTztnQkFDVixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDbkIsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQW5EQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUM7MkRBQ1o7QUFHeEM7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSx5QkFBdUIsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUMsQ0FBQzsrREFDdEU7QUFHdkI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSx5QkFBdUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUMsQ0FBQzs2REFDdEU7QUFSRCx1QkFBdUI7SUFEM0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0dBQ2YsdUJBQXVCLENBcUQzQztlQXJEb0IsdUJBQXVCIn0=