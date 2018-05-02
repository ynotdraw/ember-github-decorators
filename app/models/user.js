import { attr, hasMany } from '@ember-decorators/data';
import Model from 'ember-data/model';

export default class User extends Model {
  @attr('string') name;
  @attr('number') publicRepos;
  @attr('string') avatarUrl;
  @attr('string') url;
  @attr('string') company;
  @attr('string') blog;
  @attr('string') avatarUrl;
  @attr('string') location;
  @hasMany('repositories') repositories;
}
