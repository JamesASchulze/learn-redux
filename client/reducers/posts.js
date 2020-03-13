// A reducer takes in two things:
// 1. the action (info about what happened).
// 2. Copy of current state.

// When a "Dispatch" is fired off, every reducer runs.
// Logic needs to be built into each reducer to see if
// it needs to do anything.

function posts(state = [], action) {
   switch(action.type) {
      case 'INCREMENT_LIKES' :
         //Return the updated state
      const i = action.index;
         return [
            ...state.slice(0, i), // Before the one we are updating
            {...state[i], likes: state[i].likes + 1}, // The one we are updating
            ...state.slice(i + 1), // After the one we are updating
         ]
      default:
         return state;
   }
}

export default posts;