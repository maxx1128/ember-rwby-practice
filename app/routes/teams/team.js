import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      team: this.store.findRecord('team', params.team),
      characters: this.store.findAll('character')
    });
  }
});
