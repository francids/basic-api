import { Hono } from "hono";

import usersData from "../data/users";

export const users = new Hono().basePath("/users");

users.get("/", (c) => {
  const { id } = c.req.query();

  if (id) {
    const user = usersData.find((user) => user.id === parseInt(id));
    return user ? c.json(user) : c.json({ msg: `User with id ${id} not found` }, 404);
  }
  return c.json(usersData);
});
