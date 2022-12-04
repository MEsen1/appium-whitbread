class Utils {
  /**
   * Find element by text
   */
  async findAndroidElementByText(text) {
    const selector = `android = new UiSelector().textContains(${text})`;
    return $(selector);
  }

  /**
   * Find element by resourceId
   */
  async findElementByResourceId(resourceId) {
    return $(`id:${resourceId}`);
  }

  /**
   * Find elements by resourceId
   */

  async findElementsByResourceId(resourceId) {
    return $$(`id:${resourceId}`);
  }

  /**
   *  Find element by accessibilityId
   */
  async findElementByAccessibilityId(accessibilityId) {
    return $(`~${accessibilityId}`);
  }

  /**
   * Random scroller
   */
  async UIRandomScrollableFunc() {
    return $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward(${
        Math.floor(Math.random() * 8) + 8
      })`
    );
  }

  /**
   * ScroolIntoView Based on Id
   */
  async UIScrollIntoViewFunc(resourceId) {
    return $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${resourceId}"))`
    );
  }
}

export default new Utils();
