import request from "supertest";
import app from "../src/app";
import models, { Wall } from "../src/db/models";

// destory all posts after running each test
afterEach(async () => {
  await models.Post.destroy({ where: {} });
});

// destory all walls after running each test
afterEach(async () => {
  await models.Wall.destroy({ where: {} });
});

afterAll(() => {
  models.sequelize.close();
});

test("create wall API creates new wall", async () => {
  const createWallResponse = await request(app)
    .post("/walls/create")
    .send({ name: "new wall" })
    .set("Accept", "application/json");
  expect(createWallResponse.statusCode).toBe(200);
  expect(createWallResponse.body.name).toBe("new wall");
});

test("create post API creates new post", async () => {
  const newWall = await Wall.create({ name: "another new wall" });
  const createPostResponse = await request(app)
    .post("/posts/create")
    .send({ value: "new post", wallId: newWall.id })
    .set("Accept", "application/json");
  expect(createPostResponse.statusCode).toBe(200);
  expect(createPostResponse.body.value).toBe("new post");
  expect(createPostResponse.body.WallId).toBe(newWall.id);
});
