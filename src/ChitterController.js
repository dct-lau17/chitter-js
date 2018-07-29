"use strict";

(function(exports) {
  function getPeepList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var peeplist = JSON.parse(this.responseText);
        var chittercontroller = new ChitterController(peeplist)
        chittercontroller.displayHtml()
        chittercontroller.displaySignUp()

      }
    };

    xhttp.open("GET", "https://chitter-backend-api.herokuapp.com/peeps", true);
    xhttp.send();
  };



  function ChitterController(peeplist, peeplistview, signupview) {
    this.peepList = peeplist;
    this.peepListView = peeplistview || new PeepListView(this.peepList);
    this.signUpView = signupview || new SignUpView()
  }

  ChitterController.prototype.displayHtml = function(){
    document
      .getElementById("peep-list")
      .innerHTML = this.peepListView.toHtml()
  };

  ChitterController.prototype.displaySignUp = function(){
    document
      .getElementById("sign-up")
      .innerHTML = this.signUpView.displayButton()
  };

  // function setEventListeners(){
  //   document.getElementById('sign-up')
  //     .addEventListener('click', getSignUpForm());
  // }



  // setEventListeners()
  getPeepList();
  exports.ChitterController = ChitterController;
  exports.getPeepList = getPeepList

})(this);