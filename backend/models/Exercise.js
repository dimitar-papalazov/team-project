import Model from './Model.js'

export default class Exercise extends Model {
  constructor(config) {
    super()
    this.TAG = `[ Exercise ]`
    this.name = config.name
    this.sets = config.sets
    this.reps = config.reps // progress
    this.time = config.time // progress
    this.weight = config.weight // progress
    this.intensity = config.intensity // progress
    this.distance = config.distance // progress
    this.goalReps = config.goalReps // number
    this.goalTime = config.goalTime // number
    this.goalWeight = config.goalWeight // number
    this.goalIntensity = config.goalIntensity // number
    this.goalDistance = config.goalDistance // number
    this.url = config.url
    // user
  }
}