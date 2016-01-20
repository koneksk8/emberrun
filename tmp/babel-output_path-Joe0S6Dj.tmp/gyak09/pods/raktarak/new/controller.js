import Ember from 'ember';

export default Ember.Controller.extend({
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