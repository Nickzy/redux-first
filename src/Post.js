import React, { Component } from 'react';
import PostBody from "./PostBody";
import Commentbox from "./Commentbox";

class Post extends Component {
  render() {
    let id = this.props.match.params.id
    return (
      		<div>
            <div className="top  clearfix">
              <PostBody postId={id}/>
            </div>
            <div className="bottom clearfix">
              <Commentbox postId={id}/>
            </div>	
      		</div>
    );
  }
}

export default Post;
