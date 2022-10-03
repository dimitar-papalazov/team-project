import Model from './Model.js'

export default class UsersProgress extends Model {
  constructor(user_id, progress_id) {
    super()
    this.user_id = user_id
    this.progress_id = progress_id
  }
}