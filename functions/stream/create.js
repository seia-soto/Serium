module.exports = (Sequelize, path) => {
  const stream = new Sequelize('Seia', null, null, {
    dialect: 'sqlite',
    storage: path
  })
  return stream
}
