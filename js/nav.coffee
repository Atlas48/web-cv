### CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE ###

w = $ "#link-home"
a = $ "#link-left"
d = $ "#link-right"

$("body").keydown (e) ->
  switch e.keyCode
    when 37,65 then a.click() #left arrow/a key
    when 39,68 then d.click() #right arrow/d key
    when 38,87 then w.click() #up arrow/w key

