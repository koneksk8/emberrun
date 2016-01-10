define('gyak09/pods/components/new-raktar-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        errors: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    nev: this.$('#nev').val()
                });
            }
        },

        validate: function validate() {
            var nev = this.$('#nev').val();

            this.set('errors.nev', nev === '' ? 'Név kötelező' : '');

            return this.get('errors.nev') === '';
        }
    });

});