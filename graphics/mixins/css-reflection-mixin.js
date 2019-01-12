/**
 * @mixinFunction
 * @polymer
 */
export default Polymer.dedupingMixin(base => {
  /**
   * @mixinClass
   * @polymer
   */
  class CSSReflectionMixin extends base {
    /**
     * Gets the value of a Custom CSS Property.
     * @param prop - The property name to get the value of.
     * @param [fallback] - An optional fallback value to use if the property is not defined.
     * @returns - The value of the Custom CSS Property, which is always a string.
     */
    readCSSCustomProperty(prop, fallback) {
      let value;

      if ('ShadyCSS' in window) {
        value = window.ShadyCSS.getComputedStyleValue(this, prop);
      } else {
        value = getComputedStyle(this, prop);
      }

      return value || fallback;
    }

  }

  return CSSReflectionMixin;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcy1yZWZsZWN0aW9uLW1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsZUFBZSxPQUFPLENBQUMsYUFBUixDQUF1QixJQUFELElBQXNDO0FBQzFFOzs7O0FBSUEsUUFBTSxrQkFBTixTQUFpQyxJQUFqQyxDQUFxQztBQUNwQzs7Ozs7O0FBTUEsSUFBQSxxQkFBcUIsQ0FBQyxJQUFELEVBQWUsUUFBZixFQUE2QjtBQUNqRCxVQUFJLEtBQUo7O0FBQ0EsVUFBSSxjQUFjLE1BQWxCLEVBQTBCO0FBQ3pCLFFBQUEsS0FBSyxHQUFJLE1BQWMsQ0FBQyxRQUFmLENBQXdCLHFCQUF4QixDQUE4QyxJQUE5QyxFQUFvRCxJQUFwRCxDQUFUO0FBQ0EsT0FGRCxNQUVPO0FBQ04sUUFBQSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBRCxFQUFjLElBQWQsQ0FBeEI7QUFDQTs7QUFFRCxhQUFPLEtBQUssSUFBSSxRQUFoQjtBQUNBOztBQWhCbUM7O0FBbUJyQyxTQUFPLGtCQUFQO0FBQ0EsQ0F6QmMsQ0FBZiIsInNvdXJjZVJvb3QiOiIifQ==