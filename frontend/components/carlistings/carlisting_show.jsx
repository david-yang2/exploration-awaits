import React from "react";
import Review from "../reviews/review"

class CarlistingShow extends React.Component{
    constructor(props){
        super(props)
    }   
    
    componentDidMount(){
        debugger

        this.props.fetchCarlisting(this.props.match.params.id)
            .then(() => this.props.fetchReviews(this.props.match.params.id))

    }

    render(){
        debugger
        const {carlisting, reviews} = this.props;
        if (!carlisting) return null
        debugger
        return (!reviews || reviews.length?
            <div>
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                    <Review reviews={reviews}/>
                </div>
            </div>
        :
            null
        )
        }
}


export default CarlistingShow



        // Promise.all([this.props.fetchCarlisting(this.props.match.params.id),
        //                 this.props.fetchReviews(this.props.match.params.id)])
        //                 .then(([carlisting, reviews]) => {
        //                     this.setState({
        //                         carlisting: carlisting,
        //                         reviews: reviews
        //                     })
        //                 })

