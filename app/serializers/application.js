import { decamelize } from '@ember/string';
import JSONSerializer from 'ember-data/serializers/json';

export default class ApplicationSerializer extends JSONSerializer {
  keyForAttribute(key) {
    return decamelize(key);
  }
}
