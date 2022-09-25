import Service from './Service.js'
import Plan from '../models/Plan.js'

export default class PlanService extends Service {
  constructor() {
    super('plans', Plan)
    this.TAG = `[ PlanService ]`
  }
}