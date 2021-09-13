import { Warning } from '../../styles/MainPageStyles.js';

import { useContext } from 'react';

import UserContext from '../../contexts/UserContext.js';
import TodayHabitsListContext from '../../contexts/TodayHabitsListContext.js';

import TodayHabit from './TodayHabit.js';

export default function TodayHabits () {
    const { user } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(TodayHabitsListContext);

    return (
        <>
            {todayHabitsList.length > 0 ? todayHabitsList.map((todayHabit, index) => <TodayHabit key={index} token={user.token} todayHabit={todayHabit} setTodayHabitsList={setTodayHabitsList} />):<NoTodayHabit />}
        </>
    );
}

function NoTodayHabit () {
    return (
        <Warning>Você não tem nenhum hábito programado para hoje!</Warning>
    );
}