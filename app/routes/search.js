import { action } from '@ember-decorators/object';
import { set } from '@ember/object';
import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  queryParams = {
    account: {
      refreshModel: true
    }
  };

  model({ account }) {
    const loginName = account ? account : 'emberjs';

    return this.store.findRecord('user', loginName);
  }

  @action
  willTransition() {
    set(this, 'controller.searchInput', '');
  }
}

// COMPARISON PRIOR TO UPGRADE

// import Route from '@ember/routing/route';
//
// export default Route.extend({
//   queryParams: {
//     account: {
//       refreshModel: true
//     }
//   },
//
//   model({ account }) {
//     const loginName = account ? account : 'emberjs';
//
//     return this.store.findRecord('user', loginName);
//   },
//
//   actions: {
//      willTransition() {
//        set(this, 'controller.searchInput', '');
//      }
//   }
// });

