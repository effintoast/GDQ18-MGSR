const GAME_SCENE_NAME_REGEX = /^(Standard|Widescreen|GBA|Gameboy|3DS|DS|LttP|OoT|Mario|SM\/ALttP)/;
const preloadedImages = new Set();
const preloaderPromises = new Map();
/**
 * Preloads an image.
 * @param src - The URL of the new image to load.
 * @returns - A promise that is resolved if the load succeeds, and rejected it the load fails.
 */

export function preloadImage(src) {
  if (preloadedImages.has(src)) {
    return Promise.resolve();
  }

  if (preloaderPromises.has(src)) {
    return preloaderPromises.get(src);
  }

  const preloadPromise = new Promise((resolve, reject) => {
    if (!src) {
      resolve();
      return;
    }

    const preloader = document.createElement('img');
    preloader.style.position = 'absolute';
    preloader.style.bottom = '0';
    preloader.style.left = '0';
    preloader.style.width = '1px';
    preloader.style.height = '1px';
    preloader.style.opacity = '0.01';
    const listeners = {
      load: null,
      error: null
    };

    listeners.load = event => {
      event.target.removeEventListener('error', listeners.error);
      event.target.removeEventListener('load', listeners.load);
      preloadedImages.add(src);
      resolve();
    };

    listeners.error = event => {
      event.target.removeEventListener('error', listeners.error);
      event.target.removeEventListener('load', listeners.load);
      reject(new Error(`Image failed to load: ${src}`));
    };

    preloader.addEventListener('load', listeners.load);
    preloader.addEventListener('error', listeners.error);
    preloader.src = src;
  });
  preloaderPromises.set(src, preloadPromise);
  return preloadPromise;
}
export function isGameScene(sceneName) {
  if (!sceneName) {
    return false;
  }

  return Boolean(sceneName.match(GAME_SCENE_NAME_REGEX));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHFCQUFxQixHQUFHLG9FQUE5QjtBQUVBLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBSixFQUF4QjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxHQUFKLEVBQTFCO0FBRUE7Ozs7OztBQUtBLE9BQU0sU0FBVSxZQUFWLENBQXVCLEdBQXZCLEVBQWtDO0FBQ3ZDLE1BQUksZUFBZSxDQUFDLEdBQWhCLENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDN0IsV0FBTyxPQUFPLENBQUMsT0FBUixFQUFQO0FBQ0E7O0FBRUQsTUFBSSxpQkFBaUIsQ0FBQyxHQUFsQixDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQy9CLFdBQU8saUJBQWlCLENBQUMsR0FBbEIsQ0FBc0IsR0FBdEIsQ0FBUDtBQUNBOztBQUVELFFBQU0sY0FBYyxHQUFHLElBQUksT0FBSixDQUFZLENBQUMsT0FBRCxFQUFVLE1BQVYsS0FBb0I7QUFDdEQsUUFBSSxDQUFDLEdBQUwsRUFBVTtBQUNULE1BQUEsT0FBTztBQUNQO0FBQ0E7O0FBRUQsVUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLFFBQWhCLEdBQTJCLFVBQTNCO0FBQ0EsSUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixNQUFoQixHQUF5QixHQUF6QjtBQUNBLElBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLEtBQWhCLEdBQXdCLEtBQXhCO0FBQ0EsSUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixNQUFoQixHQUF5QixLQUF6QjtBQUNBLElBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsTUFBMUI7QUFFQSxVQUFNLFNBQVMsR0FHWDtBQUNILE1BQUEsSUFBSSxFQUFFLElBREg7QUFFSCxNQUFBLEtBQUssRUFBRTtBQUZKLEtBSEo7O0FBUUEsSUFBQSxTQUFTLENBQUMsSUFBVixHQUFpQixLQUFLLElBQUc7QUFDeEIsTUFBQSxLQUFLLENBQUMsTUFBTixDQUFjLG1CQUFkLENBQWtDLE9BQWxDLEVBQTJDLFNBQVMsQ0FBQyxLQUFyRDtBQUNBLE1BQUEsS0FBSyxDQUFDLE1BQU4sQ0FBYyxtQkFBZCxDQUFrQyxNQUFsQyxFQUEwQyxTQUFTLENBQUMsSUFBcEQ7QUFDQSxNQUFBLGVBQWUsQ0FBQyxHQUFoQixDQUFvQixHQUFwQjtBQUNBLE1BQUEsT0FBTztBQUNQLEtBTEQ7O0FBT0EsSUFBQSxTQUFTLENBQUMsS0FBVixHQUFrQixLQUFLLElBQUc7QUFDekIsTUFBQSxLQUFLLENBQUMsTUFBTixDQUFjLG1CQUFkLENBQWtDLE9BQWxDLEVBQTJDLFNBQVMsQ0FBQyxLQUFyRDtBQUNBLE1BQUEsS0FBSyxDQUFDLE1BQU4sQ0FBYyxtQkFBZCxDQUFrQyxNQUFsQyxFQUEwQyxTQUFTLENBQUMsSUFBcEQ7QUFDQSxNQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUosQ0FBVSx5QkFBeUIsR0FBRyxFQUF0QyxDQUFELENBQU47QUFDQSxLQUpEOztBQU1BLElBQUEsU0FBUyxDQUFDLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFNBQVMsQ0FBQyxJQUE3QztBQUNBLElBQUEsU0FBUyxDQUFDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFNBQVMsQ0FBQyxLQUE5QztBQUVBLElBQUEsU0FBUyxDQUFDLEdBQVYsR0FBZ0IsR0FBaEI7QUFDQSxHQXZDc0IsQ0FBdkI7QUF5Q0EsRUFBQSxpQkFBaUIsQ0FBQyxHQUFsQixDQUFzQixHQUF0QixFQUEyQixjQUEzQjtBQUNBLFNBQU8sY0FBUDtBQUNBO0FBRUQsT0FBTSxTQUFVLFdBQVYsQ0FBc0IsU0FBdEIsRUFBdUM7QUFDNUMsTUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDZixXQUFPLEtBQVA7QUFDQTs7QUFFRCxTQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBVixDQUFnQixxQkFBaEIsQ0FBRCxDQUFkO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=