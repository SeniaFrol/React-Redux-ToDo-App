import React from 'react';
import { render } from 'react-dom';
import ToDo from './components/todo';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import TodoAPI from './api/todoapi';
import { addTodos } from './actions';

const store = createStore(rootReducer, compose(
  window.devToolExtension ? devToolExtension : f => f
));

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

render(
    <Provider store={store}>
      <ToDo />
    </Provider>,
    document.querySelector('.containerApp')
);
