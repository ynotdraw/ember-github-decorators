import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  fullName: attr('string'),
  language: attr('string'),
  stargazersCount: attr('number'),
  htmlUrl: attr('string')
});
