import Utils from '../helpers/utils';

const yourDetailsToolbarTextSelector =
  'new UiSelector().textContains("Your details")';
const reviewAndBookToolbarTextSelector =
  'new UiSelector().textContains("Review")';

const checkoutToolbarTextSelector =
  'new UiSelector().textContains("Checkout")';

const paymentDetailsTextSelector =
  'new UiSelector().textContains("Payment")';
const confirmBookingButtonSelector =
  'new UiSelector().textContains("Confirm booking")';
class CheckoutPage {
  get continueToPaymentButton() {
    return $(
      'id:com.whitbread.premierinn:id/cta_guest_details_continue'
    );
  }

  get paymentTypeRadioButtons() {
    return $$(
      'id:com.whitbread.premierinn:id/paymentTypeRadioButton'
    );
  }

  get newCardLabel() {
    return $('id:com.whitbread.premierinn:id/new_card_Lbl');
  }

  get enterCardDetailsButton() {
    return $(
      'id:com.whitbread.premierinn:id/review_booking_confirm_button'
    );
  }

  get checkoutToolbarText() {
    return $(`android=${checkoutToolbarTextSelector}`);
  }
  get yourDetailsToolbarText() {
    return $(`android=${yourDetailsToolbarTextSelector}`);
  }
  get reviewAndBookToolbarText() {
    return $(`android=${reviewAndBookToolbarTextSelector}`);
  }

  get paymentDetailsText() {
    return $(`android=${paymentDetailsTextSelector}`);
  }

  get confirmBookingButton() {
    return $(`android=${confirmBookingButtonSelector}`);
  }

  /**
   * Complete whole booking till the card details
   */

  async completeBooking() {
    await Utils.UIScrollIntoViewFunc(
      'com.whitbread.premierinn:id/cta_guest_details_continue'
    );
    await this.continueToPaymentButton.waitForDisplayed();
    await this.continueToPaymentButton.click();
    await expect(this.reviewAndBookToolbarText).toBeDisplayed();
    await Utils.UIScrollIntoViewFunc(
      'com.whitbread.premierinn:id/new_card_Lbl'
    );
    await this.paymentTypeRadioButtons[0].waitForDisplayed();
    await this.paymentTypeRadioButtons[0].click();
    await Utils.UIScrollIntoViewFunc(
      'com.whitbread.premierinn:id/review_booking_confirm_button'
    );
    await this.enterCardDetailsButton.waitForDisplayed();
    await this.enterCardDetailsButton.click();
    await expect(this.checkoutToolbarText).toBePresent();
    await expect(this.paymentDetailsText).toBePresent();
    await Utils.UIScrollIntoViewFunc('paybutton');
  }
}

export default new CheckoutPage();
