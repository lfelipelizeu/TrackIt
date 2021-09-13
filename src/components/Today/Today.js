import styled from 'styled-components';
import { useState } from 'react';
import TodayHabits from './TodayHabits.js';
import HabitsCounter from './HabitsCounter.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function Today () {
    dayjs.locale('pt-br');
    const [todayHabitsList, setTodayHabitsList] = useState([]);

    return (
        <>
            <PageTitle>{dayjs().format('dddd, DD/MM')}</PageTitle>
            <HabitsCounter />
            {<TodayHabits todayHabitsList={todayHabitsList} setTodayHabitsList={setTodayHabitsList} />}
        </>
    );
}

const PageTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 25px;
    color: #126BA5;
    letter-spacing: 0.02em;
    margin-bottom: 5px;
`;