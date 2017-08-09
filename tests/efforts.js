this.efforts = function (browser) {
  var username = process.env.USERNAME;
  var password = process.env.PASSWORD;
  var SHORT_INTERVAL = 5000;
  var LONG_INTERVAL = 10000;
  var REALLY_LONG_INTERVAL = 20000;

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
  browser.setValue('input[id="0_0_4_0"]', '8');
  // browser.setValue('input[id="1_0_4_0"]', '8');
  // browser.setValue('input[id="2_0_4_0"]', '8');
  // browser.setValue('input[id="3_0_4_0"]', '8');
  // browser.setValue('input[id="4_0_4_0"]', '8');
  browser.click('#submitdata');

  // observe: for humans
  browser.pause(SHORT_INTERVAL);

  // end the session
  browser.end();
};
