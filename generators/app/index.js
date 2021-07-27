const Generator = require('yeoman-generator');
const yeoman = require('yeoman-environment');

module.exports = class extends Generator {
  initializing () {
    this.env = yeoman.createEnv();
  }

  async prompting() {
    this.env.lookup({packagePatterns: "generator-surdu"});
    const generators = this.env.getGeneratorsMeta();

    const choices = Object.keys(generators)
    .map(
      function (generatorName) {
        return generatorName.split(":")[1];
      }
    )
    .filter(
      function (generatorName) {
        return generatorName !== 'app'
      }
    )

    this.answers = await this.prompt([
      {
        type: "list",
        name: "generator",
        message: "Select generator to run",
        choices,
        store: true
      }
    ]);
  }

  async run() {
    await this.env.run(`surdu:${this.answers.generator}`);
  }
};
