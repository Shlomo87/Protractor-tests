
function WireUpBackendPage() {

    this.projects = element.all(by.repeater('project in projectList.projects'));
    var seacrhField = element(by.model('projectList.search'));
    var addProjectButton = element(by.className('icon-plus-sign'));
    var inputName = element(by.model('editProject.project.name'));
    var inputWebsite = element(by.model('editProject.project.site'));
    var inputDescription = element(by.model('editProject.project.description'));
    var saveButton = element(by.buttonText('Save'));
    this.linkCappucino = element(by.linkText("Cappucino"));

    this.getProjectsCount = function () {
        return projects.count();
    }

    this.getProjectNameDesciptionByIndex = function (index) {
        return projects.get(index).getText();
    }

    this.enterSearch = function (text) {
        seacrhField.sendKeys(text);
    }

    this.clickAddProjectButton = function () {
        addProjectButton.click();
    }

    this.enterProjectName = function (text) {
        inputName.sendKeys(text);
    }

    this.enterProjectWebsite = function (text) {
        inputWebsite.sendKeys(text);
    }

    this.enterProjectDescription = function (text) {
        inputDescription.sendKeys(text);
    }

    this.clickSaveButton = function () {
        saveButton.click();
    }

    



    




}

function Project() {
    var wireupbackendpage = new WireUpBackendPage();

    this.getCount = function () {
        return wireupbackendpage.projects.count();        
    }

    this.getNameDesciption = function (index) {
        return wireupbackendpage.projects.get(index).getText();
    }

    this.enterSearchText = function (text) {
        wireupbackendpage.enterSearch(text);
    }

    this.add = function (name, website, description) {
        wireupbackendpage.clickAddProjectButton();
        wireupbackendpage.enterProjectName(name);
        wireupbackendpage.enterProjectWebsite(website);
        wireupbackendpage.enterProjectDescription(description);
        wireupbackendpage.clickSaveButton();
    }

    this.clickCappucinoLink = function () {
        wireupbackendpage.linkCappucino.click();
    }

            




}


var projectName = 'Project1';
var projectWebsite = 'http://www.cappuccino-project.org/';
var projectDescription = 'desciption';

beforeEach(function () {
    browser.get('http://www.angularjs.org');
    browser.wait(function () {
        return element(by.linkText("Cappucino")).isPresent();
    }, 10000);
    
});


describe('Wire up a Backend', function () {

    it('Go to project site', function () {

        var project = new Project();
        var wireupbackendpage = new WireUpBackendPage();

        /*
        browser.wait(function () {
            return wireupbackendpage.linkCappucino.isPresent();
        }, 10000);
        */

        
        

        

        
        
        
        expect(wireupbackendpage.projects.get(3).isPresent()).toEqual(true);

    })   
    







    
    
    
    
    


        /*
        var projects = element.all(by.repeater('project in projectList.projects'));
        var seacrhField = element(by.model('projectList.search'));
        //var addProjectButton = element(by.className('icon-plus-sign'));
        editProjectButton = element.all(by.className('icon-pencil'));

        editProjectButton.get(5).click();

        browser.sleep(5000);
    
        var a = element(by.buttonText('Save'));
        var a = element(by.buttonText('Delete'));
    
    var a = element(by.model('editProject.project.description'));
        */

        // Edit - Name, Website, Description fields
        /*
        var editProject = element.all(by.className('icon-pencil'));

        editProject.get(6).click();

        browser.sleep(2000);

        var inputWebsite = element(by.model('editProject.project.site'));
        inputWebsite.sendKeys('aaaa');
        browser.sleep(8000);
        expect(inputWebsite.getAttribute('value')).toEqual(true);
       
        var inputName = element(by.model('editProject.project.name'));
        inputName.sendKeys('aaaa');
        browser.sleep(8000);
        expect(inputName.getAttribute('value')).toEqual(true);
        
        var inputDescription = element(by.model('editProject.project.description'));
        inputDescription.sendKeys('aaaa');
        browser.sleep(8000);
        expect(inputDescription.getAttribute('value')).toEqual(true);
       

        var link = element(by.linkText("Cappucino"));

        link.click();

        
        browser.getAllWindowHandles().then(function (handles) {
            var secondWindowHandle = handles[1];
            var firstWindowHandle = handles[0];

            browser.switchTo().window(firstWindowHandle);
            browser.sleep(5000);
            browser.switchTo().window(secondWindowHandle);
        });
                          


        browser.sleep(5000);

        expect(browser.driver.getCurrentUrl()).toEqual(true);

        */



    /*

    it('Search by project name', function () {

        var project = new Project();

        project.add(projectName, projectWebsite, projectDescription);

        browser.sleep(3000);
        
        expect(project.getCount()).toEqual(13);
        expect(project.getNameDesciption(9)).toEqual(projectName + ' ' + projectDescription);

    })

    it('Search by project name', function () {

        var project = new Project();

        project.enterSearchText('Angular');

        expect(project.getCount()).toEqual(2);
        expect(project.getNameDesciption(1)).toEqual('AngularJS HTML enhanced for web apps!');

    })

    it('Search by project description', function () {

        var project = new Project();

        project.enterSearchText('Model');

        expect(project.getCount()).toEqual(1);
        expect(project.getNameDesciption(0)).toEqual('Backbone Models for your apps.');

    })

    it('Check projects list', function () {

        var project = new Project();
        
        expect(project.getCount()).toEqual(12);
        expect(project.getNameDesciption(4)).toEqual('Ember Ambitious web apps.');
        expect(project.getNameDesciption(9)).toEqual('React A JavaScript library for building user interfaces.');
 
    })

    it('Go to project site', function () {

        var project = new Project();

        project.clickCappucinoLink();

        browser.sleep(3000);

        browser.getAllWindowHandles().then(function (windowHandles) {
            browser.switchTo().window(windowHandles[1]);
        });
        
        expect(browser.driver.getCurrentUrl()).toEqual('http://www.cappuccino-project.org/');

    }) 

    */



    


    });










