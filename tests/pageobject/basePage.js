export default class BasePage {
  get acceptButton() {
    return $('id:com.whitbread.premierinn:id/gdpr_accept_button');
  }

  get continueButton() {
    return $(
      'id:com.whitbread.premierinn:id/notification_accept_button_text'
    );
  }

  get coronaNotDismissButton() {
    return $('~close');
  }

  get searchButton() {
    return $('~Search');
  }

  get bookingsButton() {
    return $('~Bookings');
  }

  get myAccountButton() {
    return $('~Account');
  }

  get toolBar() {
    return $('id:com.whitbread.premierinn:id/toolbar');
  }

  /**
   * Function to skip notifications
   */
  async landToMainScreen() {
    await this.acceptButton.waitForDisplayed();
    await this.acceptButton.click();
    await this.continueButton.waitForDisplayed();
    await this.continueButton.click();
    await this.coronaNotDismissButton.waitForDisplayed();
    await this.coronaNotDismissButton.click();
  }
}
