'use strict';
describe('Peeps', function(){
  var peepListView;
  var peeplistMock;

  beforeEach(function(){
    peeplistMock = [
      {
        "body": "Hello!",
        "created_at": "2018-07-28T19:33:53.350Z",
        "user": {
          "handle": "Coolio"
        }
      },
      {
        "body": "Peep2!",
        "created_at": "2018-08-28T19:33:53.350Z",
        "user": {
          "handle": "DBoy"
        },
      }
    ]
    peepListView = new PeepListView(peeplistMock)
  })

  describe('showing the peep list', function(){

    it("displays the peeps", function() {
      expect(peepListView.toHtml()).toMatch(/Hello!/);
    });

    it("displays the time", function() {
      expect(peepListView.toHtml()).toContain('Sat Jul 28 2018 20:33:53 GMT+0100 (British Summer Time)');
    });

    it("displays the owner of the peep", function() {
      expect(peepListView.toHtml()).toContain('Coolio');
    });

    it("shows multiple peeps", function() {
      console.log(peepListView.toHtml())
      expect(peepListView.toHtml()).toContain('Hello!');
      expect(peepListView.toHtml()).toContain('Peep2!')
    });


  })


});