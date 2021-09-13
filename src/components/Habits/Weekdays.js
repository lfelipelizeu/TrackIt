import styled from 'styled-components';

export default function Weekdays ({ selectedDays, setSelectedDays, disable }) {
    const weekdays = ["D","S","T","Q","Q","S","S"];

    return (
        <WeekdaysList>
            {weekdays.map((weekday, index) => 
                <Weekday
                    key={index}
                    id={index}
                    day={weekday}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    disable={disable}
                />)}
        </WeekdaysList>
    );
}

function Weekday ({ id, day, selectedDays, setSelectedDays, disable }) {
    function selectDay (id) {
        if (!disable) {
            setSelectedDays(selectedDays.includes(id) ? selectedDays.filter((selectedDay) => selectedDay !== id):[...selectedDays, id]);
        }
    }

    return (
        <Day selected={selectedDays.includes(id)} onClick={() => selectDay(id)}>
            {day}
        </Day>
    );
}

const WeekdaysList = styled.div`
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