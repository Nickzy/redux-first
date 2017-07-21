let posts = [
  {
    postId: '1',
    likes: 1,
    title: 'Git 技巧'
  },
  {
    postId: '2',
    likes: 2,
    title: '学习 Redux'
  }
]
export default function likeReducer(state = posts, action) {
	switch(action.type){
		case "addlike": 
		let stateCopy = state.slice()
    stateCopy.map(item=>{
      if(item.postId==action.postId){
        return item.likes++
      }
      return item
    })
		return stateCopy
		default: return state;
	}
 	
}