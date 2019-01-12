import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { SplitText } from "./vendor/SplitText.js"; // Reference GSAP plugins to prevent them from being tree-shaken out of the build.

window._gsapPlugins = [SplitText]; // A simple placeholder empty object used to create empty padding tweens.

const EMPTY_OBJ = {}; // Used to remember what splits and split types have previously been used on elements.

const memoryMap = new WeakMap();
/**
 * Creates an animation for a "type-in" effect on an HTML element.
 * Uses GSAP's SplitText library.
 *
 * @param element - The element to play this animation on.
 * @param options - Optional options.
 * @param options.splitType - Controls whether to split the
 * text into chars, chars and words, or chars, words, and lines.
 * @param options.typeInterval - The amount of time, in seconds,
 * between each individual character being shown.
 * @returns A GSAP TimelineLite instance.
 */

export function typeAnim(element, {
  splitType = 'chars,words',
  typeInterval = 0.03
} = {}) {
  const tl = new TimelineLite();
  const split = new SplitText(element, {
    type: splitType,
    charsClass: 'character',
    linesClass: 'line'
  });
  memoryMap.set(element, {
    split
  });

  switch (splitType) {
    case 'chars':
      tl.staggerFromTo(split.chars, 0.001, {
        visibility: 'hidden'
      }, {
        visibility: 'visible'
      }, typeInterval);
      break;

    case 'chars,words':
    case 'chars,words,lines':
      split.words.forEach(word => {
        tl.staggerFromTo(word.children, 0.001, {
          visibility: 'hidden'
        }, {
          visibility: 'visible'
        }, typeInterval);
        tl.to(EMPTY_OBJ, typeInterval, EMPTY_OBJ);
      });
      break;

    default:
      throw new Error(`Unexpected splitType "${splitType}"`);
  }

  return tl;
}
/**
 * Creates an animation for a "type-out" or "un-type" effect on an HTML element.
 * The element must have previously used the "typeAnim" method to define its "split" property.
 * Uses GSAP's SplitText library.
 *
 * @param element - The element to play this animation on.
 * @param typeInterval - The amount of time, in seconds, between each individual character being shown.
 * @returns A GSAP TimelineLite instance.
 */

export function untypeAnim(element, typeInterval = 0.03) {
  const tl = new TimelineLite();

  if (!memoryMap.has(element)) {
    return tl;
  }

  const split = memoryMap.get(element).split;

  if (split.words) {
    split.words.forEach(word => {
      tl.staggerTo(word.children, 0.001, {
        visibility: 'hidden'
      }, typeInterval);
      tl.to(EMPTY_OBJ, typeInterval, EMPTY_OBJ);
    });
  } else {
    tl.staggerFrom(split.chars, 0.001, {
      visibility: 'hidden'
    }, typeInterval);
  }

  return tl;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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