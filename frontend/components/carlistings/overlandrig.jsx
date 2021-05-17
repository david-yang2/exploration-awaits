import React from "react";
import {Link} from 'react-router-dom';

const OverlandRig = (props) => {
    debugger
    return (
        <div>
            <h2>{props.rig.year} {props.rig.make} {props.rig.model}</h2>
            <h5>$ {props.rig.price} / day</h5>
            <br />
            <Link to={`/carlistings/${props.rig.id}`}> Check out this rig</Link>
        </div>
    )



};

export default OverlandRig;