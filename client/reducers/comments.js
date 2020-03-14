// A reducer takes in two things:

// 1. the action (info about what happened).

// 2. Copy of current state.

function postComments(state = [], action) {
   switch(action.type) {
      case 'ADD_COMMENT':
         // return the new state w/ the new comment.
         return [...state, {
            user: action.author,
            text: action.comment
         }];
      case 'REMOVE_COMMENT':
         return [
            // from the state to the one we want to delete
            ...state.slice(0, action.i),
            // after the deleted one, to the end
            ...state.slice(action.i + 1)
         ]
      default:
         return state;
   }
   return state;
}

function comments(state = [], action) {
   if(typeof action.postId !== 'undefined') {
      return {
         // take the current state
         ...state,
         // overwrite post w/ a new one
         [action.postId] : postComments(state[action.postId], action)
      }
   }
   return state;
}

export default comments;