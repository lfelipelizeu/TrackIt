import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <Bottom>
            <Link to="/habitos">
                Hábitos
            </Link>
            <Link to="/hoje">
                <CircularButton>Hoje</CircularButton>
            </Link>
            <Link to="/historico">
                Histórico
            </Link>
        </Bottom>
    );
}

const Bottom = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        font-size: 23px;
        color: #52b6ff;
        text-decoration: none;
    }
`;

const CircularButton = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    background-color: #52b6ff;
    color: #ffffff;
    font-size: 23px;
    margin-bottom: 40px;
`;