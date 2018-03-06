import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      episodes: this.store.findAll('episode'),
      season: params.season
    });
  }
});
