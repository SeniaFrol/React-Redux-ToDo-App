import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import { AddTodo } from '../../components/addtodo.js';

describe("AddTodo",() => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispath ADD_TODO when valid todo text', () => {
    const todoText = 'Hi there'
    const action = {
      type: "ADD_TODO",
      text: todoText
    };
    const spy = expect.createSpy();
    const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
});

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    const todoText = ''
    const spy = expect.createSpy();
    const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
});
});
