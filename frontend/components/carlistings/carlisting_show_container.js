import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlistings_actions";
import {fetchAllUsers} from "../../actions/user_actions";
import {fetchReviews,
        createRigReview,
        updateRigReview} from "../../actions/reviews_actions";
import {createNewBooking} from "../../actions/bookings_actions"

const mapStateToProps = (state, ownProps) => {
    return {
    carlisting: state.carlistings[ownProps.match.params.id],
    reviews: state.reviews,
    session: state.session,
    user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
    fetchCarlisting: id => dispatch(fetchCarlisting(id)),
    fetchReviews: id => dispatch(fetchReviews(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createRigReview: newReview => dispatch(createRigReview(newReview)),
    updateRigReview: review => dispatch(updateRigReview(review)),
    createNewBooking: booking => dispatch(createNewBooking(booking)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)