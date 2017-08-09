this.efforts = function (browser) {
  var username = process.env.USERNAME;
  var password = process.env.PASSWORD;
  browser.url('http://mywipro.wipro.com');
  browser.deleteCookies();
  browser.click('.idp');
  browser.waitForElementVisible('#userNameInput', 5000);
  browser.setValue('#userNameInput', 'wipro\\' + username);
  browser.setValue('#passwordInput', password);
  browser.click('#submitButton');
  browser.waitForElementVisible('#Find_an_App', 5000);
  browser.click('#Find_an_App');
  browser.waitForElementVisible('#findAppTxtId', 5000);
  browser.setValue('#findAppTxtId', 'myefforts');
  browser.click('#btnSearch');
  browser.pause(10000);
  browser.frame('divMainmyWiproPortalViewFrame');
  browser.setValue('input[id="0_0_4_0"]', '8');
  // browser.setValue('input[id="1_0_4_0"]', '8');
  // browser.setValue('input[id="2_0_4_0"]', '8');
  // browser.setValue('input[id="3_0_4_0"]', '8');
  // browser.setValue('input[id="4_0_4_0"]', '8');
  browser.click('#submitdata');

  // observe: for humans
  browser.pause(3000);

  // end the session
  browser.end();
};
