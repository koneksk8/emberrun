define('gyak09/pods/components/raktar-arukeszlet/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            torolAru: function torolAru(aru) {
                aru.deleteRecord();
                aru.save();
            }
        }
    });

});