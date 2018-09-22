module.exports = (DataTypes, database) => {
  const Authority = database.define('Authority', {
    identificate: {
      type: DataTypes.STRING(16),
      primaryKey: true,
      allowNull: false
    },
    certificate: {
      type: DataTypes.VARCHAR(128),
      allowNull: false
    },
    balance: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    underscored: true,
    freezeTableName: true,
    tableName: 'authority'
  })

  return Authority
}
