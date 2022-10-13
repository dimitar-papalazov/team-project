export default class Model {
  constructor() { }

  dto() {
    const obj = { ...this }
    delete obj.TAG
    delete obj.relations
    
    for (let key of Object.keys(obj)) {
      if (obj[key] === undefined) obj[key] = `NULL`
      else obj[key] = typeof obj[key] === 'number' ? `${obj[key]}` : `'${obj[key]}'`
    }

    return { ...obj }
  }

  static dao = () => { return {} }
}