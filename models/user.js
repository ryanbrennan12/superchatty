//create a file for every DB table

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.String,
      unique: true
    },
    email: {
      type: DataTypes.String,
      unique: true
    },
    password: DataTypes.String
  });

  User.associate = function (models) {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
  };

  return User;
};