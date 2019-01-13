var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const urlParams = new URLSearchParams(window.location.search);
const MIRROR_MODE = getBooleanUrlParam(urlParams, 'mirrored');
const GAME_ID = urlParams.has('game_id') ? urlParams.get('game_id') : 'supportclass';
const { customElement, property } = Polymer.decorators;
if (MIRROR_MODE) {
    document.title = `${document.title} (Mirrored)`;
}
function getBooleanUrlParam(params, paramName) {
    return params.has(paramName) && params.get(paramName) !== 'false' && params.get(paramName) !== '0';
}
const ITEM_ROWS = [[
        { name: 'hookshot' },
        { name: 'silvers' },
        { name: 'bow' },
        { name: 'boss0' }
    ], [
        { name: 'firerod' },
        { name: 'somaria' },
        { name: 'hammer' },
        { name: 'boss1' }
    ], [
        { name: 'icerod' },
        { name: 'byrna' },
        { name: 'flute' },
        { name: 'boss2' }
    ], [
        { name: 'quake' },
        { name: 'ether' },
        { name: 'bombos' },
        { name: 'boss3' }
    ], [
        { name: 'boots' },
        { name: 'moonpearl' },
        { name: 'glove', hasLevels: true },
        { name: 'boss4' }
    ], [
        { name: 'flippers' },
        { name: 'mirror' },
        { name: 'lantern' },
        { name: 'boss5' }
    ], [
        { name: 'powder' },
        { name: 'book' },
        { name: 'bottle', hasLevels: true },
        { name: 'boss6' }
    ], [
        { name: 'mushroom' },
        { name: 'shovel' },
        { name: 'net' },
        { name: 'boss7' }
    ], [
        { name: 'tunic', hasLevels: true },
        { name: 'shield', hasLevels: true },
        { name: 'sword', hasLevels: true },
        { name: 'boss8' }
    ], [
        { name: 'cape' },
        { name: 'boomerang', hasLevels: true },
        { name: 'boss10' },
        { name: 'boss9' }
    ]];
/**
 * @customElement
 * @polymer
 */
let GDQLttpTrackerElement = class GDQLttpTrackerElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.gameId = GAME_ID;
        this.mirrored = MIRROR_MODE;
    }
    static get observers() {
        return [
            '_computeItemsAndPrizes(items.*, prizes.*, medallions.*)'
        ];
    }
    ready() {
        super.ready();
        this.$.auth.signInAnonymously().then(() => {
            nodecg.log.info('Signed in anonymously.');
        }).catch((error) => {
            nodecg.log.error('Failed to sign in:', error);
        });
    }
    _computeItemsAndPrizes() {
        const finalArray = [];
        const items = this.items;
        const prizes = this.prizes;
        const medallions = this.medallions;
        if (!items || Object.keys(items).length <= 0 ||
            !prizes || prizes.length <= 0 ||
            !medallions || medallions.length <= 0) {
            this.itemsAndPrizes = finalArray;
            return;
        }
        ITEM_ROWS.forEach((row, rowIndex) => {
            row.forEach((item, itemIndex) => {
                const itemValue = items[item.name];
                if (itemIndex === 3) {
                    // Empty placeholder for the 4th column, which is blank.
                    finalArray.push({});
                }
                finalArray.push({
                    name: item.name,
                    hasLevels: item.hasLevels,
                    level: itemValue,
                    dimmed: typeof item.name === 'string' && item.name.startsWith('boss') ?
                        itemValue === 1 :
                        itemValue === 0 || itemValue === false
                });
            });
            // Dungeon prize.
            const dungeonInfo = {
                name: 'dungeon',
                hasLevels: true,
                level: prizes[rowIndex],
                dimmed: false,
                medallionLevel: undefined
            };
            // Only these two bosses have medallion info.
            if (rowIndex === 8 || rowIndex === 9) {
                dungeonInfo.medallionLevel = medallions[rowIndex];
            }
            finalArray.push(dungeonInfo);
        });
        this.itemsAndPrizes = finalArray;
    }
    _calcCellClass(itemOrPrize, index) {
        const classes = new Set(['cell']);
        const sixesRemainder = (index + 1) % 6;
        if (itemOrPrize.dimmed) {
            classes.add('cell--dimmed');
        }
        if (sixesRemainder === 0) {
            classes.add('cell--prize');
        }
        else if (sixesRemainder === 4) {
            classes.add('cell--zeroWidth');
        }
        return Array.from(classes).join(' ');
    }
    _calcCellSrc(itemOrPrize) {
        let src = itemOrPrize.name;
        if (itemOrPrize.hasLevels) {
            if (typeof itemOrPrize.level === 'number') {
                src = String(src) + String(itemOrPrize.level);
            }
            else {
                return 'blank-pixel';
            }
        }
        return src ? src : 'blank-pixel';
    }
    _hasMedallion(itemOrPrize) {
        return 'medallionLevel' in itemOrPrize && itemOrPrize.medallionLevel !== undefined;
    }
    _calcCellMedallionSrc(itemOrPrize) {
        if (itemOrPrize.name !== 'dungeon') {
            return 'blank-pixel';
        }
        return `medallion${itemOrPrize.medallionLevel}`;
    }
};
__decorate([
    property({ type: Array })
], GDQLttpTrackerElement.prototype, "items", void 0);
__decorate([
    property({ type: Array })
], GDQLttpTrackerElement.prototype, "prizes", void 0);
__decorate([
    property({ type: Array })
], GDQLttpTrackerElement.prototype, "medallions", void 0);
__decorate([
    property({ type: Array })
], GDQLttpTrackerElement.prototype, "itemsAndPrizes", void 0);
__decorate([
    property({ type: String })
], GDQLttpTrackerElement.prototype, "gameId", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQLttpTrackerElement.prototype, "mirrored", void 0);
GDQLttpTrackerElement = __decorate([
    customElement('gdq-lttp-tracker')
], GDQLttpTrackerElement);
export default GDQLttpTrackerElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWx0dHAtdHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1sdHRwLXRyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RCxNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDOUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO0FBQ3JGLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxJQUFJLFdBQVcsRUFBRTtJQUNoQixRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssYUFBYSxDQUFDO0NBQ2hEO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxNQUF1QixFQUFFLFNBQWlCO0lBQ3JFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztBQUNwRyxDQUFDO0FBVUQsTUFBTSxTQUFTLEdBQUcsQ0FBQztRQUNsQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7UUFDbEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO1FBQ2pCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztRQUNiLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztLQUNmLEVBQUU7UUFDRixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7UUFDakIsRUFBQyxJ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