import BasePage from './basePage';

class MyAccountPage extends BasePage {
  get myAccountLoginButton() {
    return $('id:com.whitbread.premierinn:id/cab_my_account_log_in');
  }
  get myAccountCreateAccountButton() {
    $(
      'id:com.whitbread.premierinn:id/my_account_create_account_button'
    );
  }

  get emailAddressField() {
    return $(
      'id:com.whitbread.premierinn:id/account_login_email_input'
    );
  }

  get passwordField() {
    return $(
      'id:com.whitbread.premierinn:id/account_login_password_input'
    );
  }

  get accountLoginButton() {
    return $(
      'id:com.whitbread.premierinn:id/account_login_login_button'
    );
  }

  get forgetMyPasswordButton() {
    return $(
      'id:com.whitbread.premierinn:id/account_login_forgot_password_label'
    );
  }

  get emailLabel() {
    return $('id:com.whitbread.premierinn:id/tv_my_account_email');
  }

  /**
   * Login to user account
   */
  async loginToAccount(email, password) {
    await this.emailAddressField.waitForDisplayed();
    await this.emailAddressField.setValue(`${email}`);
    await this.emailAddressField.waitForDisplayed();
    await this.passwordField.setValue(`${password}`);
  }
}

export default new MyAccountPage();
