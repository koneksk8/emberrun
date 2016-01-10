import Ember from 'ember';

export default Ember.Component.extend({
     actions: {
        deleteAru(aru) {
            aru.deleteRecord();
            aru.save();
        }
    }
});
