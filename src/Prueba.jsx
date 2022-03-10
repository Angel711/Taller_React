import React, { useState } from "react";

function Prueba(props){
    const [name, setName] = useState(props.name);
        return (
            <>
                <h1> Pokemon: {name} </h1>
                <button onClick={() => {
                    setName('Piplup');
                    }}>Cambiar nombre</button>
            </>
        );
}

export default Prueba;