define('gyak09/pods/components/raktar-arukeszlet/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteAru: function deleteAru(aru) {
                aru.deleteRecord();
                aru.save();
            }
        }
    });

});