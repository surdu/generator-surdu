const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "string",
        name: "name",
        message: "Project name"
      },
      {
        type: "string",
        name: "domain",
        message: "Project web domain"
      },
      {
        type: "string",
        name: "email",
        message: "e-mail"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      this.answers,
      null,
      { globOptions: { dot: true } }
    );

    this.fs.copy(
      this.destinationPath('.env.example'),
      this.destinationPath('.env'),
      { globOptions: { dot: true } }
    );
  }
};
