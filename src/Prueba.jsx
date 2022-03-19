import React, { useState, useEffect } from "react";
import {Card, card} from "react-bootstrap";

function User(props){
    const [user, setUser] = useState(props.user);
    return(
        <Card>
            <Card.Body>
                <span>Nombre:</span>
                <p>{`${user.first_name}` `${user.last_name}`}</p>
                <span>Email:</span>
                <p>{`${user.email}`}</p>
                <img src={`${user.avatar}`} alt="user-face"/>
            </Card.Body>
        </Card>
    )

}

export default User;