import styled from 'styled-components';
import { getTodayHabits } from '../../service/trackit.js';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';

export default function TodayHabits () {
    const { user } = useContext(UserContext);
    const [todayHabitsList, setTodayHabitsList] = useState([]);

    useEffect(() => {
        getTodayHabits(user.token, setTodayHabitsList);
    },[]);

    return (
        <>
            {todayHabitsList.map((todayHabit, index) => <TodayHabit key={index} todayHabit={todayHabit} />)}
        </>
    );
}

function TodayHabit ({ todayHabit }) {
    const { id, name, done, currentSequence, highestSequence } = todayHabit;

    return (
        <HabitBox>
            <HabitInfo>
                <Name>{name}</Name>
                <Sequence>Sequência atual: {`${currentSequence} ${currentSequence > 1 ? "dias":"dia"}`}</Sequence>
                <Sequence>Seu recorede: {`${highestSequence} ${highestSequence > 1 ? "dias":"dia"}`}</Sequence>
            </HabitInfo>
            <ion-icon name="checkbox"></ion-icon>
        </HabitBox>
    )
}

const HabitBox = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 70px;
        color: #ebebeb;
    }
`;

const HabitInfo = styled.div``;

const Name = styled.h3`
    font-size: 23px;
    margin-bottom: 10px;
`;

const Sequence = styled.p`
    font-size: 15px;
    margin-bottom: 3px;
`;