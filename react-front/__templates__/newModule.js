module.exports = {
  description: 'generate new module',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'module name:',
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'name is required';
      }
    },
  ], // array of inquirer prompts
  actions: [
    {
      type: 'add',
      path: 'src/app/{{name}}/index.js',
      templateFile: '__templates__/newModule/index.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/actions.js',
      templateFile: '__templates__/newModule/actions.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/actionTypes.js',
      templateFile: '__templates__/newModule/actionTypes.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/constants.js',
      templateFile: '__templates__/newModule/constants.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/helpers.js',
      templateFile: '__templates__/newModule/helpers.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/reducer.js',
      templateFile: '__templates__/newModule/reducer.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/routes.js',
      templateFile: '__templates__/newModule/routes.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/sagas.js',
      templateFile: '__templates__/newModule/sagas.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/selectors.js',
      templateFile: '__templates__/newModule/selectors.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/components/index.js',
      templateFile: '__templates__/newModule/components/index.hbs'
    },
    {
      type: 'add',
      path: 'src/app/{{name}}/screens/index.js',
      templateFile: '__templates__/newModule/screens/index.hbs'
    },
    {
      type: 'modify',
      path: 'src/app/reducer.js',
      pattern: /(\/\*__IMPORT_MODULE__\*\/)/gi,
      template: "import {{name}} from './{{name}}';\n$1"
    },
    {
      type: 'modify',
      path: 'src/app/reducer.js',
      pattern: /(\/\*__IMPORT_REDUCER__\*\/)/gi,
      template: "\t[{{name}}.constants.NAME]: {{name}}.reducer,\n$1"
    },
    {
      type: 'modify',
      path: 'src/app/sagas.js',
      pattern: /(\/\*__IMPORT_MODULE__\*\/)/gi,
      template: "import {{name}} from './{{name}}';\n$1"
    },
    {
      type: 'modify',
      path: 'src/app/sagas.js',
      pattern: /(\/\*__IMPORT_SAGAS__\*\/)/gi,
      template: "\t...{{name}}.sagas,\n$1"
    },
    {
      type: 'modify',
      path: 'src/app/routes.js',
      pattern: /(\/\*__IMPORT_MODULE__\*\/)/gi,
      template: "import {{name}} from './{{name}}';\n$1"
    },
    {
      type: 'modify',
      path: 'src/app/routes.js',
      pattern: /(\/\*__IMPORT_MODULE_ROUTES__\*\/)/gi,
      template: "\t...{{name}}.routes,\n$1"
    },
  ]  // array of actions
}