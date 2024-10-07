import { Hono } from "hono";

import usersData from "../data/users";

export const users = new Hono().basePath("/users");

users.get("/", (c) => c.json(usersData));
users.get("/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  const user = usersData.find((user) => user.id === id);
  return user ? c.json(user) : c.json({ msg: `User with id ${id} not found` }, 404);
});
