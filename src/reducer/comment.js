let comments =[
      {comment:"第一条",id:1},
      {comment:"第二条",id:1},
      {comment:"多好呵呵呵",id:2}
    ]


export default function commentReducer(state = comments, action) {
	switch(action.type){
		case "add": return [...state,action.comment]
		default: return state;
	}
 	
}