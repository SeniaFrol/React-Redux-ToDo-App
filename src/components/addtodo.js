import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

export class AddTodo extends Component {
  onInputChange(e) {
    e.preventDefault();
    // decided to use this only because of tests.
    const { dispatch } = this.props;
    const todotext = this.refs.text.value;
    if(todotext.length > 0) {
      this.refs.text.value = '';
      dispatch(addTodo(todotext))
    } else {
    this.refs.text.focus();
    }
  }

  render() {
    return(
      <div className="container__footer">
        <form onSubmit={(e) => this.onInputChange(e)}>
          <input type='text' ref='text' placeholder='Add new ToDo'/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
