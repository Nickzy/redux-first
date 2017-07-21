import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import PostBody from './PostBody'

class Home extends Component {

  render() {
		let { posts } = this.props
		let postList = posts.map(item => {
			
			return(
				<PostBody key={item.postId} postId={item.postId} />
			)
		})
		return (
			<div className="home">
				{ postList }
			</div>
		)
  }
}
const mapStateToProps = (state)=>({
	posts:state.posts
})

export default connect(mapStateToProps)(Home);
