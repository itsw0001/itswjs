//
var filename = "C:\\temp\\sample2.txt";
var data = "test";

var Ci = Components.interfaces;
var Cu = Components.utils;
var Cr = Components.results;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/FileUtils.jsm");
Components.utils.import("resource://gre/modules/NetUtil.jsm");
Components.utils.import("resource://gre/modules/FileUtils.jsm");

//
var file = new FileUtils.File(filename);
//var alreadyExists = file.exists();

//
var ostream = FileUtils.openSafeFileOutputStream(file);
var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].
                createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
converter.charset = "UTF-8";
var istream = converter.convertToInputStream(data);

//
NetUtil.asyncCopy(istream, ostream, function(status) {
  if (!Components.isSuccessCode(status)) {
    // Handle error!
    return;
  }
  // Data has been written to the file.
});

