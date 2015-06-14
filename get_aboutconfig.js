//
//
var file = 'aboutconfig_20150615.txt';
var data = '';
var EP = 'http://localhost:8080/pns-conv/conversion/log';
var TARGET = "about:config";
//
//window.open(TARGET);
request(file, view.rowCount);
for( var id=0 ; id<view.rowCount; id++) {
  data = id + ',';
  data = data + gPrefView[id]['prefCol'] + ',';
  data = data + gPrefView[id]['lockCol'] + ',';
  data = data + gPrefView[id]['typeCol'] + ',';
  data = data + gPrefView[id]['valueCol'] + ',';
  request(file, data);
}
alert('END');
//
function request(file, data) {
  var req = new XMLHttpRequest();
  // 非同期
  //req.onreadystatechange = display;
  //req.open("POST", EP,true);
  // 同期
  //alert( EP );
  req.open('POST', EP, true);
  
  var data2 = new FormData();
  data2.append("file",file);
  data2.append("data",data);
  
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.send(data2);
}
function display() {
  if (httpObj.readyState == 4 && httpObj.status == 200) {
  }
  if (httpObj.status == 400) {
  }
}


/*
Exception: [Exception... "Failure"  nsresult: "0x80004005 (NS_ERROR_FAILURE)"  location: "JS frame :: Scratchpad/1 :: request :: line 34"  data: no]
*/