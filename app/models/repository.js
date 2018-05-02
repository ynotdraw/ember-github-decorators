import { attr } from '@ember-decorators/data';
import Model from 'ember-data/model';

export default class Repository extends Model {
  @attr('string') fullName;
  @attr('string') language;
  @attr('number') stargazersCount;
  @attr('string') htmlUrl;
}
