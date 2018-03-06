import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      character: this.store.findRecord('character', params.character),
      teams: this.store.findAll('team')
    });
  }
});
