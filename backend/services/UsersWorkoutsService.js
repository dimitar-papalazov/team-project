import Service from './Service.js';
import UsersWorkouts from '../models/UsersWorkouts.js';

export default class UsersWorkoutsService extends Service {
  constructor() {
    super('users_workouts', UsersWorkouts)
  }
}