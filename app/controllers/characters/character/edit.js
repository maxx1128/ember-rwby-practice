import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateName(char) {
      let editing_status = Ember.get(char, 'editing_name');
      
      Ember.set(char, 'editing_name', !editing_status);

      char.save();
      this.transitionToRoute('characters.character', char.id);
    },

    updateTeam(selection) {
      let char = this.get('model.character');
      char.get('team').then((team)=>{
        char.set('team', selection);
        selection.save();
        team.save();
        char.save();
      }); 
    },

    updateRating(char, value) {
      let rating = Ember.get(char, 'rating'),
          new_rating = rating + value;

      if (new_rating >= 0 && new_rating <= 10) {
        Ember.set(char, 'rating', new_rating);
        char.save();
      }
    },

    destroyCharacter(char) {
      char.destroyRecord();
      this.transitionToRoute('characters');
    }
  }
});
