import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlistings_actions";
import {fetchReviews} from "../../actions/reviews_actions"

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    carlisting: state.carlistings[ownProps.match.params.id],
    reviews: state.reviews
}
}

const mapDispatchToProps = dispatch => {
    debugger
    return{
    fetchCarlisting: id => dispatch(fetchCarlisting(id)),
    fetchReviews: id => dispatch(fetchReviews(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)