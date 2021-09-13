import styled from 'styled-components';
import { useContext } from 'react';
import TodayHabitsListContext from '../../contexts/TodayHabitsListContext.js';

export default function HabitsCounter () {
    const { todayHabitsList } = useContext(TodayHabitsListContext);
    const habitsDone = todayHabitsList.filter((todayHabit) => todayHabit.done);

    function calculatePercentage () {
        const num = habitsDone.length/todayHabitsList.length;

        return Math.round(num*100);
    }

    return (
        <Counter concludedHabit={habitsDone.length > 0}>{habitsDone.length > 0 ? `${calculatePercentage()}% dos hábitos concluídos`:"Nenhum hábito concluído ainda"}</Counter>
    );
}

const Counter = styled.p`
    font-size: 20px;
    color: ${({ concludedHabit }) => concludedHabit ? "#8fc549":"#bababa"};
    margin-bottom: 30px;
`;