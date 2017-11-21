### CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE ###
cs = $ "#code"
class display
  constructor: (@x) -> 

  handler: (dat,stat,xhr) ->
    if (stat is 'success') then cs.text(dat)
    else cs.text("An error occurred: #{xhr.status} #{xhr.statusText}.")
  run: () ->
    if @x
      #vcard output
       cs.load window.origin.hostname + "/cv/archie.vcf", super.handler
    else
      #PGP key output
      cs.load window.origin.hostname + "/cv/archie.asc", super.handler
    cs.slideDown 'normal' unless cs.is(":visible")

