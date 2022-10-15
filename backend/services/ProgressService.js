import Service from './Service.js'
import UsersProgressService from './UsersProgressService.js'
import ExercisesProgressesService from './ExercisesProgressesService.js'
import UserService from './UserService.js'
import ExerciseService from './ExerciseService.js'
import Progress from '../models/Progress.js'
import ExercisesProgresses from '../models/ExercisesProgresses.js'
import UsersProgress from '../models/UsersProgress.js'

export default class ProgressService extends Service {
  constructor() {
    const relations = [
      {
        classType: UsersProgress,
        key: 'user_id',
        service: new UsersProgressService(),
        table: 'users',
        relationService: new UserService()
      },
      {
        classType: ExercisesProgresses,
        key: 'exercise_id',
        service: new ExercisesProgressesService(),
        table: 'exercises',
        relationService: new ExerciseService()
      }
    ]
    
    super('progresses', Progress, relations)
    this.TAG = `[ ProgressService ]`
  }
}