import styled from 'styled-components';
import { sendHabitToServer, getHabits } from '../../service/trackit.js';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import CreateHabitContext from '../../contexts/CreateHabitContext.js';
import { Button } from '../../styles/Button.js';
import { Input } from '../../styles/Input.js';
import Loader from "react-loader-spinner";

export default function CreateHabit ({ setCreatingHabit, setHabitsList }) {
    const { user } = useContext(UserContext);
    const { newHabit, setNewHabit } = useContext(CreateHabitContext);
    const weekdays = ["D","S","T","Q","Q","S","S"];
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
                <Weekdays>
                    {weekdays.map((weekday, index) => 
                        <Weekday
                            key={index}
                            id={index}
                            day={weekday}
                            selectedDays={selectedDays}
                            setSelectedDays={setSelectedDays}
                            disable={disable}
                        />)}
                </Weekdays>
                <Buttons
                    cancelCreation={cancelCreation}
                    disable={disable}
                />
            </form>
        </Box>
    );
}

function Weekday ({ id, day, selectedDays, setSelectedDays, disable }) {

    function selectDay (id) {
        if (!disable) {
            setSelectedDays(selectedDays.includes(id) ? selectedDays.filter((selectedDay) => selectedDay !== id):[...selectedDays, id]);
        }
    }

    return (
        <Day selected={selectedDays.includes(id)} onClick={() => selectDay(id)}>{day}</Day>
    );
}

function Buttons ({ createHabit, cancelCreation, disable }) {
    return (
        <ButtonsBox>
            <CancelButton onClick={cancelCreation} disabled={disable}>Cancelar</CancelButton>
            <Button type="submit" disabled={disable}>{disable ? <Loader type="ThreeDots" height={35} width={50} color="#ffffff" />:"Salvar"}</Button>
        </ButtonsBox>
    );
}

const Box = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 30px;
`;

const Weekdays = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    background-color: ${({ selected }) => selected ? '#cfcfcf':'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${({ selected }) => selected ? '#ffffff':'#dbdbdb'};
    margin-right: 5px;
`;

const ButtonsBox = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        height: 100% !important;
        font-size: 16px;
        padding: 0 15px;
    }
`;

const CancelButton = styled.button`
    background-color: transparent;
    border: none;
    color: #52b6ff;
`;