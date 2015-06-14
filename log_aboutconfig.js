
var file = "aboutconfig_20150615_test.txt";
var data = "";

XmlHttprequest(file,view.rowCount);

for( var id=0 ; id<1 ; id++) {
//for( var id=0 ; id<view.rowCount; id++) {
    data = id + "," ;
    data = data + gPrefView[id]["prefCol"] + ",";
    data = data + gPrefView[id]["lockCol"] + ",";
    data = data + gPrefView[id]["typeCol"] + ",";
    data = data + gPrefView[id]["valueCol"] + ",";
    XmlHttprequest(file,data);
}
alert("END");

function XmlHttprequest(file, data){
  if(window.XMLHttpRequest){
    httpObj = new XMLHttpRequest();
  }else if(window.ActiveXObject){
    httpObj = new XMLHttpRequest('MSXML2.XMLHTTP.3.0');
  }
  var namevalue=encodeURIComponent( file )
  var agevalue=encodeURIComponent( data )
  var parameters="file="+namevalue+"&data="+agevalue
  
  //httpObj.onreadystatechange = display;
  // 非同期
  //httpObj.open("POST", "http://localhost:8080/pns-conv/conversion/log",true);
  // 同期
  httpObj.open("POST", "http://localhost:8080/pns-conv/conversion/log",false);
  httpObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  httpObj.send(parameters)  
  //alert("END");
}

function display(){
 if(httpObj.readyState == 4 && httpObj.status == 200){
   //alert( httpObj.responseText);
 }
 if(httpObj.status == 400){
   //alert( httpObj.responseText);
 }

}

