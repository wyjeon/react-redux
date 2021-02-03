import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addTodo = (text) => {
  return {
    type: ADD,
    text
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (state = [], aciton) => {
  switch (aciton.type) {
    case ADD:
      return [{ text: aciton.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== aciton.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
