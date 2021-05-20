import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlistings_actions";
import {fetchReviews} from "../../actions/reviews_actions"
import { fetchCurrentUser, fetchAllUsers } from "../../actions/user_actions";

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
    //fetchCurrentUser: id => dispatch(fetchCurrentUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)