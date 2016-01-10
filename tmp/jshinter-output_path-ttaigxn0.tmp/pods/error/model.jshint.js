QUnit.module('JSHint - pods/error');
QUnit.test('pods/error/model.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/error/model.js should pass jshint.\npods/error/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/error/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/error/model.js: line 36, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
