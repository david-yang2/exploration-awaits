import React from "react";


class Review extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    update(field){
 
        return e => {
    
          this.setState({[field]: e.currentTarget.value});
        }
      }

    handleSubmit(){
        return this.props.updateReview(this.state)

    }

    render(){
        return (
            <div>
                {Object.values(this.props.users).map(user =>
                    {if (user["id"] == this.props.review.user_id){ return(
                        <div key={user.id}>
                            <h5>
                                Name: {user.username}
                            </h5>
                            <form>
                                Review: {this.props.review.body}
                            </form>
                            <br />
                        </div>
                                            )}
                    }
                )}
            </div>
        )
    }
}

export default Review;        














// debugger
// return(
//     <div>
//         <ul>
//         {Object.values(this.props.reviews).map(r => {   
//             Object.values(this.props.users).map(u => { 
//                 if(u["id"] == r.user_id) {
//                     debugger
//                     return (
//                         <div>
//                             <h2> 
//                                 Name: {u.username} Review: {r.body}
//                             </h2>
//                         </div>
//                     )
//         }})})}
//         </ul>
//     </div>
//     )







{/* <div>

<div>
    {Object.values(props.users).map(u => <h1 key={u.id}>{u.username}</h1>)}
</div>
</div>  */}