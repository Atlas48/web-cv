prev = $("div.lnk").children("a").eq 0
up   = $("div.lnk").children("a").eq 1
next = $("div.lnk").children("a").eq 2

$("body").keypress (e) ->
   switch e.key
      when 'a' then prev.click()
      when 'w' then up.click()
      when 'd' then next.click()