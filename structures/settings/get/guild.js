const knex = require('../../database/knex')
const config = require('../../../config')

module.exports = async identify => {
  let result = {}

  try {
    const rows = await knex
      .select('*')
      .where({ identify })
      .from(config.database.tables.guild)

    result = rows[0]

    if (!rows.length) {
      result = config.defaults.settings.guild
      result.identify = identify

      await knex(config.database.tables.guild).insert(result)
    }
  } catch (error) {
    throw new Error(error)
  }

  return result
}
