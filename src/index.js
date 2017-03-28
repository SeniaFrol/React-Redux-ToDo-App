import React from 'react';
import { render } from 'react-dom';
import ToDo from './components/todo';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, compose(
  window.devToolExtension ? devToolExtension : f => f
));

render(
    <Provider store={store}>
      <ToDo />
    </Provider>,
    document.querySelector('.containerApp')
);
