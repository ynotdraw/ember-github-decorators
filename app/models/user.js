import { attr, hasMany } from '@ember-decorators/data';
import Model from 'ember-data/model';

export default class User extends Model {
  @attr('string') avatarUrl;
  @attr('string') blog;
  @attr('string') company;
  @attr('string') location;
  @attr('string') login;
  @attr('string') name;
  @attr('number') publicRepos;
  @attr('string') url;

  @hasMany('repositories') repositories;
}

// COMPARISON PRIOR TO UPGRADE

// export default Model.extend({
//   avatarUrl: attr('string'),
//
//   ...
//
//   repositories: hasMany('repositories', { async: false }),
// });
