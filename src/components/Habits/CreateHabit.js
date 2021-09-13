import styled from 'styled-components';
import { Input } from '../../styles/Input.js';

import { sendHabitToServer, getHabits } from '../../service/trackit.js';
import { useState, useContext } from 'react';

import UserContext from '../../contexts/UserContext.js';
import CreateHabitContext from '../../contexts/CreateHabitContext.js';

import Weekdays from './Weekdays.js';
import Buttons from './Buttons.js';

export default function CreateHabit ({ setCreatingHabit, setHabitsList }) {
    const { user } = useContext(UserContext);
    const { newHabit, setNewHabit } = useContext(CreateHabitContext);
    const [habitName, setHabitName] = useState(newHabit.name);
    const [selectedDays, setSelectedDays] = useState(newHabit.days);
    const [disable, setDisable] = useState(false);

    function treatSuccess () {
        setCreatingHabit(false);
        setNewHabit({name: "", days: []});
        getHabits(user.token, setHabitsList);
    }

    function treatError (error) {
        alert("Ocorreu algum erro! Tente novamente.");
        setDisable(false);
    }

    function createHabit (event) {
        event.preventDefault();

        const body = {
            name: habitName,
            days: selectedDays
        };
        
        setDisable(true);
        sendHabitToServer(user.token, body, treatSuccess, treatError);
    }

    function cancelCreation () {
        setNewHabit({
            name: habitName,
            days: selectedDays
        });
        setCreatingHabit(false);
    }

    return (
        <Box>
            <form onSubmit={createHabit}>
                <Input type="text" placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)} disabled={disable} required /> 
                <Weekdays
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    disabled={disable}
                />
                <Buttons
                    cancelCreation={cancelCreation}
                    disable={disable}
                />
            </form>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 30px;
`;