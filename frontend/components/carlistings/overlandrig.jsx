import React from "react";
import {Link} from 'react-router-dom';

const OverlandRig = (props) => {
    return (
        <div>
            <Link to={`/carlistings/${props.rig.id}`}>{props.rig.year} {props.rig.make} {props.rig.model}</Link>
            <h4>Features:</h4>
            <body>Cartype: {props.rig.cartype},
                  Drivetrain: {props.rig.drivetrain},
                  Transmission: {props.rig.transmission},
                  Lockers: {props.rig.lockers}
            </body>
            <h5>$ {props.rig.price} / day</h5>
            <br />
            
        </div>
    )

};

export default OverlandRig;