import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import { Input } from '../styles/Input.js';
import { Button } from '../styles/Button.js';

export default function LogIn () {
    return (
        <LogInArea>
            <Logo />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Button>Entrar</Button>
            <Link to='/cadastro'>
                Não tem uma conta? Cadastre-se!
            </Link>
        </LogInArea>
    );
}

const LogInArea = styled.main`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;

    a {
        color: #52B6FF;
        text-decoration: underline;
        margin-top: 25px;
    }
`;