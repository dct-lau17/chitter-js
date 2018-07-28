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
          "handle": "Coolio"
        },
      }
    ]
    peepListView = new PeepListView(peeplist)
  })

  describe('showing the peep list', function(){

    it("displays the peeps", function() {
      console.log(peepListView.toHtml())
      expect(peepListView.toHtml()).toMatch(/Hello!/);
    });

    it("displays the time", function() {
      console.log(peepListView.toHtml())
      expect(peepListView.toHtml()).toContain('Sat Jul 28 2018 20:33:53 GMT+0100 (British Summer Time)');
    });

    it("displays the owner of the peep", function() {
      console.log(peepListView.toHtml())
      expect(peepListView.toHtml()).toContain('Coolio');
    });


  })


});