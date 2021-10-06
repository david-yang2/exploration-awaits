import React from "react"
import { Link } from 'react-router-dom';

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.deleteBooking = this.deleteBooking.bind(this)
        this.getCarOwnersName = this.getCarOwnersName.bind(this)
        this.propsAreEmpty = this.propsAreEmpty.bind(this)
    }

    componentDidMount(){
        this.props.fetchCarlistings()
        this.props.fetchAllUsers()
        this.props.fetchBookings(this.props.session.currentUser.id)
    }

    deleteBooking(booking){
        this.props.removeBooking(booking)
        
    }

    getCarOwnersName(id){
        let carBooked = this.props.carlistings[id]
        let carOwnersId = carBooked.owner_id
        let owner = this.props.user[carOwnersId]
        return [owner.username, owner.email]
    }

    propsAreEmpty(){
        return (Object.keys(this.props.bookings).length ===0 || 
                Object.keys(this.props.carlistings).length ===0 ||
                Object.keys(this.props.user).length ===0)
    }

    render(){
        const {bookings, session, carlistings, user} = this.props

        return(
            <div className="bookingsContainer">
                <div className="bookingsHeader">
                    {!bookings || bookings.length<1 ? 
                            <div>
                                <h1 >Looks like you do not have any upcoming bookings. Would you like to reserve one of our Overland Rigs?</h1>
                                <Link className="linkToRigs" to="/rigs">Check out our overland rigs</Link>
                            </div>

                        :   <div>
                                <h1>Here is a list of your upcoming bookings!</h1>
                                <h3>Please contact the owner, if you have any questions regarding your booking.</h3>
                            </div>}
                </div>


                <div className="bookingsItemContainer">
                    {this.propsAreEmpty() ? 
                        null 
                    :
                        Object.values(bookings).map(booking=>
                            <div className="individualBooking" key={booking.id}>
                                <div className="bookingImage">
                                    
                                </div>
                                <div className="bookingInfo">
                                    <div className="bookingDetails">
                                            <div className="pickup">
                                                {/* convert date from "yyyy-mm-dd" to "DOW mon dd yy" */}
                                                <div>Pick Up:</div>
                                                <div> 
                                                    {new Date(booking.pickup_date).toDateString()}
                                                </div>  
                                            </div>
                                            <div className='dropoff'>
                                                <div>Drop Off:</div>
                                                <div>
                                                    {new Date(booking.dropoff_date).toDateString()}
                                                </div>
                                            </div>
                                            <button onClick={()=>this.deleteBooking(booking)}>Cancel</button>
                                    </div>
                                    <div className="ownerInfo">
                                        <div>Owner: {this.getCarOwnersName(booking.car_id)[0]} </div>
                                        <div>Contact information: {this.getCarOwnersName(booking.car_id)[1]}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Bookings