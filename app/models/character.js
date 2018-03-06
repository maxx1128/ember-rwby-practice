import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  leader: DS.attr('boolean'),
  canBattle: DS.attr('boolean'),
  rating: DS.attr('number'),
  team: DS.belongsTo(),

  editing_name: DS.attr('boolean', {
    defaultValue() { return false; }
  }),
  editing_team: DS.attr('boolean', {
    defaultValue() { return false; }
  })
});
