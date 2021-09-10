import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../styles/Button.js';
import { Input } from '../../styles/Input.js';

export default function CreateHabit ({ setCreatingHabit }) {
    const weekdays = ["D","S","T","Q","Q","S","S"];

    return (
        <Box>
            <Input type="text" placeholder="nome do hábito" />
            <Weekdays>
                {weekdays.map((weekday, index) => <Weekday key={index} day={weekday} />)}
            </Weekdays>
            <Buttons setCreatingHabit={setCreatingHabit} />
        </Box>
    );
}

function Weekday ({ day }) {
    const [selected, setSelected] = useState(false);

    function selectDay () {
        selected ? setSelected(false):setSelected(true);
    }

    return (
        <Day selected={selected} onClick={selectDay}>{day}</Day>
    );
}

function Buttons ({ setCreatingHabit }) {
    return (
        <ButtonsBox>
            <CancelButton onClick={() => setCreatingHabit(false)}>Cancelar</CancelButton>
            <Button>Salvar</Button>
        </ButtonsBox>
    );
}

const Box = styled.div`
    width: 100%;
    background-color: #ffffff;
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