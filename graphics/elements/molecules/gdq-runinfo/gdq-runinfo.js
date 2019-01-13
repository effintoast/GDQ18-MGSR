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
const currentRun = nodecg.Replicant('currentRun');
let GDQRuninfoElement = class GDQRuninfoElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.maxNameSize = 45;
    this.forceSingleLineName = false;
    this.name = '?';
    this.initialized = false;
  }

  ready() {
    super.ready();
    Polymer.RenderStatus.afterNextRender(this, () => {
      currentRun.on('change', this.currentRunChanged.bind(this));
    });
  }

  currentRunChanged(newVal) {
    this.name = newVal.name;
    this.category = newVal.category;
    this.console = newVal.console;
    this.releaseYear = String(newVal.releaseYear) || '20XX';
    this.estimate = newVal.estimate; // Avoids some issues that can arise on the first time that fitText is run.
    // Currently unsure why these issues happen.

    if (this.initialized) {
      this.fitText();
    } else {
      Polymer.RenderStatus.afterNextRender(this, this.fitText);
      this.initialized = true;
    }
  }

  fitText() {
    Polymer.flush();
    window.textFit(this.$.name, {
      maxFontSize: this.maxNameSize
    });
    this.$.category.maxTextWidth = this.clientWidth - 76;
    this.$.misc.maxTextWidth = (this.clientWidth - 124) / 3;
  }

  _processName(name) {
    if (!name) {
      return '&nbsp;';
    }

    if (this.forceSingleLineName) {
      return `<div class="name-line">${name.replace('\\n', ' ')}</div>`;
    }

    return name.split('\\n').map(lineText => `<div class="name-line">${lineText}</div>`).join('\n');
  }

};

__decorate([property({
  type: Number
})], GDQRuninfoElement.prototype, "maxNameSize", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQRuninfoElement.prototype, "forceSingleLineName", void 0);

__decorate([property({
  type: String
})], GDQRuninfoElement.prototype, "estimate", void 0);

__decorate([property({
  type: String
})], GDQRuninfoElement.prototype, "releaseYear", void 0);

__decorate([property({
  type: String
})], GDQRuninfoElement.prototype, "console", void 0);

__decorate([property({
  type: String
})], GDQRuninfoElement.prototype, "category", void 0);

__decorate([property({
  type: String
})], GDQRuninfoElement.prototype, "name", void 0);

GDQRuninfoElement = __decorate([customElement('gdq-runinfo')], GDQRuninfoElement);
export default GDQRuninfoElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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