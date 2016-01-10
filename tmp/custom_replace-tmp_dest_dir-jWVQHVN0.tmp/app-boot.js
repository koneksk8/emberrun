/* jshint ignore:start */

define('undefined/config/environment', ['ember'], function(Ember) {
  var prefix = 'undefined';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("undefined/tests/test-helper");
} else {
  require("undefined/app")["default"].create({});
}

/* jshint ignore:end */
