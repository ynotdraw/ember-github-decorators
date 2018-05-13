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
//   }
// });

