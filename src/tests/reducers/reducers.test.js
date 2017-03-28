import expect from 'expect';
import { searchTextReducer } from '../../reducers/search_reducer';
import { showCompletedReducer } from '../../reducers/showCompl_reducer';
import { todoReducer } from '../../reducers/todo_reducer';



describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("Should set searchText", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        searchText: "some text here"
      };

      const res = searchTextReducer('', action);

      expect(res).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", () => {
    it('Should toggle showCompleted', () => {
      const action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      const res = showCompletedReducer(false, action);

      expect(res).toEqual(true);
    });
  });

  describe('todoReducer', () => {
    it("Should ad new todo", () => {
      const action = {
        type: "ADD_TODO",
        text: "Next todo"
      };

      const res = todoReducer([], action);

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
  });

  it("Should toggle todo", () => {
    const todos = [{
      id: '123',
      text: "text",
      completed: true,
      createdAt: 123,
      completedAt: 125
    }];

    const action = {
      type: "TOGGLE_TODO",
      id: '123'
    };

    const res = todoReducer(todos, action);

    expect(res[0].completed).toEqual(false);
    expect(res[0].completedAt).toEqual(undefined);
  });
});
