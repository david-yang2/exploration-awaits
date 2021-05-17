import {connect} from "react-redux";
import CarlistingShow from "./carlisting_show";
import {fetchCarlisting} from "../../actions/carlisting_actions"

const mapStateToProps = (state) => ({
    carlistings: state.carlistings
})

const mapDispatchToProps = dispatch => ({
    fetchCarlisting: id => dispatch(fetchCarlisting(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingShow)