import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),

    actions: {
        submit: function submit() {
            if (!this.validate()) {
                return;
            }

            this.get('onSave')({
                location: this.$('#location').val(),
                description: this.$('#description').val(),
                raktar: this.$('#raktar').val()
            });
        }
    },

    validate: function validate() {

        //var raktar = this.$('#raktar').val();
        var location = this.$('#location').val();
        var description = this.$('#description').val();

        this.set('errors.location', location === '' ? 'Lokésön kötelező' : '');
        this.set('errors.description', description === '' ? 'Leírás kötelező' : '');

        return this.get('errors.location') === '' && this.get('errors.description') === '';
    }
});