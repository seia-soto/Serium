module.exports = {
  prefix: 'serium_', // NOTE: Database table prefix.
  tables: {
    users: 'users',
    guilds: 'guilds'
  },

  options: {
    connectionLimit: 16,
    waitForConnections: true,
    host: 'localhost',
    user: '',
    password: '',
    database: '' // NOTE: Name of database.
  }
}
