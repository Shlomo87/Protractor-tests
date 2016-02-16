


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

   

    });










