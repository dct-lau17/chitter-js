"use strict";

(function(exports) {
  function getPeepList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var peeplist = JSON.parse(this.responseText);
        var chittercontroller = new ChitterController(peeplist)
        chittercontroller.displayHtml()
      }
    };

    xhttp.open("GET", "https://chitter-backend-api.herokuapp.com/peeps", true);
    xhttp.send();
  };

  getPeepList();

  function ChitterController(peeplist, peeplistview) {
    this.peepList = peeplist
    this.peepListView = peeplistview || new PeepListView(this.peepList);
  }

  ChitterController.prototype.displayHtml = function(){
    document
      .getElementById("peep-list")
      .innerHTML = this.peepListView.toHtml()
  };

  exports.ChitterController = ChitterController;
  exports.getPeepList = getPeepList

})(this);