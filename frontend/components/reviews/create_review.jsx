import React from "react"


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
        return(
            <div className="createReview">
                <h3>Hi {this.props.currentUser.username}, </h3>
                <form className="createForm" onSubmit={this.handleSubmit}>
                    <textarea className="createReviewArea" value={this.state.body}
                            placeholder="Would you like to review this rig?"
                            onChange = {this.update('body')}
                    />
                    <input className="createReviewBtn" type="submit" value="Create Review" />
                </form>
                <br />
                <br />
            </div>
        )
    }
}

export default CreateReview;


