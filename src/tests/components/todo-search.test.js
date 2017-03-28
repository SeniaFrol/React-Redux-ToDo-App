import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import { TodoSearch } from '../../components/todo-search.js';

describe("TodoSearch", () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Search me';
    const action = {
      type: "SET_SEARCH_TEXT",
      searchText
    };
    const spy = expect.createSpy();
    const todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const action = { type: "TOGGLE_SHOW_COMPLETED"};
    const spy = expect.createSpy();
    const todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todosearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
