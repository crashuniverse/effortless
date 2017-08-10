this.efforts = function (browser) {
  var username = process.env.USERNAME;
  var password = process.env.PASSWORD;
  var SHORT_INTERVAL = 5000;
  var LONG_INTERVAL = 10000;
  var REALLY_LONG_INTERVAL = 20000;

  // tip: try to find the date object after 5 am to avoid doing things
  // too soon; Monday = 1
  var yesterday = new Date().getDay() - 1;
  var allowedDays = [1, 2, 3, 4, 5];
  var isAnAllowedDay = allowedDays.indexOf(yesterday) > -1;

  browser.url('http://mywipro.wipro.com');
  browser.deleteCookies();
  browser.click('.idp');
  browser.waitForElementVisible('#userNameInput', SHORT_INTERVAL);
  browser.setValue('#userNameInput', 'wipro\\' + username);
  browser.setValue('#passwordInput', password);
  browser.click('#submitButton');
  browser.waitForElementVisible('.appstore_btn', SHORT_INTERVAL);
  browser.click('.appstore_btn');
  browser.waitForElementVisible('.MYTIME', SHORT_INTERVAL);
  browser.click('.MYTIME');
  browser.maximizeWindow();
  browser.frame('divMainmyWiproPortalViewFrame');
  browser.waitForElementVisible('#tmsMobileId', REALLY_LONG_INTERVAL);
  browser.click('#tmsMobileId');
  browser.waitForElementVisible('#mainContent', LONG_INTERVAL);
  browser.pause(LONG_INTERVAL);

  if (isAnAllowedDay) {
    browser.setValue('input[id="' + (yesterday - 1) + '_0_4_0"]', '8');
    browser.click('#submitdata');
  }

  // observe: for humans
  browser.pause(SHORT_INTERVAL);

  // end the session
  browser.end();
};
