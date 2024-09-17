import users from "../data/users.js";

export function getUsers(req, res) {
  res.json(users);
}

export function getUserById(req, res) {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).json({ message: `User with id ${req.params.id} not found` });
  } else {
    res.json(user);
  }
}
