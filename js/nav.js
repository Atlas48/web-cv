/*CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE*/
var next, prev, up;

prev = $("div.lnk").children("a").eq(0);

up = $("div.lnk").children("a").eq(1);

next = $("div.lnk").children("a").eq(2);

$("body").keypress(function(e) {
  switch (e.key) {
    case 'a':
      return prev.click();
    case 'w':
      return up.click();
    case 'd':
      return next.click();
  }
});
