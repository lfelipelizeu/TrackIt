import { Warning } from '../../styles/MainPageStyles.js';

import Habit from './Habit.js';

export default function HabitsList ({ list, setHabitsList }) {
    return (
        <>
            {list.length > 0 ? list.map((item,index) => <Habit key={index} setHabitsList={setHabitsList} habit={item} />):<NoCreatedHabit />}
        </>
    );
}

function NoCreatedHabit () {
    return (
        <Warning>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Warning>
    );
}