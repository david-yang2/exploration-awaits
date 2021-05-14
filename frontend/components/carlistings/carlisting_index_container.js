import {connect} from "react-redux";
import CarlistingsIndex from "./carlisting_index";

const MapStateToProps = (state) => ({
    carlistings = state.carlistings
});

const MapDispatchToProps = dispatch => ({
    fetchCarlistings: () => dispatch(fetchCarlistings())
});

export default connect(MapStateToProps, MapDispatchToProps)(CarlistingsIndex)