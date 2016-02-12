
function AngularToDoPage() {
  var input = element(by.model('todoList.todoText'));
  var addButton = element(by.buttonText('add'));
  var todoListItems = element.all(by.repeater('todo in todoList.todos'));
  var todoListCheckboxes = element.all(by.model('todo.done'));
  var remainingField = element(by.binding('todoList.remaining()'));
  var archiveButton = element(by.linkText('archive'));
 
  this.enterText = function(text) {
    input.sendKeys(text);
  };

  this.clickAddButton = function() {
    addButton.click();
  };

  this.todoListGetCount = function () {
      return todoListItems.count();
  }

  this.todoListGetItem = function (index) {
      return todoListItems.get(index).getText();
  }

  this.todoListClickChecbox = function (index) {
      todoListCheckboxes.get(index).click();
  }

  this.getRemainingField = function () {
      return remainingField.getText();
  }

  this.clickArchiveButton = function () {
      archiveButton.click();
  }

}



function ToDoItem() {
    var angulartodopage = new AngularToDoPage();

    this.add = function (name) {
        angulartodopage.enterText(name);
        angulartodopage.clickAddButton();
        
    }

    this.getCount = function () {
        return angulartodopage.todoListGetCount();
    }

    this.getName = function (index) {
        return angulartodopage.todoListGetItem(index);
    }
 
    this.getRemainingFieldValue = function () {
        return angulartodopage.getRemainingField();
    }

    this.markDone = function (index) {
        angulartodopage.todoListClickChecbox(index);
    }

    this.archive = function () {
        angulartodopage.clickArchiveButton();
    }

}



var inputItemName1 = 'item1';
var inputItemName2 = 'Artifact';
var inputItemName3 = 'item%^&';
var inputItemName4 = 'item >12';
var inputItemName5 = '88item';

beforeEach(function () {
    browser.get('http://www.angularjs.org');
});


describe('Angular homepage', function() {

    it('Adding 1 new item', function () {

        var todoitem = new ToDoItem();

        todoitem.add(inputItemName1);

        expect(todoitem.getCount()).toEqual(3);
        expect(todoitem.getName(0)).toEqual('learn angular');
        expect(todoitem.getName(1)).toEqual('build an angular app');
        expect(todoitem.getName(2)).toEqual(inputItemName1);
        expect(todoitem.getRemainingFieldValue()).toEqual('2 of 3 remaining');

    })

    it('Adding 2 new items', function () {
        
        var todoitem = new ToDoItem();

        todoitem.add(inputItemName4);
        todoitem.add(inputItemName5);
        
        expect(todoitem.getCount()).toEqual(4);
        expect(todoitem.getName(0)).toEqual('learn angular');
        expect(todoitem.getName(1)).toEqual('build an angular app');
        expect(todoitem.getName(2)).toEqual(inputItemName4);
        expect(todoitem.getName(3)).toEqual(inputItemName5);
        expect(todoitem.getRemainingFieldValue()).toEqual('3 of 4 remaining');
         
    })
    

    it('Archiving several items', function () {
        
        var todoitem = new ToDoItem();

        todoitem.add(inputItemName2);
        todoitem.add(inputItemName3);

        todoitem.markDone(2);

        todoitem.archive();

        expect(todoitem.getCount()).toEqual(2);
        expect(todoitem.getName(0)).toEqual('build an angular app');

        expect(todoitem.getName(1)).toEqual(inputItemName3);

        expect(todoitem.getRemainingFieldValue()).toEqual('2 of 2 remaining');

    })

    });










