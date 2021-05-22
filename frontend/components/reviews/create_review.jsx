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
            <div>
                <h3>Hi {this.props.currentUser.username}, </h3>
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.body}
                                placeholder="Would you like to create a review?"
                                onChange = {this.update('body')}
                        />
                        <input type="submit" value="Create Review" />
                </form>
            </div>
        )
    }
}

export default CreateReview;


