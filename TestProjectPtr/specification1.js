describe('test angularjs page', function(){
    it('get controls, click/text them and validate', function () {
        //1.open https://angularjs.org
        browser.get('https://angularjs.org');

        var page = require('./PageObj.js');

        //2. assert that YourName element is present on the page
        expect(page.yourName.isPresent()).toBe(true);

        //3. assert that Hover tooltip is present after clicking on the 'click me' box
        page.clickForTooltipBox.click();
        expect(page.popUp.isPresent()).toBe(true);

        //4.enter the text into the input box under Todo section and click add
        page.todoText.sendKeys('new todo');
        page.addBtn.click();
        //validate added item in todos
        expect(page.todo.getText()).toEqual('new todo');

        //5.select newly added checkbox created from the previous step
        page.checkbox.click();

        //6.verify that selection box is checked from the previous step
        page.isChecked(page.todo);
    });
});
