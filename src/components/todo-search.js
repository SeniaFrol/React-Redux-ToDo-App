import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchText, toggleShowCompleted } from '../actions';

export class TodoSearch extends Component {
  render() {
    const { dispatch } = this.props;
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search ToDo" value={this.searchText} onChange={() => {dispatch(setSearchText(this.refs.searchText.value))}}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={this.props.showCompleted} onChange={() => {dispatch(toggleShowCompleted())}} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
}

export default connect(mapStateToProps)(TodoSearch);
