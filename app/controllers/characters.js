import Ember from 'ember';

export default Ember.Controller.extend({
  all_ratings: Ember.computed.mapBy('model.characters', 'rating'),
  sum_rating: Ember.computed.sum('all_ratings'),
  top_rating: Ember.computed('all_ratings', function(){
    return this.get('all_ratings').length * 10;
  }),

  actions: {
    addCharacter() {
      this.store.createRecord('character', {
        name: this.get('newCharacter'),
        description: this.get('newDescription'),
        team: this.get('newTeam'),
        leader: this.get('newCharacterLeader'),
        canBattle: true,
        rating: 5
      }).save()

      this.set('newCharacter', '');
      this.set('newDescription', '');
      this.set('newTeam', '');
      this.set('newCharacterLeader', false);
    },
  }
});
