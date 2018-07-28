'use strict';
describe('Peeps', function(){
  var peepListView;
  var peeplist;

  beforeEach(function(){
    peeplist = [
      {
        "body": "Hello!",
        "created_at": "2018-07-28T19:33:53.350Z",
        "user": {
          "handle": "coolio"
        },
      }
    ]
    peepListView = new PeepListView(peeplist)
  })

    it("prints the body out with <p> tags", function() {
      expect(peepListView.toHtml()).toEqual('<p>Hello!</p>');
    });


});