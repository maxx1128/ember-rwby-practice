import Ember from 'ember';

export default Ember.Controller.extend({
  seasons: Ember.computed.mapBy('model', 'season'),
  different_seasons: Ember.computed('seasons', function() {
    return [...new Set(this.get('seasons'))];
  })
});
