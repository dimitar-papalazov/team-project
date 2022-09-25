import Exercise from '../models/Exercise.js'
import ExerciseService from '../services/ExerciseService.js'
import Controller from './Controller.js'

export default class ExerciseController extends Controller {
  constructor() {
    super(new ExerciseService(), Exercise)
    this.TAG = `[ ExerciseController ]`
  }
}