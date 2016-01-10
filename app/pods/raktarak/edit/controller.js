import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRaktar(formData) {
            // console.log(formData);
            let raktar = this.get('model');
            console.log(raktar);
            raktar.setProperties(formData);
            return raktar.save().then(() => {
                this.transitionToRoute('raktarak.list');
            });
        }
    }
});
