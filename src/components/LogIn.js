import { Link } from 'react-router-dom';
import { Image, Container } from '../styles/InitialPage.js'
import Logo from '../assets/images/logo.svg';
import { Input } from '../styles/Input.js';
import { Button } from '../styles/Button.js';

export default function LogIn () {
    return (
        <Container>
            <Image src={Logo} />
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Button>Entrar</Button>
            <Link to='/cadastro'>
                Não tem uma conta? Cadastre-se!
            </Link>
        </Container>
    );
}