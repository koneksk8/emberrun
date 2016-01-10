define('gyak09/pods/raktarak/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newRaktar: function newRaktar(formData) {
                console.log(formData);
                // formData.status = 'new';
                // formData.date = Date.now().toLocaleString();
                var raktar = this.store.createRecord('raktar', Object.assign({
                    nev: 'nev'
                }, formData));
                raktar.save();
                this.transitionToRoute('raktarak.list');
            }
        }
    });

});