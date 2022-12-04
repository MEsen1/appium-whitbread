import MyAccountPage from '../pageobject/myAccountPage';
import SearchPage from '../pageobject/searchPage';
import HotelPage from '../pageobject/hotelPage';
import CheckoutPage from '../pageobject/checkoutPage';
import 'dotenv/config';

describe('Booking journey till the Payment Screen (As a logged in user)', () => {
  before(async () => {
    await MyAccountPage.landToMainScreen();
    await expect(MyAccountPage.myAccountButton).toBeDisplayed();
  });

  it('User opens the Premier Inn app and login to his account', async () => {
    await MyAccountPage.myAccountButton.click();
    await expect(MyAccountPage.myAccountLoginButton).toBeDisplayed();
    await MyAccountPage.myAccountLoginButton.click();
    await MyAccountPage.loginToAccount(
      process.env.EMAIL,
      process.env.PASSWORD
    );
    await expect(MyAccountPage.accountLoginButton).toBeEnabled();
    await MyAccountPage.accountLoginButton.click();
    await expect(MyAccountPage.emailLabel).toHaveTextContaining(
      process.env.EMAIL
    );
    await driver.takeScreenshot();
  });

  it('User searches for a hotel room for a location', async () => {
    await SearchPage.searchButton.click();
    await expect(SearchPage.locationSearchField).toBeDisplayed();
    await SearchPage.goToHotelSelectBaseLocation('Bournemouth');
    await driver.takeScreenshot();
    await expect(SearchPage.searchIcon).toBeEnabled();
    await SearchPage.searchIcon.click();
  });

  it('User chooses room and extra options', async () => {
    await expect(HotelPage.hotelView).toBeDisplayed();
    await HotelPage.selectExtrasAndOptions();
    await expect(HotelPage.breakFastOptions[0]).toBeDisplayed();
    await HotelPage.breakFastOptions[0].click();
    await HotelPage.continueButtonOnExtras.click();
    await driver.takeScreenshot();
  });

  it('User proceed to checkout by selecting new credit/debit card', async () => {
    await expect(CheckoutPage.yourDetailsToolbarText).toBeDisplayed();
    await CheckoutPage.completeBooking();
    await expect(CheckoutPage.confirmBookingButton).toBePresent();
    await driver.takeScreenshot();
  });
});
