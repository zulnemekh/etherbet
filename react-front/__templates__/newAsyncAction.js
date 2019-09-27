module.exports = {
    description: 'add service method',
    prompts: [
      {
        type: 'input',
        name: 'module',
        message: 'module name:',
        validate: function (value) {
          if ((/.+/).test(value)) { return true; }
          return 'service name is required';
        }
      },
      {
        type: 'input',
        name: 'action',
        message: 'action name:',
        validate: function (value) {
          if ((/.+/).test(value)) { return true; }
          return 'action name is required';
        }
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'modify',
        path: 'src/app/{{ module }}/constants.js',
        pattern: /(\/\*__ADD_CONSTANTS__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/constants.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/actionTypes.js',
        pattern: /(\/\*__ADD_ACTION_TYPES__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/actionTypes.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/actions.js',
        pattern: /(\/\*__ADD_ACTION_CREATOR__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/actions.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/sagas.js',
        pattern: /(\/\*__EXPORT_WATCHER_SAGA__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/sagas.export.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/sagas.js',
        pattern: /(\/\*__ADD_WATCHER_SAGA__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/sagas.watcher.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/sagas.js',
        pattern: /(\/\*__ADD_WORKER_SAGA__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/sagas.worker.hbs',
      },
      {
        type: 'modify',
        path: 'src/app/{{ module }}/reducer.js',
        pattern: /(\/\*__ADD_ACTION_HANDLER__\*\/)/gi,
        templateFile: '__templates__/newAsyncAction/reducer.hbs',
      },
    ]  // array of actions
  }