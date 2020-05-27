const createUser = (req, res) => {
  res.send({ status: 'ok', message: 'user created' });
};

const deleteUser = (req, res) => {
  res.send({ status: 'ok', message: 'user deleted' });
};

const getUsers = (req, res) => {
  res.send({ status: 'ok', data: {} });
};

const updateUser = (req, res) => {
  res.send({ status: 'ok', message: 'user updated' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
};
