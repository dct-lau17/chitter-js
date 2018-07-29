
describe("ChitterController", function(){

  var peeplistview, chittercontroller, peeplistMock, div


  beforeEach(function(){
    div = document.createElement('DIV');
    div.setAttribute('id', 'peep-list');
    document.body.appendChild(div);

    peeplistMock = [
      {
        "body": "Hello!",
        "created_at": "2018-07-28T19:33:53.350Z",
        "user": {
          "handle": "Coolio"
        },
      }
    ]
    peeplistview =  jasmine.createSpyObj('PeepListView', {
      'toHtml': "hi"
    })
    chittercontroller = new ChitterController(peeplistMock, peeplistview);
  })



  // it("creates a new peepListView", function(){
  //   console.log(chittercontroller.displayHtml())
  //   expect(chittercontroller.displayHtml()).toEqual(true)
  // });


  afterEach(function() {
    document.body.removeChild(div);
  });



})