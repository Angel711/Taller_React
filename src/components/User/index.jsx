import styles from "./User.module.css";
import { Card } from "react-bootstrap";
import React,{useEffect, useState} from 'react';
import axios from "axios";

function Pokemon(props) {
  const { pokemon } = props;
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    try {
      let infoPokemon = async function () {
        const response = await axios.get(pokemon.url);
        console.log(response.data);
        setPokemonData(response.data);
      }
      infoPokemon();
    } catch (error) {
      console.log(error);
    }
  }, [pokemon]);

  const capitalize = function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  pokemon.name = capitalize(pokemon.name);
  return (
    <Card className="text-white" bg="danger">
      <Card.Header> <strong>{pokemon.name}</strong> </Card.Header>
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
            <strong>ID: </strong>
            {`${pokemonData.id}`}
        </p>
        {/* <img src={`${pokemonData.sprites.front_default}`} alt="user-face" /> */}
        <p>
          <strong>Height: </strong>
          {`${pokemonData.height}`}</p>
        <p>
          <strong>Weight: </strong>
          {`${pokemonData.weight}`}
        </p>

      </Card.Body>
    </Card>
  );
}

export default Pokemon;
