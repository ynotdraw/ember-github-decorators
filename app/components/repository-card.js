import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { required } from '@ember-decorators/argument/validation';
import { tagName, classNames } from '@ember-decorators/component';
import { type } from '@ember-decorators/argument/type';
import Component from '@ember/component';

@classNames('repository-card p-3')
@tagName('div')
export default class RepositoryCard extends Component {
  static positionalParams = ['name', 'stars', 'forks'];

  @required
  @argument
  @type('string')
  name = null;

  @required
  @argument
  @type('number')
  stars = 0;

  @required
  @argument
  @type('number')
  forks = 0;

  @computed('stars')
  get starredTheme() {
    const { stars } = this;
    return stars > 50 ? 'text-red-light' : 'text-blue-light';
  }
}

// COMPARISON PRIOR TO UPGRADE

// export default Component.extend({
//  tagName: 'div',
//  classNames: [ 'repository-card', 'p-3' ],
//
//  name: null,
//  stars: 0,
//  forks: 0,
//
//  starredTheme: computed('stars', function() {
//    const { stars } = this;
//    return stars > 50 ? 'text-red-light' : 'text-blue-light';
//  }),
//
//  didInsertElement() {
//    // Validate name, stars, forks
//    const { name, stars, forks } = this;
//    assert('name is required', name);
//    assert('stars must be a number', !isNaN(stars));
//    assert('forks must be a number', !isNaN(forks));
//  }
// });

