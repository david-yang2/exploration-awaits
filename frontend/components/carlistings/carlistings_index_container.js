import {connect} from "react-redux";
import CarlistingsIndex from "./carlistings_index";
import {fetchCarlistings} from "../../actions/carlistings_actions"

const mapStateToProps = (state) => ({
    carlistings: Object.values(state.carlistings)
});

const mapDispatchToProps = dispatch => ({
    fetchCarlistings: () => dispatch(fetchCarlistings())
});

export default connect(mapStateToProps, mapDispatchToProps)(CarlistingsIndex);