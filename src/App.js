import Pokemon from "./components/User";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [backUpPokemon, setBackUpPokemon] = useState([]);
  //Load the pokemons from the API
  useEffect(() => {
    try {
      let fetchPokemon = async function () {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        console.log(response.data.results);
        setPokemons(response.data.results);
        setBackUpPokemon(response.data.results);
      };
      fetchPokemon();
    } catch (err) {
      console.log(err);
    }
  }, []);
  

  const buscarPokemon = function (event) {
    let pokemonArray = [...backUpPokemon];
    pokemonArray = pokemonArray.filter((pokemon) => {
      let full_name = `${pokemon.name}`;
      return (
        full_name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setPokemons(pokemonArray);
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col xs={2} className="d-flex justify-content-end">
            <Form.Label className=".col-form-label-lg">Buscar un Pokemon:</Form.Label>
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              onChange={buscarPokemon}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="pokemon-container m-5">
            {pokemons.map((pokemon) => {
              return <Pokemon key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
