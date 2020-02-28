"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      value: DataTypes.STRING,
      username: DataTypes.STRING
    },
    {}
  );
  // establishes relationship between Wall and Post models
  Post.associate = function(models) {
    Post.belongsTo(models.Wall);
  };
  return Post;
};
