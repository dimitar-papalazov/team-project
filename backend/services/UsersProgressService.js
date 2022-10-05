import Service from './Service.js';
import UsersProgress from '../models/UsersProgress.js';

export default class UsersProgressService extends Service {
  constructor() {
    super('users_progresses', UsersProgress)
  }
}