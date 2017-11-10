cs = $ "body > div:nth-child(23) > pre"
params = {
  accepts:
      text: "text/plain"
      pgp: "application/pgp-keys"
      vcard: "text/vcard"
  error: (x) =>
      cs.text 
  }
    
pDisplay = (x) ->
  exget = true
  cs.show() unless cs.is(":visible")
  switch x
    when 0 then cs.load window.origin.hostname + "/cv/" #vcard output
    when 1 then cs.load window.origin.hostname + "" #PGP key output
    when 2 #hide the texbox! hide the textbox!
      exget = false
      cs.text("").hide()
    else
      #can't happen
      console.error "unknown value specified"
      throw "unknownVal"
  get.send() if exget