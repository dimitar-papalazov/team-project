import Service from './Service.js';
import ExercisesWorkouts from '../models/ExercisesWorkouts.js'

export default class ExercisesWorkoutsService extends Service {
  constructor() {
    super('exercises_workouts', ExercisesWorkouts)
  }
}