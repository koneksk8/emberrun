import DS from 'ember-data';

export default DS.Model.extend({
    nev: DS.attr('string'),
    aruk: DS.hasMany('aru', { async: true })
});