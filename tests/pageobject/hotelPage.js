import BasePage from './basePage';
import Utils from '../helpers/utils';

const hotelOptionSelectorByName =
  'new UiSelector().textContains("West Cliff").resourceId("com.whitbread.premierinn:id/search_result_hotel_name")';
const roomOptionSelector =
  'new UiSelector().textContains("bathroom");';

class HotelPage extends BasePage {
  get selectHotelinFirstFrame() {
    return $(
      '//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.RelativeLayout'
    );
  }

  get selectHotelByName() {
    return $(`android=${hotelOptionSelectorByName}`);
  }

  get hotelView() {
    return $('id:com.whitbread.premierinn:id/hotelsRecyclerView');
  }

  get hotelsNearbyButton() {
    return $(
      'id:com.whitbread.premierinn:id/hotel_details_hotel_nearby_button'
    );
  }

  get hotelRatePlans() {
    return $$('id:com.whitbread.premierinn:id/cal_saver_button');
  }

  get roomSelector() {
    return $(`android=${roomOptionSelector}`);
  }

  get roomOptionCheckbox() {
    return $(
      'id:com.whitbread.premierinn:id/bathroom_choice_radio_button'
    );
  }

  get continueButtonOnExtras() {
    return $(
      'id:com.whitbread.premierinn:id/cab_summary_continue_to_login'
    );
  }

  get breakFastOptions() {
    return $$(
      'id:com.whitbread.premierinn:id/rb_breakfast_radio_button'
    );
  }

  /**
   *  Select options and continue to payment
   */

  async selectExtrasAndOptions() {
    await Utils.UIRandomScrollableFunc();
    await this.selectHotelinFirstFrame.click();
    await this.hotelsNearbyButton.isDisplayed().then(async (data) => {
      if (data == true) {
        await this.hotelsNearbyButton.click();
        await Utils.UIRandomScrollableFunc();
        await driver.pause(2000);
        await this.hotelSelectByLayout.click();
      }
    });
    await this.hotelRatePlans[0].click();
    await this.roomSelector.isDisplayed().then(async (data) => {
      if (data == true) {
        await this.roomOptionCheckbox.click();
        await this.continueButtonOnExtras.click();
        await driver.pause(2000);
      }
    });
  }
}

export default new HotelPage();
