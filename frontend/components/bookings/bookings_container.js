import {connect} from "react-redux"
import Bookings from "./bookings"
import {fetchBookings, removeBooking} from "../../actions/bookings_actions"
import { fetchCarlistings } from "../../actions/carlistings_actions"

const mapStateToProps = (state, ownProps) => {
    debugger
    return{
    bookings: state.bookings,
    session: state.session,
    user: state.user,
    carlistings: state.carlistings
}}

const mapDispatchToProps = dispatch => {
    return{
    fetchBookings: id => dispatch(fetchBookings(id)),
    removeBooking: booking => dispatch(removeBooking(booking)),
    fetchCarlistings: () => dispatch(fetchCarlistings())
    }
    
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings)