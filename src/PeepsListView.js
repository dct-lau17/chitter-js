(function(exports) {

  function PeepListView(peepList) {
    this._peepList = peepList;
  };

  PeepListView.prototype.toHtml = function() {
    console.log(formatDate(this._peepList[0].created_at))
    return ["<p>", this._peepList[0].body, " ", formatDate(this._peepList[0].created_at), this._peepList[0].user.handle, "</p>"].join("")
  };

  function formatDate(jsonDate){
    var date = new Date(jsonDate);
    return date
  }


  exports.PeepListView = PeepListView
})(this);