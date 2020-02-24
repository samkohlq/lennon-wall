import { Wall } from "../db/models";

export const createWall = async (req, res) => {
  const newWall = await Wall.create({ name: req.body.name });
  res.send(newWall);
};

export const retrieveWall = async (req, res) => {
  const wall = await Wall.findOne({
    where: {
      name: req.query.wallName
    }
  });
  res.send(wall);
};
