define('gyak09/pods/components/new-aru-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        errors: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    location: this.$('#location').val(),
                    description: this.$('#description').val()
                });
            }
        },

        validate: function validate() {

            var location = this.$('#location').val();
            var description = this.$('#description').val();

            this.set('errors.location', location === '' ? 'Lokésön kötelező' : '');
            this.set('errors.description', description === '' ? 'Leírás kötelező' : '');

            return this.get('errors.location') === '' && this.get('errors.description') === '';
        }
    });

});