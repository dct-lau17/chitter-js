(function(exports) {

  function PeepListView(peepList) {
    this._peepList = peepList;
  };

  PeepListView.prototype.toHtml = function() {
    return peepListToHtml(this._peepList)

  };

  function peepListToHtml(peeplist){
    return [
      "<div id = peeps>",
        "<ul>",
          peepToHtml(peeplist),
        "</ul>",
      "</div>"
    ].join("")
  }

  function peepToHtml(peeplist){
    var output = '';
    for(var i = 0; i < peeplist.length; i++){
      output += [
        "<p>",
        peeplist[i].body,
        "</br> ",
        formatDate(peeplist[i].created_at),
        " by ",
        peeplist[i].user.handle,
        "</p>"
      ].join("");
    }
    return output
  };


  function formatDate(jsonDate){
    var date = new Date(jsonDate);
    return date
  }


  exports.PeepListView = PeepListView
})(this);