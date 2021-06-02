import React from "react";
import Review from "../reviews/review";
import CreateReview from "../reviews/create_review";
import Calendar from '../calendar/calendar';
import * as Images from "../../../public/images";
import Map from "../map/map"

class CarlistingShow extends React.Component{
    constructor(props){
        super(props);

        this.createReview = this.createReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.createBooking = this.createBooking.bind(this)
    }   
    
    componentDidMount(){

        this.props.fetchCarlisting(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
        this.props.fetchAllUsers()
        this.props.fetchTrips(this.props.match.params.id)

    }

    createReview(newReview){
        this.props.createRigReview(newReview)
    }

    createBooking(booking){
        this.props.createNewBooking(booking)
    }
    
    updateReview(updatedReview){
        this.props.updateRigReview(updatedReview)
    }


    render(){
        const {carlisting, reviews, user, trips} = this.props;
        if (!carlisting) return null
        var listingId = this.props.location.state.photoidx
        var imageId = "carlisting".concat(listingId.toString())
        return (Object.keys(reviews).length != undefined && Object.keys(user).length >0 ?
            <div>

                {/* images for carlisting */}
                {Images[imageId].map((image,idx) => 
                    <img src={image} width="250px" height ="200px"alt='' key={idx}/>)}

                {/* information for carlisting */}
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                </div>

                <div>
                    <h3> Previous Trip:     {trips[0].beg_longitude}</h3>
                </div>
                
                {/* show most recent trip on google maps for this carlisting */}
                <div>
                    <Map trips={trips} />
                </div>
                {/* Display bookings calendar and comment box for users
                can only edit if they are signed in */}
                <div>
                    {this.props.session.currentUser ?     
                            <div>
                                <div>
                                    <Calendar createBooking={this.createBooking}
                                            carlistingId={carlisting.id}
                                            currentUserId={this.props.session.currentUser.id}
                                            />
                                </div>
                                <div>
                                    <CreateReview   createReview={this.createReview}
                                                    carlistingId={carlisting.id}
                                                    currentUser = {this.props.session.currentUser}
                                                    />
                                </div>
                            </div>
                            : 
                            <div>
                                <Calendar />
                                <h2>Please Login/SignUp to make a reservation or leave a comment</h2>
                            </div>
                            }
                </div>
                <div>
                    {Object.values(reviews).map(review => 
                                                <Review review={review}
                                                users={user}
                                                updateReview = {this.updateReview}
                                                key={review.id}
                                                currentUserId={this.props.session.currentUser.id}
                                                />
                                                )}
                </div>
            </div>
        :
            null
        )
    }
}


export default CarlistingShow


