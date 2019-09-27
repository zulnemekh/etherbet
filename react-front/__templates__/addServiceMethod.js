module.exports = {
    description: 'add service method',
    prompts: [
      {
        type: 'input',
        name: 'service',
        message: 'service name:',
        validate: function (value) {
          if ((/.+/).test(value)) { return true; }
          return 'service name is required';
        }
      },
      {
        type: 'input',
        name: 'method',
        message: 'method name:',
        validate: function (value) {
          if ((/.+/).test(value)) { return true; }
          return 'method name is required';
        }
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'modify',
        path: 'src/services/{{lowerCase service}}.js',
        pattern: /(\/\*__ADD_SERVICE_METHOD__\*\/)/gi,
        templateFile: '__templates__/addServiceMethod/addService.hbs',
      },
    ]  // array of actions
  }