function AngularToDo() {
  var input = element(by.model('todoList.todoText'));
  var addButton = element(by.buttonText('add'));

  this.go = function() {
    browser.get('http://www.angularjs.org');
  };

  this.enterText = function(text) {
    input.sendKeys(text);
  };

  this.clickAddButton = function() {
    addButton.click();
  };



}




describe('Angular homepage', function() {

  it('ToDo', function() {
    var angulartodo = new AngularToDo();

    angulartodo.go();

    angulartodo.enterText('item1');
    angulartodo.clickAddButton();

    browser.sleep(8000);

    console.log('aaaaa');

    expect(true);
    });









});
