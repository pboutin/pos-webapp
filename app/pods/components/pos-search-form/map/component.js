import Component from '@ember/component';
import EmberObject from '@ember/object';

const MAP_SERIES = [
  EmberObject.create({name: 'War for the Atlas', id: 'warfortheatlas'}),
  EmberObject.create({name: 'Atlas of Worlds', id: 'atlasofworlds'}),
  EmberObject.create({name: 'The Awakening', id: 'theawakening'}),
  EmberObject.create({name: 'Original', id: 'original'})
];

export default Component.extend({
  mapFilter: null,

  mapSeries: MAP_SERIES,

  mapSeriesSelect(mapSeries) {
    this.set('mapFilter.series', mapSeries ? mapSeries.id : '');
  }
});
