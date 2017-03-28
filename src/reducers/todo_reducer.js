import uuid from 'node-uuid';
import moment from 'moment';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if(todo.id === action.id) {
          const nextCompleted = !todo.completed;
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }
      });
    default:
      return state;
  };
};