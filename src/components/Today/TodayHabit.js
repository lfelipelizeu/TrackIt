import styled from 'styled-components';

import { getTodayHabits, checkTodayHabit } from '../../service/trackit.js';

export default function TodayHabit ({ token, todayHabit, setTodayHabitsList }) {
    const { id, done } = todayHabit;

    function treatSuccess () {
        getTodayHabits(token, setTodayHabitsList);
    }

    function changeTodayHabitStatus () {
        const type = done ? "uncheck":"check";

        checkTodayHabit(id, type,token, treatSuccess);
    }

    return (
        <HabitBox>
            <HabitInfo todayHabit={todayHabit} />
            <CheckIcon done={done}>
                <ion-icon name="checkbox" onClick={changeTodayHabitStatus}></ion-icon>
            </CheckIcon>
        </HabitBox>
    )
}

function HabitInfo ({ todayHabit }) {
    const { done, name, currentSequence, highestSequence } = todayHabit;
    return (
        <div>
            <Name>{name}</Name>
            <p>Sequência atual: <Sequence done={done}>{`${currentSequence} ${currentSequence > 1 ? "dias":"dia"}`}</Sequence></p>
            <p>Seu recorde: <Sequence higher={currentSequence === highestSequence}>{`${highestSequence} ${highestSequence > 1 ? "dias":"dia"}`}</Sequence></p>
        </div>
    );
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