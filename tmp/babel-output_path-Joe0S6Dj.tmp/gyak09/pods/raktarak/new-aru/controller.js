import Ember from 'ember';

export default Ember.Controller.extend({
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