import Service from './Service.js'
import Workout from '../models/Workout.js'

export default class WorkoutService extends Service {
  constructor() {
    super('workouts', Workout)
    this.TAG = `[ WorkoutService ]`
  }
}