// A reducer takes in two things:
// 1. the action (info about what happened).
// 2. Copy of current state.

// When a "Dispatch" is fired off, every reducer runs.
// Logic needs to be built into each reducer to see if
// it needs to do anything.

function posts(state = [], action) {
   console.log('The post has been updated');
   console.log(state, action);
   return state;
}

export default posts;