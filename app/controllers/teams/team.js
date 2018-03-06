import Ember from 'ember';

export default Ember.Controller.extend({
  
  teamlessCharacters: Ember.computed.setDiff('model.characters', 'model.team.characters'),

  actions: {
    addCharacterToTeam(char, team){
      team.get('characters').addObject(char);
      char.save().then(()=>{
        team.save();
      })
    },
    removeCharacterFromTeam(char, team) {
      team.get('characters').removeObject(char);
      char.save().then(()=>{
        team.save();
      })
    }
  }
});
