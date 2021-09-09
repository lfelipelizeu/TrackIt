import { Link } from 'react-router-dom';
import { Image, Container } from '../styles/InitialPage.js'
import Logo from '../assets/images/logo.svg';
import { Input } from '../styles/Input.js';
import { Button } from '../styles/Button.js';

export default function SignUp () {
    return (
        <Container>
            <Image src={Logo} />
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Input type="text" placeholder="nome" />
            <Input type="url" placeholder="foto" />
            <Button>Cadastrar</Button>
            <Link to='/'>
                Já tem uma conta? Faça login!
            </Link>
        </Container>
    );
}