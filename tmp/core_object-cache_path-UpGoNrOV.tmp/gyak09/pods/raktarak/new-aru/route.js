define('gyak09/pods/raktarak/new-aru/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('raktar');
        }
    });

});