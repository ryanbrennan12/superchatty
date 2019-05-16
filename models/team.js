module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.String,
      unique: true
    },
    owner: {
      type: DataTypes.String,
      unique: true
    },
    password: DataTypes.String
  });

  Team.associate = function (models) {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return User;
};