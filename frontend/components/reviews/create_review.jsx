import React from "react"
import Avatar from "../avatar/avatar"

class CreateReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            carlisting_id: this.props.carlistingId,
            user_id: this.props.currentUser.id,
            body: "",
            rating: 5
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
          this.setState({[field]: e.currentTarget.value});
        }
      }

    handleSubmit(){
        this.props.createReview(this.state)
        this.setState({body: ""})

    }
    
    render(){

        const {currentUser} = this.props
        return(
            <div className="createReview">
                <div>
                    <Avatar username={currentUser.username} />
                    <h3>Hi {currentUser.username}, </h3>
                </div>
                <form className="createForm" onSubmit={this.handleSubmit}>
                    <textarea className="createReviewArea" value={this.state.body}
                            placeholder="Would you like to review this rig?"
                            onChange = {this.update('body')}
                    />
                    <input type="submit" value="Create Review" />
                </form>
            </div>
        )
    }
}

export default CreateReview;


