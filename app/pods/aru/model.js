import DS from 'ember-data';

export default DS.Model.extend({
    location: DS.attr('string'),
    description: DS.attr('string'),
    raktar: DS.belongsTo('raktar', { async: true })
});