import React, { Component } from 'react';
import ToDoListItem from './listitem.js';
import { connect } from 'react-redux';

class ToDoList extends Component {
  render() {
    const items = this.props.todos.map((item) => {
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
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(ToDoList);
