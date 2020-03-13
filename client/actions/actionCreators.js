// Increment Likes
export function increment(index) {
   return {
      type: 'INCREMENT_LIKES',
      index // ES6
   }
}

// Add Comment
export function addComment(postId, author, comment) {
   console.log('Dispatching');
   return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
   }
}

// Remove Comment
export function removeComment(postId, i) {
   return {
      type: 'REMOVE_COMMENT',
      i,
      postId
   }
}