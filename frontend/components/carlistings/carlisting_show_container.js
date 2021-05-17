import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlisting_actions"

const mapStateToProps = (state, ownProps) => ({
    carlistings: state.carlistings[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    fetchCarlisting: id => dispatch(fetchCarlisting(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)