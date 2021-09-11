import styled from 'styled-components';
import { HabitBox } from '../../styles/MainPageStyles.js';
import TrashIcon from '../../assets/icons/trash-outline.svg';

export default function HabitsList ({ list }) {
    return (
        <>
            {list.map((item,index) => <Habit key={index} habit={item} />)}
        </>
    );
}

function Habit ({ habit }) {
    const { name, days } = habit;
    const weekdays = ["D","S","T","Q","Q","S","S"];

    return (
        <HabitBox>
            <Name>{name}</Name>
            <TrashCan src={TrashIcon} />
            <Weekdays>
                {weekdays.map((day,index) => <Day key={index} selected={days.includes(index)}>{day}</Day>)}
            </Weekdays>
        </HabitBox>
    );
}

const Name = styled.h3`
    font-size: 23px;
    margin-bottom: 10px;
`;

const Weekdays = styled.div`
    display: flex;
    margin-bottom: 5px;
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

const TrashCan = styled.img`
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
`;