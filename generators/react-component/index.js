const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "string",
        name: "name",
        message: "Component name",
        validate: function(value) {
          const regex = /^([A-Z][a-z0-9]+)+$/;
          return regex.test(value) || "Name must be PascalCase";
        }
      }
    ]);

    this.answers = {
      ...this.answers,
      className: this.answers.name[0].toLowerCase() + this.answers.name.substr(1)
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component.jsx'),
      this.destinationPath(`${this.answers.name}/${this.answers.name}.jsx`),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('component.module.scss'),
      this.destinationPath(`${this.answers.name}/${this.answers.name}.module.scss`),
      this.answers
    );
  }
};
