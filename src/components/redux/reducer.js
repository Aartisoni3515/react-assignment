const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
  }
}
export default reducer;
