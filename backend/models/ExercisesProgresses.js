import Model from './Model.js'

export default class ExercisesProgresses extends Model {
  constructor(progress_id, exercise_id) {
    super()
    this.progress_id = progress_id
    this.exercise_id = exercise_id
  }
}