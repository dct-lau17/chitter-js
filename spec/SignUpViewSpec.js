'use strict';
describe('SignUp', function() {

  var signUpView;

  beforeEach(function(){
    signUpView = new SignUpView()
  })

  it('displays a sign up button', function(){
    expect(signUpView.displayButton()).toContain('<input type=\"submit\" value=\"sign up\"/>')
  })

  it('displays a sign up form', function(){
    expect(signUpView.signUpForm()).toContain("<input type=\"text\" name=\"handler\" placeholder=\"Handler\"/><input type=\"text\" name=\"password\" placeholder=\"Password\"/>")
  })

})
