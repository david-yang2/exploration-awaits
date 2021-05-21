import React from "react";
import Review from "../reviews/review"

class CarlistingShow extends React.Component{
    constructor(props){
        super(props);

        this.updateReview = this.updateReview.bind(this)
    }   
    
    componentDidMount(){

        this.props.fetchCarlisting(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
        this.props.fetchAllUsers()
        // this.props.session.currentUser ? 
        //     (this.props.fetchCurrentUser(this.props.session.currentUser.id))
        //     : (null)

    }
    
    updateReview(updatedReview){
        this.props.updateRigReview(updatedReview)
    }

    
    render(){
        const {carlisting, reviews, user} = this.props;
        if (!carlisting) return null
        return (reviews.length != undefined && Object.keys(user).length >0 ?
            <div>
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                    {Object.values(reviews).map(review => 
                                            <Review review={review}
                                            users={user}
                                            updateReview = {this.updateReview}/>
                                            )}

                </div>
            </div>
        :
            null
        )
    }
}


export default CarlistingShow


