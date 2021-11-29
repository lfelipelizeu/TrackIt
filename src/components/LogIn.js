import { Input } from '../styles/Input.js';
import { Button } from '../styles/Button.js';
import { Image, Container } from '../styles/InitialPage.js'

import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { logInTry } from '../service/trackit.js';

import UserContext from '../contexts/UserContext.js';

import Logo from '../assets/images/logo.svg';
import Loader from "react-loader-spinner";

export default function LogIn () {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const history = useHistory();

    function treatSuccess (response) {
        const user = response.data;

        setUser(user);
        history.push("/hoje");
    }

    function treatError (error) {
        const { status } = error.response;

        setDisable(false);

        if (status === 401) return alert("Usuário e/ou senha inválidos!");
        return alert("Preencha os campos corretamente!");
    }

    function logIn (event) {
        event.preventDefault();
        
        const user = {
            email,
            password
        }

        setDisable(true);
        logInTry(user, treatSuccess, treatError);
    }

    return (
        <Container>
            <Image src={Logo} />
            <form onSubmit={logIn}>
                <Input disabled={disable} type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input disabled={disable} type="password" placeholder="senha" alue={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit" disabled={disable}>{disable ? <Loader type="ThreeDots" height={45} color="#ffffff" />:"Entrar"}</Button>
            </form>
            <Link to={disable ? "/":"/cadastro"}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </Container>
    );
}