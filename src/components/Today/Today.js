import styled from 'styled-components';

import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTodayHabits } from '../../service/trackit.js';

import TodayHabitsListContext from '../../contexts/TodayHabitsListContext.js';
import UserContext from '../../contexts/UserContext.js';

import TodayHabits from './TodayHabits.js';
import HabitsCounter from './HabitsCounter.js';
import Loading from '../Loading.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function Today () {
    const { user } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(TodayHabitsListContext);
    const history = useHistory();
    dayjs.locale('pt-br');

    useEffect(() => {
        if (!user) return history.push('/');
        getTodayHabits(user.token, setTodayHabitsList);
    });

    return (
        <>
            <PageTitle>{dayjs().format('dddd, DD/MM')}</PageTitle>
            <HabitsCounter />
            {todayHabitsList === null ? <Loading />:<TodayHabits />}
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