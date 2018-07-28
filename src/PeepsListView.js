(function(exports) {

  function PeepListView(peepList) {
    this._peepList = peepList;
  };

  PeepListView.prototype.toHtml = function() {
   return ["<p>", this._peepList[0].body, "</p>"].join("")
  };




  exports.PeepListView = PeepListView
})(this);