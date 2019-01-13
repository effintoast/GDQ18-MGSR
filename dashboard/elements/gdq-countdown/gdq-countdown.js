var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement
} = Polymer.decorators;
const countdownRunning = nodecg.Replicant('countdownRunning');
const countdown = nodecg.Replicant('countdown');
let GDQCountdownElement = class GDQCountdownElement extends Polymer.Element {
  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      countdown.on('change', newVal => {
        if (newVal) {
          const timeInput = this.$.timeInput;
          timeInput.setMS(newVal.minutes, newVal.seconds);
        }
      });
      countdownRunning.on('change', newVal => {
        if (newVal) {
          this.$.countdownContainer.setAttribute('disabled', 'true');
          this.$.start.setAttribute('disabled-running', 'true');
          this.$.stop.removeAttribute('disabled');
        } else {
          this.$.countdownContainer.removeAttribute('disabled');
          this.$.start.removeAttribute('disabled-running');
          this.$.stop.setAttribute('disabled', 'true');
        }

        this.checkStartButton();
      });
    });
  }

  start() {
    nodecg.sendMessage('startCountdown', this.$.timeInput.value);
  }

  stop() {
    nodecg.sendMessage('stopCountdown');
  }

  _handleTimeInvalidChanged(e) {
    if (e.detail && e.detail.value) {
      this.$.start.setAttribute('disabled-invalid', 'true');
    } else {
      this.$.start.removeAttribute('disabled-invalid');
    }

    this.checkStartButton();
  }
  /**
   * Enables or disables the timer start button based on some criteria.
   */


  checkStartButton() {
    if (this.$.start.hasAttribute('disabled-invalid') || this.$.start.hasAttribute('disabled-running')) {
      this.$.start.setAttribute('disabled', 'true');
    } else {
      this.$.start.removeAttribute('disabled');
    }
  }

};
GDQCountdownElement = __decorate([customElement('gdq-countdown')], GDQCountdownElement);
export default GDQCountdownElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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