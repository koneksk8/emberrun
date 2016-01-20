import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://emberapi-koneksk8.c9users.io',
    namespace: ''
});