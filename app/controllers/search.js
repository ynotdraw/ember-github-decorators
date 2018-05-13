import { action } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import { service } from '@ember-decorators/service';
import Controller from '@ember/controller';

export default class SearchController extends Controller {
  @service store;

  @alias('model') user;

  queryParams = [ 'account' ]

  searchInput = '';

  @action
  performSearch(value) {
    if (value) {
      this.transitionToRoute('search', { queryParams: { account: value } });
    }
  }
}

// COMPARISON PRIOR TO UPGRADE

// export default Controller.extend({
//   store: service(),
//
//   queryParams: [ 'account' ],
//
//   user: alias('model'),
//
//   searchInput: '',
//
//   actions: {
//     performSearch(value) {
//       if (value) {
//         this.transitionToRoute('search', { queryParams: { account: value } });
//       }
//     }
//   }
// });
