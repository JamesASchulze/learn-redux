import React from 'react';
// import Photo from './Photo';
// import Comments from './Comment';

class Comments extends React.Component {

   deleteComment(i) {
      // console.log('deleting post');
      const { postId } = this.props.params;
      this.props.removeComment(postId, i);
   }

   renderComment(comment, i) {

      return (
         <div className="comment" key={i} >
            <p>
               <strong>{comment.user}</strong>
               {comment.text}
               <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, i)}>&times;</button>
            </p>
         </div>
      )
   }

   handleSubmit(e) {
      e.preventDefault();
      const { postId } = this.props.params;
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;

      this.props.addComment(postId, author, comment);
      this.refs.commentForm.reset();
   }

   render() {

      return (
         <div className="comments">
            {this.props.postComments.map(this.renderComment)}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)} >
               <input type="text" ref="author" placeholder="author" />
               <input type="text" ref="comment" placeholder="comment" />
               <input type="submit" hidden />
            </form>
         </div>
      )
   }
};

export default Comments;