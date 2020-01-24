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
  "duration": 40330920300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikSideBar()"
});
formatter.result({
  "duration": 244621200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikTombolLogin()"
});
formatter.result({
  "duration": 552446600,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sistemMenampilkanHalamanLogin()"
});
formatter.result({
  "duration": 52719300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikLoginDenganPaytren()"
});
formatter.result({
  "duration": 1485248200,
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
  "duration": 1635883400,
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
  "duration": 476478500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaMengisiCaptcha()"
});
formatter.result({
  "duration": 34487715500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.sayaKlikLogin()"
});
formatter.result({
  "duration": 1606939100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027DENAHARDIAN\u0027, ip: \u0027192.168.11.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\denac\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58547}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c7aaa0cf378793e2e29f1e622eab7c6f\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(text(),\u0027LOGIN\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:396)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat Steps.Loginstep.sayaKlikLogin(Loginstep.java:149)\r\n\tat ✽.Then Saya Klik Login(Login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginstep.berhasilLoginBeradaPadaHalamanUtamaBelanjaqu()"
});
formatter.result({
  "status": "skipped"
});
});