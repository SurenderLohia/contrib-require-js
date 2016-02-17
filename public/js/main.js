require.config({
  baseUrl: 'js'
});

require(['module_1', 'module_2', 'module_3'], function(module1, module2, module3) {
  window.app = window.app || {};

  window.app.getInfo = module1.getInfo;

  window.app.getInfo();

  console.log('Module 1 name: ' + module1.name);
});