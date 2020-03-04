// Increment Likes
function increment(index) {
   return {
      type: 'INCREMENT_LIKES',
      index // ES6
   }
}

// Add Comment
function addComment(postId, author, comment) {
   return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
   }
}

// Remove Comment
function removeComment(postId, i) {
   return {
      type: 'REMOVE_COMMENT',
      i,
      postId
   }
}