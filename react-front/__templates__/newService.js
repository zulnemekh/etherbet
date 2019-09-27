module.exports = {
  description: 'generate new service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'module name:',
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'module name is required';
      }
    },
  ], // array of inquirer prompts
  actions: [
    {
      type: 'add',
      path: 'src/services/{{lowerCase name}}.js',
      templateFile: '__templates__/newService/index.hbs'
    },
  ]  // array of actions
}