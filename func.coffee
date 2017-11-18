###
CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE
###
cs = $ "#code"
class display
  constructor: (@x) -> 

  handler: (dat,stat) ->
    if (stat is 'success') then cs.text(dat)
    else cs.text('An error occurred.')
  run: () ->
    if @x
      #vcard output
       cs.load window.origin.hostname + "/cv/archie.vcf", handler
    else
      #PGP key output
      cs.load window.origin.hostname + "/cv/archie.asc", handler
    cs.slideDown 'normal' unless cs.is(":visible")

