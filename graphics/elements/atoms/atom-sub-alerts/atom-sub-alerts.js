var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import AtomTinyAlertsElement from "../atom-tiny-alerts/atom-tiny-alerts.js";
const {
  customElement
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let AtomSubAlertsElement = class AtomSubAlertsElement extends AtomTinyAlertsElement {
  ready() {
    super.ready();
    nodecg.listenFor('subscription', this._handleSubscription.bind(this));
  }

  _handleSubscription(subscription) {
    let backgroundColor = 'white';
    let holdDuration = 0.067;
    let text = 'New';

    if (subscription.sub_plan && subscription.sub_plan.toLowerCase() === 'prime') {
      backgroundColor = '#6441a4';
      text = 'Prime';
    } else if (subscription.context && subscription.context.toLowerCase() === 'subgift') {
      backgroundColor = '#00ffff';
      text = 'Gift';
    } else if (subscription.sub_plan === '2000') {
      backgroundColor = '#ffba00';
      holdDuration *= 3;
      text = '$9.99';
    } else if (subscription.sub_plan === '3000') {
      backgroundColor = '#ff0099';
      holdDuration *= 6;
      text = '$24.99';
    }

    if (subscription.months <= 1) {
      text += ' Sub';
    } else {
      text += ` Resub x${subscription.months}`;
    }

    this.addAlert({
      text,
      backgroundColor,
      holdDuration
    });
  }

};
AtomSubAlertsElement = __decorate([customElement('atom-sub-alerts')], AtomSubAlertsElement);
export default AtomSubAlertsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tc3ViLWFsZXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8scUJBQVAsTUFBa0MseUNBQWxDO0FBbUJBLE1BQU07QUFBQyxFQUFBO0FBQUQsSUFBa0IsT0FBTyxDQUFDLFVBQWhDO0FBRUE7Ozs7O0FBS0EsSUFBcUIsb0JBQW9CLEdBQXpDLE1BQXFCLG9CQUFyQixTQUFrRCxxQkFBbEQsQ0FBdUU7QUFDdEUsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFDQSxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLGNBQWpCLEVBQWlDLEtBQUssbUJBQUwsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBakM7QUFDQTs7QUFFRCxFQUFBLG1CQUFtQixDQUFDLFlBQUQsRUFBaUM7QUFDbkQsUUFBSSxlQUFlLEdBQUcsT0FBdEI7QUFDQSxRQUFJLFlBQVksR0FBRyxLQUFuQjtBQUNBLFFBQUksSUFBSSxHQUFHLEtBQVg7O0FBRUEsUUFBSSxZQUFZLENBQUMsUUFBYixJQUF5QixZQUFZLENBQUMsUUFBYixDQUFzQixXQUF0QixPQUF3QyxPQUFyRSxFQUE4RTtBQUM3RSxNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBLE1BQUEsSUFBSSxHQUFHLE9BQVA7QUFDQSxLQUhELE1BR08sSUFBSSxZQUFZLENBQUMsT0FBYixJQUF3QixZQUFZLENBQUMsT0FBYixDQUFxQixXQUFyQixPQUF1QyxTQUFuRSxFQUE4RTtBQUNwRixNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBLE1BQUEsSUFBSSxHQUFHLE1BQVA7QUFDQSxLQUhNLE1BR0EsSUFBSSxZQUFZLENBQUMsUUFBYixLQUEwQixNQUE5QixFQUFzQztBQUM1QyxNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBLE1BQUEsWUFBWSxJQUFJLENBQWhCO0FBQ0EsTUFBQSxJQUFJLEdBQUcsT0FBUDtBQUNBLEtBSk0sTUFJQSxJQUFJLFlBQVksQ0FBQyxRQUFiLEtBQTBCLE1BQTlCLEVBQXNDO0FBQzVDLE1BQUEsZUFBZSxHQUFHLFNBQWxCO0FBQ0EsTUFBQSxZQUFZLElBQUksQ0FBaEI7QUFDQSxNQUFBLElBQUksR0FBRyxRQUFQO0FBQ0E7O0FBRUQsUUFBSSxZQUFZLENBQUMsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM3QixNQUFBLElBQUksSUFBSSxNQUFSO0FBQ0EsS0FGRCxNQUVPO0FBQ04sTUFBQSxJQUFJLElBQUksV0FBVyxZQUFZLENBQUMsTUFBTSxFQUF0QztBQUNBOztBQUVELFNBQUssUUFBTCxDQUFjO0FBQ2IsTUFBQSxJQURhO0FBRWIsTUFBQSxlQUZhO0FBR2IsTUFBQTtBQUhhLEtBQWQ7QUFLQTs7QUF0Q3FFLENBQXZFO0FBQXFCLG9CQUFvQixHQUFBLFVBQUEsQ0FBQSxDQUR4QyxhQUFhLENBQUMsaUJBQUQsQ0FDMkIsQ0FBQSxFQUFwQixvQkFBb0IsQ0FBcEI7ZUFBQSxvQiIsInNvdXJjZVJvb3QiOiIifQ==