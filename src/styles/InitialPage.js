import styled from 'styled-components';

const Image = styled.img`
    width: 55%;
    margin-top: 60px;
    margin-bottom: 35px;
`;

const Container = styled.main`
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