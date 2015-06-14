
XmlHttprequest();

function XmlHttprequest(){

  if(window.XMLHttpRequest){
    httpObj = new XMLHttpRequest();
  }else if(window.ActiveXObject){
    httpObj = new XMLHttpRequest('MSXML2.XMLHTTP.3.0');
  }

  var namevalue=encodeURIComponent("about_config.txt")
  var agevalue=encodeURIComponent("2,XXXX_XXXX,1,128,RUN")
  var parameters="file="+namevalue+"&data="+agevalue
  
  httpObj.onreadystatechange = display;
  //httpObj.open("POST", "basicform.php", true)
  httpObj.open("POST", "http://localhost:8080/pns-conv/conversion/log",true);

  httpObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  httpObj.send(parameters)  
 
  //httpObj.open("GET", "http://localhost:8080/pns-conv/services/ConversionService?wsdl",false);
  //httpObj.open("POST", "http://localhost:8080/pns-conv/conversion/",false);
  
  //httpObj.send(null);
  alert("END");
}

function display(){

 if(httpObj.readyState == 4 && httpObj.status == 200){
   //id"print"のhtml情報を変更する
   alert( httpObj.responseText);
 }
 if(httpObj.status == 400){
   //id"print"のhtml情報を変更する
   alert( httpObj.responseText);
 }
}
