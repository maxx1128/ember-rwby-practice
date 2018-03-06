import DS from 'ember-data';

export default DS.Model.extend({
  episode: DS.attr('number'),
  season: DS.attr('number'),
  chapter: DS.attr('number'),
  release_date: DS.attr('string'),
  time: DS.attr('string'),
  title: DS.attr('string'),
  rating: DS.attr('number'),
  description: DS.attr('string')
});
