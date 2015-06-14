//
//
var file = 'aboutconfig_20150615.txt';
var data = '';
var EP = 'http://localhost:8080/pns-conv/conversion/log';
var TARGET = "about:config";
//
//window.open(TARGET);
request2(file, view.rowCount);
//for( var id=0 ; id<0; id++) {
for( var id=0 ; id<view.rowCount; id++) {
  data = id + ',';
  data = data + gPrefView[id]['prefCol'] + ',';
  data = data + gPrefView[id]['lockCol'] + ',';
  data = data + gPrefView[id]['typeCol'] + ',';
  data = data + gPrefView[id]['valueCol'] + ',';
  request2(file, data);
}
alert('END');
//
function request2(file, data) {
  //var data2 = new FormData();
  //data2.append("file",file);
  //data2.append("data",data);
  //alert(data2);
  var namevalue=encodeURIComponent( file );
  var agevalue=encodeURIComponent( data );
  var parameters="file="+namevalue+"&data="+agevalue;

  var req = new XMLHttpRequest();
  // 非同期
  //req.onreadystatechange = display;
  //req.open("POST", EP,true);
  // 同期
  req.open('POST', EP, false);
  //req.setRequestHeader('Content-type', 'application/x-www-form-data');
  //req.setRequestHeader("Content-Type", "multipart/form-data");
  //req.send(data2);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.send(parameters)  
  //alert(req.responseText);
  
}
function display() {
  if (req.readyState == 4 && req.status == 200) {
  }
  if (req.status == 400) {
  }
}

