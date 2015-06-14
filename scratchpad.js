
//const Ci = Components.interfaces;
//const Cu = Components.utils;
//const Cr = Components.results;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");

//var dbFile = FileUtils.getFile("ProfD", "foobar.sqlite");
//var alreadyExists = dbFile.exists();
Cu.import("resource://gre/modules/FileUtils.jsm");
var path = "C:\\temp\\sample2.txt"; // ローカルパス文字列

var file = new FileUtils.File(path);
var data = "test";

Components.utils.import("resource://gre/modules/NetUtil.jsm");
Components.utils.import("resource://gre/modules/FileUtils.jsm");

// file is nsIFile, data is a string

// You can also optionally pass a flags parameter here. It defaults to
// FileUtils.MODE_WRONLY | FileUtils.MODE_CREATE | FileUtils.MODE_TRUNCATE;
var ostream = FileUtils.openSafeFileOutputStream(file);

var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].
                createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
converter.charset = "UTF-8";
var istream = converter.convertToInputStream(data);

// The last argument (the callback) is optional.
NetUtil.asyncCopy(istream, ostream, function(status) {
  if (!Components.isSuccessCode(status)) {
    // Handle error!
    return;
  }

  // Data has been written to the file.
});

//var dbConn = Services.storage.openDatabase(dbFile);
//dbConn.beginTransaction();
//dbConn.executeSimpleSQL("CREATE TEMP TABLE table_name (id INTEGER)");
//dbConn.executeSimpleSQL("INSERT INTO table_name (id) VALUES( 123 )");
//dbConn.commitTransaction();
//dbConn.close();
