/* CODE WORK IN PROGRESS
HIGHLY SUBJECT TO CHANGE */
var cs, display;

cs = $("#code");

display = class display {
  constructor(x) {
    this.x = x;
  }

  handler(dat, stat, xhr) {
    if (stat === 'success') {
      return cs.text(dat);
    } else {
      return cs.text(`An error occurred: ${xhr.status} ${xhr.statusText}.`);
    }
  }

  run() {
    if (this.x) {
      //vcard output
      cs.load(window.origin.hostname + "/cv/archie.vcf", super.handler);
    } else {
      //PGP key output
      cs.load(window.origin.hostname + "/cv/archie.asc", super.handler);
    }
    if (!cs.is(":visible")) {
      return cs.slideDown('normal');
    }
  }

};
