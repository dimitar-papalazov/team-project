import Service from './Service.js'
import Plan from '../models/Plan.js'
import UsersPlans from '../models/UsersPlans.js'
import UsersPlansService from './UsersPlansService.js'

export default class PlanService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersPlans, 
        key: 'user_id', 
        service: new UsersPlansService()
      },
    ]
    
    super('plans', Plan, relations)
    this.TAG = `[ PlanService ]`
  }
}