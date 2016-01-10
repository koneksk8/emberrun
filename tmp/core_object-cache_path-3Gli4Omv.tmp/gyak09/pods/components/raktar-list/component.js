define('gyak09/pods/components/raktar-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteRaktar: function deleteRaktar(raktar) {
                //console.log(raktar);
                raktar.deleteRecord();
                raktar.save();
            }
        }
    });

});