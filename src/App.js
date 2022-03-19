import User from "./Prueba.jsx";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [backupUsers, setBackupUsers] = useState([]);

    useEffect(() => {
        try {
            let fetchUsers = async function () {
                const response = await axios.get(
                    "https://reqres.in/api/users?per_page=12"
                );
                console.log(response.data.data);
                setUsers(response.data.data);
                setBackupUsers(response.data.data);
            };
        fetchUsers();
        } catch (err) {
            console.log(err);
        }
    }, []);
    const buscarUsuario = function (event){
        let usersArray = [...backupUsers];
        console.log(event.target.value);
        usersArray = usersArray.filter((user) => {
            let fullName = `${user.first_name} ${user.last_name}`;
            return fullName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        /* console.log(usersArray); */
        setUsers(usersArray);
    };
    return (
    <Container className="mt-5">
        <Form>
            <Row>
                <Col xs={2} className="d-flex justify-content-end">
                    <Form.Label>Buscar un usuario</Form.Label>
                </Col>
                <Col xs={10}>
                    <Form.Control type="text" 
                    placeholder="Ingresa el nombre de usuario"
                    onChange={buscarUsuario}/>
                </Col>
            </Row>
        </Form>
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="pokemon-container m-5">
                    {users.map((user) => {
                    return <User key={user.id} user={user} />;
                    })}
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default App;