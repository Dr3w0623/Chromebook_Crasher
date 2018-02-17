var doggo = document.querySelector("#doggo");

var cursorArray = ['url("frame_00_delay-0.05s.gif"), auto',
  'url("frame_01_delay-0.05s.gif"), auto',
  'url("frame_02_delay-0.05s.gif"), auto',
  'url("frame_03_delay-0.05s.gif"), auto',
  'url("frame_04_delay-0.05s.gif"), auto',
  'url("frame_05_delay-0.05s.gif"), auto',
  'url("frame_06_delay-0.05s.gif"), auto',
  'url("frame_07_delay-0.05s.gif"), auto',
  'url("frame_08_delay-0.05s.gif"), auto',
  'url("frame_09_delay-0.05s.gif"), auto',
  'url("frame_10_delay-0.05s.gif"), auto',
  'url("frame_11_delay-0.05s.gif"), auto',
  'url("frame_12_delay-0.05s.gif"), auto',
  'url("frame_13_delay-0.05s.gif"), auto',
  'url("frame_14_delay-0.05s.gif"), auto',
  'url("frame_15_delay-0.05s.gif"), auto',
  'url("frame_16_delay-0.05s.gif"), auto',  
  'url("frame_17_delay-0.05s.gif"), auto',               
];
i = 0;
(function cursor() {
  doggo.style.cursor = cursorArray[i];
  i++;
  if (i == cursorArray.length) {
    i = 0;
  }
  setTimeout(cursor, 50);
})();
