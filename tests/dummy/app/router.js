import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' }, function () {
    this.route('modal');
  });
  this.route('table');
  this.route('panel', function() {
    this.route('inbox');
  });
  this.route('-ui-styleguide', { path: 'styleguide' });
});

export default Router;
