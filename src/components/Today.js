import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header.js';
import Footer from './Footer.js';

export default function Today () {
    return (
        <BrowserRouter>
            <Header />

            <Container>
            </Container>

            <Footer />
        </BrowserRouter>
    );
}

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
`;