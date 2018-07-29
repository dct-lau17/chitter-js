(function(exports) {

  function SignUpView() {
  };

 SignUpView.prototype.displayButton = function(){
   return [
     "<div id = 'sign-up'>",
     "<form action=\"/users\" method=\"GET\">",
     "<input type=\"submit\" value=\"sign up\"/>",
     "</form>",
     "</div>"
   ].join("")
 };

  SignUpView.prototype.signUpForm = function(){
    return [
      "<div id = 'sign-up'>",
      "<form action=\"/users\" method=\"POST\">",
      "<input type=\"text\" name=\"handler\" placeholder=\"Handler\"/>",
      "<input type=\"text\" name=\"password\" placeholder=\"Password\"/>",
      "<input type=\"submit\" value=\"sign up\"/>",
      "</form>",
      "</div>"
    ].join("")
  };

  exports.SignUpView = SignUpView
})(this);

