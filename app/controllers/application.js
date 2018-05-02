import { alias } from '@ember-decorators/object/computed';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @alias('model') user;
}
