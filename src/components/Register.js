import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import { Input } from '../styles/Input.js';
import { Button } from '../styles/Button.js';

export default function Register () {
    return (
        <RegisterArea>
            <Logo />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="nome" />
            <Input placeholder="foto" />
            <Button>Cadastrar</Button>
            <Link to='/'>
                Já tem uma conta? Faça login!
            </Link>
        </RegisterArea>
    );
}

const RegisterArea = styled.main`
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