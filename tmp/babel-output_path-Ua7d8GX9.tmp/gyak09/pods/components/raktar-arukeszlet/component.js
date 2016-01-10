import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        torolAru: function torolAru(aru) {
            aru.deleteRecord();
            aru.save();
        }
    }
});