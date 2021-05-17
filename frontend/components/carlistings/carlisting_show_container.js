import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlistings_actions"

const mapStateToProps = (state, ownProps) => ({
    carlisting: state.carlistings[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    fetchCarlisting: id => dispatch(fetchCarlisting(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)