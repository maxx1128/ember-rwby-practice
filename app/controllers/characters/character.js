import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    attack(char) {
      Ember.set(char, 'canBattle', false);
      char.save();
    },

    heal(char) {
      Ember.set(char, 'canBattle', true);
      char.save();
    }
  }
});
