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
        const form =   this.props.currentUserId === this.props.review.user_id ? 
            (<div><form onSubmit={this.handleSubmit}>
                <textarea value={this.state.body}
                        onChange = {this.update('body')}
                />
                <input type="submit" value="Update Review" />
            </form>
            <br />
            </div>) 
            :
            (<textarea value={this.state.body} />)
        return (
            // list all reviews associated with carlisting and name of users who created the review
            <div className="prvsReviewsSubContnr">
                {Object.values(this.props.users).map(user =>
                    {if (user["id"] == this.props.review.user_id){ return(
                        <div className="prevReviews" key={user.id}>


                            {/* can only update review belonging to current user */}
                                {this.props.currentUserId === this.props.review.user_id ? 
                                (
                                <form className="updateForm" onSubmit={this.handleSubmit}>
                                    <textarea className="currentUsersReview" value={this.state.body}
                                            onChange = {this.update('body')}
                                    />
                                    <input className="updateReviewBtn" type="submit" value="Update Previous Review" />
                                </form>
                                ) 
                                :
                                (
                                <text className="othersReviews">{user.username}: "{this.state.body}"</text>
                                )}
                        </div>
                                            )}
                    }
                )}
            </div>
        )
    }
}

export default Review;        