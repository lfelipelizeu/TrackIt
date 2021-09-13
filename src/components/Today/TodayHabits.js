import styled from 'styled-components';
import { getTodayHabits, checkTodayHabit } from '../../service/trackit.js';
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
            {todayHabitsList.map((todayHabit, index) => <TodayHabit key={index} token={user.token} todayHabit={todayHabit} setTodayHabitsList={setTodayHabitsList} />)}
        </>
    );
}

function TodayHabit ({ token, todayHabit, setTodayHabitsList}) {
    const { id, name, done, currentSequence, highestSequence } = todayHabit;

    function treatSuccess () {
        getTodayHabits(token, setTodayHabitsList);
    }

    return (
        <HabitBox>
            <HabitInfo>
                <Name>{name}</Name>
                <p>Sequência atual: <Sequence done={done}>{`${currentSequence} ${currentSequence > 1 ? "dias":"dia"}`}</Sequence></p>
                <p>Seu recorde: <Sequence>{`${highestSequence} ${highestSequence > 1 ? "dias":"dia"}`}</Sequence></p>
            </HabitInfo>
            <CheckIcon done={done}>
                <ion-icon name="checkbox" onClick={() => checkTodayHabit(id, token, treatSuccess)}></ion-icon>
            </CheckIcon>
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

    p {
        font-size: 13px;
        margin-bottom: 3px;
    }
`;

const HabitInfo = styled.div``;

const Name = styled.h3`
    font-size: 23px;
    margin-bottom: 10px;
`;

const Sequence = styled.span`
    color: ${({ done }) => done ? "#8fc549":""};
`;

const CheckIcon = styled.div`
    ion-icon {
        font-size: 70px;
        color: ${({ done }) => done ? "#8fc549":"#ebebeb"};
    }
`;