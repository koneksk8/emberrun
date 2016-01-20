define('gyak09/pods/aru/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        location: DS['default'].attr('string'),
        description: DS['default'].attr('string'),
        raktar: DS['default'].belongsTo('raktar', { async: true })
    });

});