import DS from 'ember-data';

const {
  attr,
  hasMany,
  Model
} = DS;

export default Model.extend({
  name: attr('string'),
  publicRepos: attr('number'),
  avatarUrl: attr('string'),
  url: attr('string'),
  company: attr('string'),
  blog: attr('string'),
  location: attr('string'),
  repositories: hasMany('repositories')
});
