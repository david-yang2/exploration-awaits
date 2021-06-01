import React from "react";
import {Link} from 'react-router-dom';

const OverlandRig = (props) => {
    return (
        <div>
            <Link to={`/carlistings/${props.rig.id}`}>{props.rig.year} {props.rig.make} {props.rig.model}</Link>
            <h5>$ {props.rig.price} / day</h5>
            <br />
            
        </div>
    )

};

export default OverlandRig;