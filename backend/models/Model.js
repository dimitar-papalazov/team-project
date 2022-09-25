export default class Model {
  constructor() { }

  dto() {
    const obj = { ...this }
    obj.TAG = undefined

    return { ...obj }
  }
}