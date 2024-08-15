export function getUsers(req, res) {
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, name: 'María García', email: 'maria.garcia@example.com' },
    { id: 3, name: 'Carlos López', email: 'carlos.lopez@example.com' },
  ];

  res.json(users);
}