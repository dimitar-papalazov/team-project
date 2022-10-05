import Model from './Model.js';

export default class Progress extends Model {
  constructor(config) {
    super()
    this.value = config.value
    this.date = config.date
    this.type = config.type
  } 
}