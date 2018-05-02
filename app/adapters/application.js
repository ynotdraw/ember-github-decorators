import RESTAdapter from 'ember-data/adapters/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host='https://api.github.com';
}
