$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "login ke belanjaqu",
  "description": "",
  "id": "login-ke-belanjaqu",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Saya dapat login belanjaqu menggunakan id atau nomor handphone paytren",
  "description": "",
  "id": "login-ke-belanjaqu;saya-dapat-login-belanjaqu-menggunakan-id-atau-nomor-handphone-paytren",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Saya berada pada halaman belanjaqu",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Saya klik side bar",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Saya klik tombol login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sistem menampilkan halaman login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Saya klik login dengan paytren",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Saya mengisi nomor ponsel \"\u003cnomorponsel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Saya mengisi pin \"\u003cpin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Saya mengisi captcha",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Saya Klik Login",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Berhasil login berada pada halaman utama belanjaqu",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-ke-belanjaqu;saya-dapat-login-belanjaqu-menggunakan-id-atau-nomor-handphone-paytren;",
  "rows": [
    {
      "cells": [
        "nomorponsel",
        "pin"
      ],
      "line": 20,
      "id": "login-ke-belanjaqu;saya-dapat-login-belanjaqu-menggunakan-id-atau-nomor-handphone-paytren;;1"
    },
    {
      "cells": [
        "082116515155",
        "100000"
      ],
      "line": 21,
      "id": "login-ke-belanjaqu;saya-dapat-login-belanjaqu-menggunakan-id-atau-nomor-handphone-paytren;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Saya dapat login belanjaqu menggunakan id atau nomor handphone paytren",
  "description": "",
  "id": "login-ke-belanjaqu;saya-dapat-login-belanjaqu-menggunakan-id-atau-nomor-handphone-paytren;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Saya berada pada halaman belanjaqu",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Saya klik side bar",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Saya klik tombol login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sistem menampilkan halaman login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Saya klik login dengan paytren",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Saya mengisi nomor ponsel \"082116515155\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Saya mengisi pin \"100000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Saya mengisi captcha",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Saya Klik Login",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Berhasil login berada pada halaman utama belanjaqu",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.sayaBeradaPadaHalamanBelanjaqu()"
});
formatter.result({
  "duration": 31555626800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikSideBar()"
});
formatter.result({
  "duration": 369685500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikTombolLogin()"
});
formatter.result({
  "duration": 365957800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sistemMenampilkanHalamanLogin()"
});
formatter.result({
  "duration": 24951300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikLoginDenganPaytren()"
});
formatter.result({
  "duration": 1194884700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "082116515155",
      "offset": 27
    }
  ],
  "location": "Loginstep.sayaMengisiNomorPonsel(String)"
});
formatter.result({
  "duration": 512286300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 18
    }
  ],
  "location": "Loginstep.sayaMengisiPin(String)"
});
formatter.result({
  "duration": 233774700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaMengisiCaptcha()"
});
formatter.result({
  "duration": 16471849900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikLogin()"
});
formatter.result({
  "duration": 1161173100,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.berhasilLoginBeradaPadaHalamanUtamaBelanjaqu()"
});
formatter.result({
  "duration": 42906663900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/app-root/div/div/belanjaqu-login-paytren/div[1]/div/form/div[2]/div[2]/input\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027DENAHARDIAN\u0027, ip: \u0027192.168.88.197\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\denac\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56382}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c212a9628a19e14264b4f8dd6314860c\n*** Element info: {Using\u003dxpath, value\u003d/html/body/app-root/div/div/belanjaqu-login-paytren/div[1]/div/form/div[2]/div[2]/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:396)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat Steps.Loginstep.sayaMengisiNomorPonsel(Loginstep.java:102)\r\n\tat Steps.Loginstep.setOcrketemu(Loginstep.java:38)\r\n\tat Steps.Loginstep.berhasilLoginBeradaPadaHalamanUtamaBelanjaqu(Loginstep.java:170)\r\n\tat ✽.Then Berhasil login berada pada halaman utama belanjaqu(Login.feature:16)\r\n",
  "status": "failed"
});
});