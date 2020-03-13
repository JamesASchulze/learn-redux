import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
   render() {
      // Index of the post
      const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
      const post = this.props.posts[i];
      <Photo i={i} post={post} {...this.props} />
      // get the post
      return (
         <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments />
         </div>
      )
   }
};

export default Single;