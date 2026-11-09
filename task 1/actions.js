const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const addItem = (id, name, quantity) => ({
  type: ADD_ITEM,
  payload: { id, name, quantity },
});

const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

console.log(addItem(1, 'Молоко', 2));

console.log(removeItem(1));

console.log(updateQuantity(1, 5));