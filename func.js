var cs, get, pDisplay;

cs = "body > div:nth-child(23) > code";

get = new XMLHttpRequest();

get.overrideMimeType("text/plain; charset=utf-8");

get.addEventListener("load", () => {
  if (this.status === 200) {
    return $(cs).val(this.responseText);
  } else {
    console.error(this.statusText);
    return $(cs).val(`Error: ${this.statusText}`);
  }
});

get.addEventListener("error", () => {
  console.error(get.statusText);
  throw "xhrERR";
});

pDisplay = function(x) {
  var exget;
  exget = true;
  if (!$(cs).is(":visible")) {
    $(cs).show();
  }
  switch (x) {
    case 0:
      get.open("GET", "ArchieSullivan.vcf", false); //vcard output
      break;
    case 1:
      get.open("GET", "ArchieSullivan.asc", false); //PGP key output
      break;
    case 2: //hide the texbox! hide the textbox!
      exget = false;
      $(cs).text("").hide();
      break;
    default:
      //can't happen
      console.error("unknown value specified");
      throw "unknownVal";
  }
  if (exget) {
    return get.send();
  }
};
