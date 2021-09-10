import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import { getHabits } from '../../service/trackit.js';
import { Button } from '../../styles/Button.js';
import { PageTitle, Warning } from '../../styles/MainPageStyles.js';
import CreateHabit from './CreateHabit.js';
import HabitsList from './HabitsList.js';

export default function Habits () {
    const { user } = useContext(UserContext);
    const [creatingHabit, setCreatingHabit] = useState(false);
    const [habitsList, setHabitsList] = useState([]);

    useEffect(() => {
        getHabits(user.token, setHabitsList);
    },[]);

    return (
        <>
            <Title setCreatingHabit={setCreatingHabit} />
            {creatingHabit ? <CreateHabit setCreatingHabit={setCreatingHabit} setHabitsList={setHabitsList} /> :""}
            {habitsList.length > 0 ? <HabitsList list={habitsList} />:<NoCreatedHabit />}
        </>
    );
}

function Title ({ setCreatingHabit }) {
    function createHabit () {
        setCreatingHabit(true);
    }

    return (
        <PageTitle>
            Meus hábitos
            <Button onClick={createHabit}>+</Button>
        </PageTitle>
    );
}

function NoCreatedHabit () {
    return (
        <Warning>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Warning>
    );
}