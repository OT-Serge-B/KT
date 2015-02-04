var homePage = function() {
    this.yourName = element(by.model('yourName'));
    this.clickForTooltipBox = element(by.css('[popover="Click highlighted areas in the code for explanations."]'));
    this.popUp = element(by.css('[content="Click highlighted areas in the code for explanations."]'));
    this.todoText = element(by.model('todoText'));
    this.addBtn = element(by.css('[value="add"]'));

    this.todoElements = element.all(by.repeater('todo in todos'));
    this.todo = this.todoElements.get(2);
    this.checkbox = this.todo.element(by.model('todo.done'));

    this.isChecked = function (checkedtodo) {
        var chb = checkedtodo.element(by.css('[class="done-true"]'));
        expect(chb.isPresent()).toBe(true);
    };

};

module.exports = new homePage();