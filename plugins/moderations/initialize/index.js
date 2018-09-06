const Sequelize = require('sequelize')
module.exports = (client, message, nt) => {
  const path = '../../../stores/data.db'
  class database {
    constructor(path) {
      this.database = new Sequelize(null, null, null, {
        dialect: 'sqlite',
        storage: path
      })
      this.selector
    }
    sync() {
      this.database.sync().catch(error => {
        if (error) return false
        return true
      })
    }
    table(name, properties) {
      this.selector = this.database.define(name, properties)
    }
    create(data) {
      this.selector.create(data)
    }
  }
}
