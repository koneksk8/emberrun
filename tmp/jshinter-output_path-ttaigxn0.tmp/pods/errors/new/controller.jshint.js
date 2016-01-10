QUnit.module('JSHint - pods/errors/new');
QUnit.test('pods/errors/new/controller.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/errors/new/controller.js should pass jshint.\npods/errors/new/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/errors/new/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/errors/new/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
});
