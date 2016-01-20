import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteAru: function deleteAru(aru) {
            aru.deleteRecord();
            aru.save();
        }
    }
});