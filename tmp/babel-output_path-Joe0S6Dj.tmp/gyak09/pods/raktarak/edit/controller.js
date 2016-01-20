import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRaktar: function modifyRaktar(formData) {
            var _this = this;

            // console.log(formData);
            var raktar = this.get('model');
            console.log(raktar);
            raktar.setProperties(formData);
            return raktar.save().then(function () {
                _this.transitionToRoute('raktarak.list');
            });
        }
    }
});