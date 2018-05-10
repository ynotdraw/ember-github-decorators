import { assert } from '@ember/debug';
import { computed } from '@ember-decorators/object';
import { tagName, classNames } from '@ember-decorators/component';
import Component from '@ember/component';

@classNames('repository-card p-3')
@tagName('div')
export default class RepositoryCard extends Component {
  // TODO: Could try out this argument addon too
  // https://github.com/ember-decorators/argument

  didInsertElement() {
    super.didInsertElement(...arguments);

    const {
      name,
      stars,
      forks
    } = this;

    assert('name is required', name);
    assert('stars must be greater than or equal to 0', stars >= 0);
    assert('forks must be greater than or equal to 0', forks >= 0);
  }

  @computed('stars')
  get starredTheme() {
    const { stars } = this;
    return stars > 50 ? 'text-red-light' : 'text-blue-light';
  }
}
