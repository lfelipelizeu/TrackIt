import styled from 'styled-components';

import { useContext } from 'react';

import UserContext from '../contexts/UserContext.js';

export default function Header () {
    const { user } = useContext(UserContext);

    return (
        <Top>
            <Title>TrackIt</Title>
            <Profile>
                <Photo src={user?.image} />
            </Profile>
        </Top>
    );
}

const Top = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Title = styled.h1`
    font-family: Playball;
    color: #ffffff;
    font-size: 45px;
`;

const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const Photo = styled.img`
    height: 100%;
`;