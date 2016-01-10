define('gyak09/pods/raktarak/new-aru/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            ujAru: function ujAru(formData) {
                var aru = this.store.createRecord('aru', Object.assign({
                    location: 'location',
                    description: 'description'
                }, formData));

                this.store.queryRecord('raktar', { filter: { nev: formData.raktar } }).then(function (found) {
                    aru.set('raktar', found[0]);
                    aru.save();
                });

                this.transitionToRoute('raktarak.list');
            }
        }
    });

});