import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.mount('ember-visualization');
  this.mount('bork-bork');
});
export default Router;
