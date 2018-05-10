import { assert } from '@ember/debug';
import { computed } from '@ember-decorators/object';
import { get, getProperties } from '@ember/object';
import { tagName, classNames } from '@ember-decorators/component';
import Component from '@ember/component';

@classNames('repository-card p-3')
@tagName('div')
export default class RepositoryCard extends Component {
  // TODO: Could try out this argument addon too
  // https://github.com/ember-decorators/argument

  didInsertElement() {
    const {
      name,
      stars,
      forks
    } = getProperties(this, 'name', 'stars', 'forks');

    assert('name is required', name);
    assert('stars must be greater than or equal to 0', stars >= 0);
    assert('forks must be greater than or equal to 0', forks >= 0);
  }

  @computed('stars')
  get starredTheme() {
    const stars = get(this, 'stars');
    return stars > 50 ? 'text-red-light' : 'text-blue-light';
  }
}
