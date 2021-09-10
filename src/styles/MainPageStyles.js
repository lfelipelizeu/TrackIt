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
    height: 100px;
    background-color: red;
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