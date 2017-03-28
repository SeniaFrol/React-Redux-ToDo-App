import React from 'react';
import { render } from 'react-dom';
import ToDo from './components/todo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
      <ToDo />
    </Provider>,
    document.querySelector('.containerApp')
);
