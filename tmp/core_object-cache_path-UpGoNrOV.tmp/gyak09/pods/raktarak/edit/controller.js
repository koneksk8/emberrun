define('gyak09/pods/raktarak/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            modifyRaktar: function modifyRaktar(formData) {
                var _this = this;

                // console.log(formData);
                var raktar = this.get('model');
                console.log(raktar);
                raktar.setProperties(formData);
                return raktar.save().then(function () {
                    _this.transitionToRoute('raktarak.list');
                });
            }
        }
    });

});