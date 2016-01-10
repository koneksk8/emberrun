import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('index', { path: '/' });

  this.route('errors', function () {
    this.route('list');
    this.route('new');
    this.route('view', { path: '/:error_id' });
    this.route('edit', { path: '/edit/:error_id' });
  });
});

Router.map(function () {
  this.route('index', { path: '/' });

  this.route('raktarak', function () {
    this.route('list');
    this.route('new');
    this.route('new-aru');
    this.route('view', { path: '/view/:raktar_id' });
    this.route('edit', { path: '/edit/:raktar_id' });
  });
});

export default Router;