import connection from '../database/connection.js'
import ExercisesProgressesService from './ExercisesProgressesService.js'
import ProgressService from './ProgressService.js'

export default class StatisticService {
  constructor() {
    this.connection = connection
    this.exercisesProgressesService = new ExercisesProgressesService()
    this.progressService = new ProgressService()
  }

  getProgress(exercise_id) {
    return new Promise((resolve, reject) => {
      this.exercisesProgressesService.readAllLike('exercise_id', exercise_id, 'progress_id')
        .then(results => {
          if (!results || !results.length) {
            return reject(results)
          }

          this.progressService.readAll()
            .then(progresses => {
              progresses = progresses.filter(p => results.includes(p.id))
              return resolve(progresses)
            })
            .catch(error => {
              return reject(error)
            })
        })
        .catch(error => {
          return reject(error)
        })
    })
  }
}