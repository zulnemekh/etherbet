module.exports = {
  description: 'generate new module',
  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'module name:',
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'module name is required';
      }
    },
    {
      type: 'input',
      name: 'screen',
      message: 'screen name:',
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'screen name is required';
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'route path:',
    },
  ], // array of inquirer prompts
  actions: [
    {
      type: 'add',
      path: 'src/app/{{module}}/screens/{{pascalCase screen}}/index.js',
      templateFile: '__templates__/newScreen/index.hbs'
    },
    {
      type: 'modify',
      path: 'src/app/{{module}}/screens/index.js',
      pattern: /(\/\*__IMPORT_SCREENS__\*\/)/gi,
      template: "import {{pascalCase screen}} from './{{pascalCase screen}}';\n$1\r"
    },
    {
      type: 'modify',
      path: 'src/app/{{module}}/screens/index.js',
      pattern: /(\/\*__EXPORT_SCREENS__\*\/)/gi,
      template: "\t{{pascalCase screen}},\n$1\r"
    },
    {
      type: 'modify',
      path: 'src/app/{{module}}/routes.js',
      pattern: /(\/\*__ADD_ROUTES__\*\/)/gi,
      templateFile: "__templates__/newScreen/routes.hbs"
    },
  ]  // array of actions
}