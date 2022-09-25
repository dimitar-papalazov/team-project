import Workout from '../models/Workout.js'
import WorkoutService from '../services/WorkoutService.js'
import Controller from './Controller.js'

export default class WorkoutController extends Controller {
  constructor() {
    super(new WorkoutService(), Workout)
    this.TAG = `[ WorkoutController ]`
  }
}