/*function fixytvolume() {
  var cssLink = document.createElement("link");
  cssLink.href = "https://dl.dropboxusercontent.com/u/32566772/cytu_be/X4CSS.css"; 
  cssLink.rel = "stylesheet"; 
  cssLink.type = "text/css"; 
 
  ////Instead of this
  ////frames['ytapiplayer'].document.body.appendChild(cssLink);
  ////Do this
  //var doc=document.getElementById("ytapiplayer").contentWindow.document;
 
  ////If you are doing any dynamic writing do that first
  ////doc.open();
  ////doc.write(myData);
  ////doc.close();
 
  ////Then append child
  //doc.body.appendChild(cssLink);

  var iframe = document.getElementsByTagName('iframe')[0];
  var iframeDoc = iframe.contentWindow.document;
 
  if (iframeDoc.readyState == 'complete') {
    //example: iframeDoc.body.style.backgroundColor = 'green';
    iframeDoc.body.appendChild(cssLink);
  }
  iframe.onload = function() {
    var iframeDoc2 = iframe.contentWindow.document;
    // example: iframeDoc2.body.style.backgroundColor = 'orange';
    iframeDoc2.body.appendChild(cssLink);
  }
}*/

(function() {
delete toggleUserlist;
toggleUserlist = undefined;
toggleUserlist = null;

var toggleUserlist=function(){
	var e=USEROPTS.layout.match(/synchtube/)?"glyphicon-chevron-left":"glyphicon-chevron-right";
	"0vh !important"===$("#userlist").css("height")?($("#userlist").show(),$("#userlisttoggle").removeClass(e).addClass("glyphicon-chevron-down")):($("#userlist").hide(),$("#userlisttoggle").removeClass("glyphicon-chevron-down").addClass(e)),scrollChat()
};
})();
 
setTimeout(fixytvolume, 1000);*/
