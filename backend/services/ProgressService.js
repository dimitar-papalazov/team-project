import Service from './Service.js'
import Progress from '../models/Progress.js'
import ExercisesProgresses from '../models/ExercisesProgresses.js'

export default class ProgressService extends Service {
  constructor() {
    const relations = [
      {
        classType: UsersProgress,
        key: 'user_id',
        service: new UsersProgressService()
      },
      {
        classType: ExercisesProgresses,
        key: 'exercise_id',
        service: new ExercisesProgresses()
      }
    ]
    
    super('progresses', Progress, relations)
    this.TAG = `[ ProgressService ]`
  }
}