
function AngularToDoPage() {
  var input = element(by.model('todoList.todoText'));
  var addButton = element(by.buttonText('add'));
  var todoListItems = element.all(by.repeater('todo in todoList.todos'));
  var todoListCheckboxes = element.all(by.model('todo.done'));
  var remainingField = element(by.binding('todoList.remaining()'));
  var archiveButton = element(by.linkText('archive'));


  this.go = function() {
    browser.get('http://www.angularjs.org');
  };

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



function ToDoList() {
    var angulartodopage = new AngularToDoPage();

    this.addItem = function (name) {
        angulartodopage.enterText(name);
        angulartodopage.clickAddButton();
        
    }

    this.getCount = function () {
        return angulartodopage.todoListGetCount();
    }

    this.getItemName = function (index) {
        return angulartodopage.todoListGetItem(index);
    }
 
    this.getRemainingFieldValue = function () {
        return angulartodopage.getRemainingField();
    }

    




}













var inputItemName = 'item1';




describe('Angular homepage', function() {

    /*
    it('Adding new item', function() {
        var angulartodopage = new AngularToDoPage();
        var todooList = new ToDoList();

        angulartodopage.go();

        todooList.addItem(inputItemName);

        



        expect(todooList.getCount()).toEqual(3);

        expect(todooList.getItemName(0)).toEqual('learn angular');

        expect(todooList.getItemName(1)).toEqual('build an angular app');

        expect(todooList.getItemName(2)).toEqual(inputItemName);

        expect(todooList.getRemainingFieldValue()).toEqual('2 of 3 remaining');

       


    })
    */

    it('Archiving items', function () {
        var angulartodopage = new AngularToDoPage();
        var todooList = new ToDoList();

        angulartodopage.go();

        var checkbox = element.all(by.model('todo.done')).get(1);

        //checkbox.isEnabled().then(function (result) { if (result) checkbox.click() });


        //browser.sleep(7000);

        
        
        expect(checkbox.isEnabled()).toEqual(true);

        
    })
    


    









    

  
    });










