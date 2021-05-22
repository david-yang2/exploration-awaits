import React from "react";
import Review from "../reviews/review";
import CreateReview from "../reviews/create_review";
import Calendar from '../calendar/calendar';

class CarlistingShow extends React.Component{
    constructor(props){
        super(props);

        this.createReview = this.createReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
    }   
    
    componentDidMount(){

        this.props.fetchCarlisting(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
        this.props.fetchAllUsers()

    }

    createReview(newReview){
        debugger
        this.props.createRigReview(newReview)
    }

    
    updateReview(updatedReview){
        this.props.updateRigReview(updatedReview)
    }


    render(){
        const {carlisting, reviews, user} = this.props;
        if (!carlisting) return null
        return (Object.keys(reviews).length != undefined && Object.keys(user).length >0 ?
            <div>
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                </div>
                <div>
                    <Calendar />
                </div>
                <div>
                    {this.props.session.currentUser ?     
                            <CreateReview   createReview={this.createReview}
                                            carlistingId={carlisting.id}
                                            currentUser = {this.props.session.currentUser}/>
                            : 
                            <h2>Please Login/SignUp to leave a comment</h2>} 
                </div>
                <div>
                    {Object.values(reviews).map(review => 
                                                <Review review={review}
                                                users={user}
                                                updateReview = {this.updateReview}
                                                key={review.id}/>
                                                )}
                </div>
            </div>
        :
            null
        )
    }
}


export default CarlistingShow


