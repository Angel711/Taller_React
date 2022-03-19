import React, { useState } from "react";

function Pokemon(props){
    const [name, setName] = useState("Piplup");
        return (
            <>
                <h1> Pokemon: {props.name} </h1>
                <button onClick={() => setName("Piplup")}>Cambiar nombre</button>
            </>
        );
}
export default Pokemon;