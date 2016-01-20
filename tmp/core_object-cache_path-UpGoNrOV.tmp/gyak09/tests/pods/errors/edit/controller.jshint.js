define('gyak09/tests/pods/errors/edit/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/errors/edit');
  QUnit.test('pods/errors/edit/controller.js should pass jshint', function(assert) { 
    assert.ok(false, 'pods/errors/edit/controller.js should pass jshint.\npods/errors/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/errors/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/errors/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/errors/edit/controller.js: line 7, col 13, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/errors/edit/controller.js: line 10, col 39, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});