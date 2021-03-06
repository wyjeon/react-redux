import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
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

export const actionCreators = {
  addTodo,
  deleteTodo
};

export default store;
