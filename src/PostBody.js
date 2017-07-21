import React from "react";
import {connect} from "react-redux";
import store from "./store";

import {Link} from "react-router-dom";
class PostBody extends React.Component{
	handelAdd=()=>{
		store.dispatch({type:"addlike",postId:this.props.postId})
	}
	render(){
		let postId = this.props.postId
	    let newArr = this.props.comments.filter(function(arr){
	        return arr.id==postId
	    })
	    let obj = this.props.likes.filter(value=>value.postId===postId)[0]
		return(
			<div className="post-body">
			
		        <Link to={`/post/${postId}`} className="title">{obj.title}</Link>
		      
				<div className="likes-num num" onClick={this.handelAdd}>
					{obj.likes}赞
				</div>
				<div className="comment-num num">
					{newArr.length}
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state)=>({
	comments:state.comments,
	likes:state.posts
})
export default connect(mapStateToProps)(PostBody)