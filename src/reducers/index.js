import { combineReducers } from 'redux';
import searchTextReducer from './search_reducer';
import showCompletedReducer from './showCompl_reducer';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todoReducer
});

export default rootReducer;
