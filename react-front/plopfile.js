const newModule = require('./__templates__/newModule');
const newScreen = require('./__templates__/newScreen');
const newService = require('./__templates__/newService');
const addServiceMethod = require('./__templates__/addServiceMethod');
const newAsyncAction = require('./__templates__/newAsyncAction');

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('new service', newService);
  plop.setGenerator('add service method', addServiceMethod);
  plop.setGenerator('new screen', newScreen);
  plop.setGenerator('new module', newModule);
  plop.setGenerator('new async action', newAsyncAction);
};
