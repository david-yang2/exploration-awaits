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
            <div className="bkgsContner">
                <div className="bkgsHeader">
                    {!bookings || bookings.length<1 ? 
                            <div className="bkgsTitle">
                                <h2 className="noBkngs">Looks like you do not have any upcoming reservations. Would you like to reserve one of our Overland Rigs?</h2>
                                <Link className="linkToRigs" to="/rigs">Check out our overland rigs</Link>
                            </div>

                        :   <div className="bkgsTitle">
                                <h2>Here is a list of your upcoming reservations!</h2>
                                <h5>Please contact the owner, if you have any questions regarding your reservation.</h5>
                            </div>}
                </div>
                <div className="bkgsItemContner">
                    {this.propsAreEmpty() ? 
                        null 
                    :
                        Object.values(bookings).map(booking=>
                            <div className="bkgsItem" key={booking.id}>
                                <text>
                                    <span>Owner</span>: {this.getCarOwnersName(booking.car_id)[0]} 
                                    <br />
                                    <span>Contact information:</span> {this.getCarOwnersName(booking.car_id)[1]}
                                </text>
                                <div>
                                    <h3>
                                        {/* convert date from "yyyy-mm-dd" to "DOW mon dd yy" */}
                                        Pick Up:    {new Date(booking.pickup_date).toDateString()} 
                                    </h3>
                                    <h3>
                                        Drop Off:     {new Date(booking.dropoff_date).toDateString()}
                                    </h3>
                                </div>
                                <button className="bkgsBtn" onClick={()=>this.deleteBooking(booking)}>Cancel Reservation</button>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Bookings