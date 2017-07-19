import React from "react";
// class Commentbox extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={
// 			comment:null,
// 			input:"",
// 		}
// 	}
// 	getDate(){
// 		this.setState({
// 			comment:[
// 				{one:"hao"},
// 				{one:"good"}
// 			]
// 		})
// 	}
// 	componentDidMount(){
// 		this.getDate()
		
// 	}
// 	handelSub(input,e){
// 		e.preventDefault()
// 		let {comment}=this.state
// 		let arr =[{one:input}]
// 		comment=[...comment,...arr]
// 		this.setState({comment:comment,input:""})
// 	}
// 	render(){
// 		let {comment,input}=this.state
// 		return(
// 			<div className="comment-box">
// 				{	
// 					comment?
// 					comment.map((item,index)=>
// 						<li key={index}>
// 							{item.one}
// 						</li>):""
// 				}
// 				<form>
// 					<input type="text" value={input} onChange={e=>this.setState({input:e.target.value})}/>
// 					<input type="submit" onClick={this.handelSub.bind(this,input)}/>
// 				</form>	
// 			</div>
// 		)
// 	}
// }

class Commentbox extends React.Component {
	state={
		comments:[
			"第一条",
			"第二条"
		]
	}
	
  componentWillMount() {
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.textInput.value)
    this.setState({comments:[...this.state.comments,this.textInput.value]})
    this.myForm.reset()
  }

  render() {
    let commentList = this.state.comments.map((item) => (
      <li key={Math.random()}>{item}</li>
    ))
    return(
      <div className="comment-box">
        {  commentList }
        <form ref="commentForm" ref={value=>this.myForm=value} onSubmit={this.handleSubmit}   className="comment-form">
          <input ref={value => this.textInput = value} type="text" className="input" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
export default Commentbox