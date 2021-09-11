import styled from 'styled-components';

const PageTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 25px;
    color: #126BA5;
    letter-spacing: 0.02em;
    margin-bottom: 30px;
`;

const HabitBox = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    position: relative;
`;

const Warning = styled.p`
    font-size: 17px;
    letter-spacing: 0.02em;
`;

export {
    PageTitle,
    HabitBox,
    Warning
}