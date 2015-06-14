//
var file = 'aboutconfig_20150615.txt';
var data = '';
var EP = 'http://localhost:8080/pns-conv/conversion/log';
var TARGET = "about:config";
//
request2(file, view.rowCount);
for( var id=0 ; id<view.rowCount ; id++) {
  data = id + ',';
  for (var item of ["prefCol",'lockCol',"typeCol","valueCol"]) {
     data = data + gPrefView[id][item] + ',';
  }
  request2(file, data);
}
alert('END');
//
function request2(file, data) {
  var namevalue=encodeURIComponent( file );
  var agevalue=encodeURIComponent( data );
  var parameters="file="+namevalue+"&data="+agevalue;
  var req = new XMLHttpRequest();
  req.open('POST', EP, false);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.send(parameters)  
}

