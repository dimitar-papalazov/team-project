import Service from './Service.js';
import UsersProgress from '../models/UsersProgress.js';

export default class UsersProgressService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersProgress, 
        key: 'user_id', 
        service: new UsersProgressService()
      }
    ]

    super('users_progresses', UsersProgress, relations)
  }
}