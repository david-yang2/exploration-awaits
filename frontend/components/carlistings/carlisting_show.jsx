import React from "react";
import Review from "../reviews/review"

class CarlistingShow extends React.Component{
    constructor(props){
        super(props)
    }   
    
    componentDidMount(){

        this.props.fetchCarlisting(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
        this.props.fetchAllUsers()
        // this.props.session.currentUser ? 
        //     (this.props.fetchCurrentUser(this.props.session.currentUser.id))
        //     : (null)

    }

    render(){
        const {carlisting, reviews, user} = this.props;
        debugger
        if (!carlisting) return null
        debugger
        return (reviews.length != undefined && Object.keys(user).length >0 ?
            <div>
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                    <Review reviews={reviews}
                            users={user}/>
                </div>
            </div>
        :
            null
        )
        }
}


export default CarlistingShow


