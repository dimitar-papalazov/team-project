import Service from './Service.js'
import Workout from '../models/Workout.js'
import UsersWorkoutsService from './UsersWorkoutsService.js'
import WorkoutPlans from '../models/WorkoutsPlans.js'
import UsersWorkouts from '../models/UsersWorkouts.js'
import UserService from './UserService.js'
import PlanService from './PlanService.js'

export default class WorkoutService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersWorkouts, 
        key: 'user_id', 
        service: new UsersWorkoutsService(),
        table: 'users',
        relationService: new UserService()
      },
      { 
        classType: WorkoutPlans, 
        key: 'plan_id', 
        service: new WorkoutPlans(),
        table: 'plans',
        relationService: new PlanService()
      }
    ]

    super('workouts', Workout, relations)
    this.TAG = `[ WorkoutService ]`
  }
}