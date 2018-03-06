import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('characters', function(){
    this.route('character', { path: ':character' }, function() {
      this.route('edit');
    });
    this.route('character.edit', { path: ':character/edit' });
  });
  this.route('about');
  this.route('episodes', function() {
    this.route('season', { path: ':season' }, function() {
      this.route('episode', { path: ':episode' });
    });
  });
  this.route('teams', function() {
    this.route('team', { path: ':team' });
  });
});

export default Router;
