// dataReducer.js
const initialState = {
    data: [], // Initial data state
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DATA':
        return {
          ...state,
          data: [...state.data, action.payload], // Add new data to the state
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  