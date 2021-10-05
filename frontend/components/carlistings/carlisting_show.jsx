import React from "react";
import Review from "../reviews/review";
import CreateReview from "../reviews/create_review";
import Calendar from '../calendar/calendar';
import * as Images from "../../../public/images";
import Map from "../map/map"

class CarlistingShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //set the default map style of google maps to terrain style
            mapOptions:{
                mapTypeId: 'terrain',
                zoom: 30
            }
            // mapTypeControlOptions: {
            //     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // }

        }

        this.createReview = this.createReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.createBooking = this.createBooking.bind(this)
        this.propsAreValid = this.propsAreValid.bind(this)
    }   
    
    componentDidMount(){
        this.props.fetchTrips(this.props.match.params.id)
        this.props.fetchCarlisting(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
        this.props.fetchAllUsers()
    }

    createReview(newReview){
        // post review
        this.props.createRigReview(newReview)
    }

    createBooking(booking){
        // post booking
        this.props.createNewBooking(booking)
    }
    
    updateReview(updatedReview){
        // patch review
        this.props.updateRigReview(updatedReview)
    }

    propsAreValid(){
        //returns true if all props are fetched
        return Object.keys(this.props.reviews).length != undefined && 
               Object.keys(this.props.user).length >0  && 
               Object.keys(this.props.trips).length>0
    }

    render(){
        // deconstruct carlisting, reviews, user, trips from props
        const {carlisting, reviews, user, trips} = this.props;
        if (!carlisting) return null
        var listingId = carlisting.imageIdx
        var imageId = "carlisting".concat(listingId.toString())
        var currentUserId = 0
        
        // grabbing current user's ID
        this.props.session.currentUser ? currentUserId = this.props.session.currentUser.id : currentUserId =0
        
        return ( this.propsAreValid() ?
            <div className="showContner">

                <div className="review-container">
                    {this.props.session.currentUser ?     
                        <CreateReview   createReview={this.createReview}
                                        carlistingId={carlisting.id}
                                        currentUser = {this.props.session.currentUser}
                                        />
                        : 
                        <div>
                            <h2>Please Login/SignUp to make a reservation or leave a comment</h2>
                            <br />
                            <br />
                        </div>
                    }
                    
                    <div className="prvsReviewsContnr">
                        <div style={{fontSize: "30px", fontWeight:"bold", margin:"5px 0 5px 0"}}>Reviews:</div>
                        {Object.values(reviews).map(review => 
                                                    <Review review={review}
                                                    users={user}
                                                    updateReview = {this.updateReview}
                                                    key={review.id}
                                                    currentUserId={currentUserId}
                                                    />
                                                    )}
                    </div>
                </div>


                {/* information for carlisting */}
                <div className="carInfo">
                    {/* Car Title*/}
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                    
                    {/* bookings calendar */}
                    <div className="bkgsCal">
                        <h3>Book this overland rig</h3>

                        {/* pass in props if user is logged in otherwise just render calendar component */}
                        {this.props.session.currentUser ?
                            <div>
                                <Calendar createBooking={this.createBooking}
                                        carlistingId={carlisting.id}
                                        currentUserId={this.props.session.currentUser.id}
                                        />
                            </div>
                            :
                            <div> 
                                <Calendar />
                            </div>
                        }
                    </div>

                    {/* images for carlisting */}
                    <div className="carImgs">
                        {Images[imageId].map((image,idx) => 
                            <img className="indvImg" src={image} width="250px" height ="200px"alt='' key={idx}/>)}
                    </div>



                    {/* show most recent trip on google maps for this carlisting */}
                    <div className="showMap">
                        <h3> Previous Trip </h3>
                        <div>
                            <Map trips={trips[0]}
                                    mapOptions={this.state.mapOptions}/>
                        </div>
                    </div>
                </div>
            </div>
        :
        null
        )
    }
}


export default CarlistingShow


