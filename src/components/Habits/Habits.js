import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import CreateHabitContext from '../../contexts/CreateHabitContext.js';
import { getHabits } from '../../service/trackit.js';
import { Button } from '../../styles/Button.js';
import { PageTitle } from '../../styles/MainPageStyles.js';
import CreateHabit from './CreateHabit.js';
import HabitsList from './HabitsList.js';
import Loading from '../Loading.js';

export default function Habits () {
    const { user } = useContext(UserContext);
    const [creatingHabit, setCreatingHabit] = useState(false);
    const [habitsList, setHabitsList] = useState(null);
    const [newHabit, setNewHabit] = useState({name: "", days: []});

    useEffect(() => {
        getHabits(user.token, setHabitsList);
    },[]);

    return (
        <CreateHabitContext.Provider value={{ newHabit, setNewHabit }}>
            <Title setCreatingHabit={setCreatingHabit} />
            {creatingHabit ? <CreateHabit setCreatingHabit={setCreatingHabit} setHabitsList={setHabitsList} /> :""}
            {habitsList === null ? <Loading />:<HabitsList token={user.token} list={habitsList} setHabitsList={setHabitsList} />}
        </CreateHabitContext.Provider>
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