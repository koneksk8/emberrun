define('gyak09/tests/pods/errors/list/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/errors/list');
  QUnit.test('pods/errors/list/route.js should pass jshint', function(assert) { 
    assert.ok(false, 'pods/errors/list/route.js should pass jshint.\npods/errors/list/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/errors/list/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/errors/list/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
  });

});