import expect from 'expect';
import { setSearchText, addTodo, toggleShowCompleted, toggleTodo,addTodos } from '../../actions';

describe("Actions", () => {
  it("Should generate search text action", () => {
    const action = {
      type: "SET_SEARCH_TEXT",
      searchText: "regular text"
    };

    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it("Should generate add todo action", () => {
    const action = {
      type: "ADD_TODO",
      text: "New to do"
    };

    const res = addTodo(action.text);

    expect(res).toEqual(action);
  });

  it("Should generate show completed action", () => {
    const action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    const res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it("should generate addTodos action", () => {
    const todos = [{
      id: '111',
      text: "something",
      completed: false,
      completedAt: undefined,
      createdAt: 423400
    }];

    const action = {
      type: "ADD_TODOS",
      todos
    };

    const res = addTodos(todos);

    expect(res).toEqual(action);
  });

  it("Should generate toggle todo action", () => {
    const action = {
      type: "TOGGLE_TODO",
      id: '2'
    };

    const res = toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
