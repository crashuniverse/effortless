this.demoTest = function (browser) {
  // open a url
  browser.url('http://localhost:9000');

  // start with identifying the element
  // and then assert the element is present
  browser.expect.element('body').to.be.present;

  // or assert the element is visible
  browser.expect.element('body').to.be.visible;

  // end the session
  browser.end();
};
