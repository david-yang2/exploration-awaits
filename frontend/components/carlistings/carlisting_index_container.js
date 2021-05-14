import {connect} from "react-redux";
import CarlistingsIndex from "./carlisting_index";
import {fetchCarlistings} from "../../actions/carlisting_actions"

const MapStateToProps = (state) => ({
    carlistings: state.carlistings
});

const MapDispatchToProps = dispatch => ({
    fetchCarlistings: () => dispatch(fetchCarlistings())
});

export default connect(MapStateToProps, MapDispatchToProps)(CarlistingsIndex)