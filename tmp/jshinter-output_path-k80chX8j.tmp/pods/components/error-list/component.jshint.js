QUnit.module('JSHint - pods/components/error-list');
QUnit.test('pods/components/error-list/component.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/components/error-list/component.js should pass jshint.\npods/components/error-list/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/error-list/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/error-list/component.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
});
