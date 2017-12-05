### CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE ###

h = $ "#link-home"
l = $ "#link-left"
r = $ "#link-right"


$("body").keypress (e) ->
   switch e.key
      when 'w' then h.click()
      when 'a' then l.click()
      when 'd' then r.click()