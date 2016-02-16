


beforeEach(function () {
    browser.get('http://www.angularjs.org');
});


describe('Wire up a Backend', function () {

    it('Wire up a Backend', function () {

        browser.sleep(5000);


        var projects = element.all(by.repeater('project in projectList.projects'));
        var seacrhField = element(by.model('projectList.search'));
        //var addProjectButton = element(by.className('icon-plus-sign'));
        editProjectButton = element.all(by.className('icon-pencil'));

        editProjectButton.get(5).click();

        browser.sleep(5000);
        /*
        var a = element(by.buttonText('Save'));
        var a = element(by.buttonText('Delete'));
        */

        var a = element(by.model('editProject.project.description'));

        

        

        expect(a.getText()).toEqual(true);
     

    })

   

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



    


    });










