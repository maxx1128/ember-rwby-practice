import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      characters: this.store.findAll('character'),
      teams: this.store.findAll('team')
    });
  }
});
