import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  tag: DS.belongsTo('tag', {async: true}),
  comments: DS.hasMany('comment', {async: true})
});
