import Service from './Service.js';
import ExercisesProgresses from '../models/ExercisesProgresses.js'

export default class ExercisesProgressesService extends Service {
  constructor() {
    super('exercises_progresses', ExercisesProgresses)
  }
}