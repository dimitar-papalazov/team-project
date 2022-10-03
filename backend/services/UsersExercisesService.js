import Service from './Service.js';
import UsersExercises from '../models/UsersExercises.js';

export default class UsersExercisesService extends Service {
  constructor() {
    super('users_exercises', UsersExercises)
  }
}