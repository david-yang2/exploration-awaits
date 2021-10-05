import React from "react";
import Avatar from "../avatar/avatar"


class Review extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            review: this.props.review,
            edit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    update(field){
        return e => {
          this.setState({review:{...this.state.review, [field]: e.currentTarget.value}});
        }
      }

    handleSubmit(){
        this.props.updateReview(this.state.review)

        //close chat modal
        this.toggleEdit()
    }

    toggleEdit(){
        this.setState({edit: !this.state.edit})
    }

    render(){


        // edit chat modal
        let editDisplay;

        if (this.state.edit === false){
            editDisplay = (<div></div>)
        } else {
            editDisplay = (
                <div className="editReviewModal">
                    <button onClick={()=>this.toggleEdit()}>Close</button>
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.review.body}
                                onChange = {this.update('body')}
                        />
                        <input type="submit" value="Update Previous Review" />
                    </form>
                </div>
            )
        }

        return (
            // list all reviews associated with carlisting and name of users who created the review
            <div className="prvsReviewsSubContnr">
                {Object.values(this.props.users).map(user =>
                    {if (user["id"] == this.props.review.user_id){ return(
                        <div className="prevReviews" key={user.id}>
                            <div className='reviewUserInfo'>
                                <Avatar username={user.username} />
                                <div style={{marginTop:"10px"}}>{user.username}</div>
                            </div>
                            <div className='userReview'>
                                <text>{this.state.review.body}</text>

                                {/* can only update review belonging to current user */}
                                {this.props.currentUserId === this.props.review.user_id ? 
                                <button className='editReview'onClick={()=> this.toggleEdit()}> Edit</button> 
                                :
                                null}
                            </div>
                            {editDisplay}
                        </div>
                                            )}
                    }
                )}
            </div>
        )
    }
}

export default Review;        





































// const form =   this.props.currentUserId === this.props.review.user_id ? 
// (<div>
    
//     <form onSubmit={this.handleSubmit}>
//     <textarea value={this.state.body}
//             onChange = {this.update('body')}
//     />
//     <input type="submit" value="Update Review" />
// </form>
// <br />
// </div>) 
// :
// (<textarea value={this.state.body} />)

