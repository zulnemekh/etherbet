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
      path: 'src/services/{{pascalCase name}}.js',
      templateFile: '__templates__/newService/index.hbs'
    },
    {
      type: 'modify',
      path: 'src/services/index.js',
      pattern: /(\/\*__IMPORT_SERVICE__\*\/)/gi,
      templateFile: '__templates__/newService/service.import.hbs',
    },
    {
      type: 'modify',
      path: 'src/services/index.js',
      pattern: /(\/\*__EXPORT_SERVICE__\*\/)/gi,
      templateFile: '__templates__/newService/service.export.hbs',
    },
  ]  // array of actions
}