import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteRaktar(raktar) {
            //console.log(raktar);
            raktar.deleteRecord();
            raktar.save();
        }
    }
});
