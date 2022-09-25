import Service from './Service.js'
import Exercise from '../models/Exercise.js'

export default class ExerciseService extends Service {
  constructor() {
    super('exercises', Exercise)
    this.TAG = `[ ExerciseService ]`
  }
}