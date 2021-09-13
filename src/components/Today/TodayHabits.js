import styled from 'styled-components';
import { getTodayHabits, checkTodayHabit } from '../../service/trackit.js';
import { useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import TodayHabitsListContext from '../../contexts/TodayHabitsListContext.js';

export default function TodayHabits () {
    const { user } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(TodayHabitsListContext);

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

    function changeTodayHabitStatus () {
        const type = done ? "uncheck":"check";

        checkTodayHabit(id, type,token, treatSuccess);
    }

    return (
        <HabitBox>
            <HabitInfo>
                <Name>{name}</Name>
                <p>Sequência atual: <Sequence done={done}>{`${currentSequence} ${currentSequence > 1 ? "dias":"dia"}`}</Sequence></p>
                <p>Seu recorde: <Sequence higher={currentSequence === highestSequence}>{`${highestSequence} ${highestSequence > 1 ? "dias":"dia"}`}</Sequence></p>
            </HabitInfo>
            <CheckIcon done={done}>
                <ion-icon name="checkbox" onClick={changeTodayHabitStatus}></ion-icon>
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
    color: ${({ done, higher }) => done || higher ? "#8fc549":""};
`;

const CheckIcon = styled.div`
    ion-icon {
        font-size: 70px;
        color: ${({ done }) => done ? "#8fc549":"#ebebeb"};
    }
`;