import React, { Component } from 'react';
import moment from 'moment';

import ToDoList from './todolist.js';
import AddTodo from './addtodo.js';
import TodoSearch from './todo-search';
import uuid from 'node-uuid';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  render() {
    return(
      <div>
      <h1 className='page-title'>Todo App</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch />
            <ToDoList />
            <AddTodo />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
