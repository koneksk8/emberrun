import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                nev: this.$('#nev').val(),
            });
        }
    },
    
    validate() {
        var nev = this.$('#nev').val();
        
        this.set('errors.nev', nev === '' ? 'Név kötelező' : '');
        
        return this.get('errors.nev') === '';
    }
});
