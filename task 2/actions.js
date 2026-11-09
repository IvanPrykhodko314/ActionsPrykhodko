const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

const addUser = (id, name, email) => ({
  type: ADD_USER,
  payload: { id, name, email },
});

const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: { id },
});

const updateUser = (id, changes) => ({
  type: UPDATE_USER,
  payload: { id, changes },
});

console.log(addUser(1, 'Леся', 'ivan@example.com'));

console.log(removeUser(1));

console.log(updateUser(1, { name: 'Леся Шнюк' }));