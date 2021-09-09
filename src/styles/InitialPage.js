import styled from 'styled-components';

const Image = styled.img`
    width: 55%;
    margin-top: 60px;
    margin-bottom: 35px;
`;

const Container = styled.main`
    width: 100%;
    height: 100vh;
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

export {
    Image,
    Container
};