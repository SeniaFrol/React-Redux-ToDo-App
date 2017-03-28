import React, { Component } from 'react';
import ToDoListItem from './listitem.js';
import { connect } from 'react-redux';
import TodoAPi from '../api/todoapi';


class ToDoList extends Component {
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const items = TodoAPi.filterTodos(todos, showCompleted, searchText).map((item) => {
      return <ToDoListItem key={item.id} {...item} />
    });

    return(
      <div>
        {items}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ToDoList);
