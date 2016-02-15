


beforeEach(function () {
    browser.get('http://www.angularjs.org');
});


describe('Angular homepage', function() {

    it('Adding 1 new item', function () {

        browser.sleep(5000);

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
        */

        var link = element(by.linkText("Cappucino"));

        link.click();

        /*
        browser.getAllWindowHandles().then(function (handles) {
            var secondWindowHandle = handles[1];
            var firstWindowHandle = handles[0];

            browser.switchTo().window(firstWindowHandle);
            browser.sleep(5000);
            browser.switchTo().window(secondWindowHandle);
        });
         */                   




        browser.sleep(5000);

        expect(browser.driver.getCurrentUrl()).toEqual(true);



    })

    

    });










