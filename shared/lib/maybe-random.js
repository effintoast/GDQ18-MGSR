/* tslint:disable:jsdoc-format */
import Random from "./vendor/random.js";
import { TweenLite, Linear } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
/**
 * Returns a number that has a chance of being random.
 *
 * @param args - The args.
 * @returns The final calculated number.
 *
 * @example <caption>Example usage with default minValue and maxValue.</caption>
 * getMaybeRandomValue({
 *   probability: 0.5,
 *   normalValue: 1
 * });
 *
 * @example <caption>Example usage with specified minValue and maxValue.</caption>
 * getMaybeRandomValue({
 * 	probability: 0.25,
 *	normalValue: 10,
 *	minValue: 2,
 *	maxValue: 20
 * });
 */

export function getMaybeRandomNumber({
  probability,
  normalValue,
  minValue = 0,
  maxValue = 1
}) {
  if (probability > 0) {
    const randomNumber = Random.real(0, 1, true)(Random.engines.browserCrypto);

    if (randomNumber <= probability) {
      return Random.real(minValue, maxValue, true)(Random.engines.browserCrypto);
    }
  }

  return normalValue;
}
/**
 * Creates a tween which uses getMaybeRandomNumber.
 *
 * @param target - The object to tween, or an array of objects.
 * @param propName - The name of the property to tween on the target object.
 * @param duration - The duration of the tween.
 * @param [ease=Linear.easeNone] - An easing function which accepts a single "progress" argument,
 * which is a float in the range 0 - 1. All GSAP eases are supported, as they follow this signature.
 * @param [delay=0] - How long, in seconds, to delay the start of the tween.
 * @param start - The starting getMaybeRandomNumber arguments.
 * @param end - The ending getMaybeRandomNumber arguments.
 * @param [onUpdate] - An optional callback which will be invoked on every tick with the new MaybeRandom value.
 * @returns A GSAP TweenLite tween.
 *
 * @example
 * createMaybeRandomTween({
 *	target: element.style,
 *	propName: 'opacity',
 *	duration: 1,
 *	ease: Sine.easeOut,
 *	start: {probability: 1, normalValue: 0},
 *	end: {probability: 0, normalValue: 1}
 * });
 */

export function createMaybeRandomTween({
  target,
  propName,
  duration,
  ease = Linear.easeNone,
  delay = 0,
  start,
  end,
  onUpdate
}) {
  const proxy = Object.assign({}, start);
  const tweenProps = Object.assign({
    ease,
    delay
  }, end);

  if (Array.isArray(target)) {
    tweenProps.onUpdate = () => {
      const randomValue = getMaybeRandomNumber(proxy);
      target.forEach(childTarget => {
        childTarget[propName] = randomValue;
      });

      if (onUpdate) {
        onUpdate(randomValue);
      }
    };
  } else {
    tweenProps.onUpdate = () => {
      const randomValue = getMaybeRandomNumber(proxy);
      target[propName] = randomValue;

      if (onUpdate) {
        onUpdate(randomValue);
      }
    };
  }

  return TweenLite.to(proxy, duration, tweenProps);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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