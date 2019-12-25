var exec = require('cordova/exec');


var SeuicScanner = function () {}
// exec方法参数说明  arg1：成功回调; arg2：失败回调; arg3：类名; arg4：方法名; arg5：json格式参数
   SeuicScanner.prototype.getCode = function (success, error) {
    exec(success, error, "SeuicScanner", "getCode", []);
  };
  SeuicScanner.prototype.closeScan = function (success, error) {
    exec(success, error, "SeuicScanner", "closeScan", []);
  };
  SeuicScanner.prototype.closeKeyboard = function (success, error) {
    exec(success, error, "SeuicScanner", "closeKeyboard", []);
  };

module.exports = new SeuicScanner();
