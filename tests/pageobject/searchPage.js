import BasePage from './basePage';

class SearchPage extends BasePage {
  get locationSearchField() {
    return $(
      'id:com.whitbread.premierinn:id/item_landing_where_to_location'
    );
  }

  get locationSearchText() {
    return $('id:com.whitbread.premierinn:id/landing_location_text');
  }

  get dateField() {
    return $('id:com.whitbread.premierinn:id/item_landing_date');
  }

  get guestAndRoomField() {
    return $('id:com.whitbread.premierinn:id/item_landing_room');
  }

  get searchIcon() {
    return $('id:com.whitbread.premierinn:id/landing_search_button');
  }

  get destinationInput() {
    return $('id:com.whitbread.premierinn:id/et_layout_search');
  }

  get placeNames() {
    return $$('id:com.whitbread.premierinn:id/place_name');
  }

  /**
   * Select hotel for a location
   */
  async goToHotelSelectBaseLocation(locationName) {
    await this.locationSearchField.click();
    await this.destinationInput.waitForEnabled();
    await this.destinationInput.setValue(`${locationName}`);
    await this.placeNames[0].waitForDisplayed();
    await this.placeNames[0].click();
    await expect(this.locationSearchText).toHaveTextContaining(
      `${locationName}`
    );
  }
}

export default new SearchPage();
