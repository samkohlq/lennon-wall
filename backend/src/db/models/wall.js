"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wall = sequelize.define(
    "Wall",
    {
      name: DataTypes.STRING
    },
    {}
  );
  // establishes relationship between Wall and Post models
  Wall.associate = function(models) {
    Wall.hasMany(models.Post);
  };
  return Wall;
};
