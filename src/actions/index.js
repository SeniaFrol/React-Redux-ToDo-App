export const setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

export const toggleShowComplited = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  };
};

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
