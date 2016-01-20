define('gyak09/pods/raktar/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        nev: DS['default'].attr('string'),
        aruk: DS['default'].hasMany('aru', { async: true })
    });

});