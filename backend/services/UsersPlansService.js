import Service from './Service.js';
import UsersPlans from '../models/UsersPlans.js';

export default class UsersPlansService extends Service {
  constructor() {
    super('users_plans', UsersPlans)
  }
}