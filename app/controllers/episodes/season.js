import Ember from 'ember';

export default Ember.Controller.extend({
  episodes: Ember.computed.reads('model.episodes'),
  season: Ember.computed.reads('model.season'),

  filteredEpisodes: Ember.computed('{season,episodes.[]}', {
    get() {
      let season = parseInt(this.get('season'));
      let episodes = this.get('episodes') || [];

      return episodes.filterBy('season', season);
    }
  })
});
