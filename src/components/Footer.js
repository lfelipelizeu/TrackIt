import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import TodayHabitsListContext from '../contexts/TodayHabitsListContext.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer () {
    const { todayHabitsList } = useContext(TodayHabitsListContext);
    const habitsDone = todayHabitsList === null ? []:todayHabitsList.filter((todayHabit) => todayHabit.done);

    return (
        <Bottom>
            <Link to="/habitos">
                Hábitos
            </Link>
            <Link to="/hoje">
                <CircularButton>
                    <CircularProgressbar
                        value={habitsDone.length === 0 ? 0:habitsDone.length/todayHabitsList.length}
                        maxValue={1}
                        text={`Hoje`}
                        styles={{
                            trail: {
                                stroke: 'transparent',
                            },

                            path: {
                                stroke: '#ffffff',
                            },

                            text: {
                                fontSize: '23px',
                                fill: '#ffffff',
                            }
                        }}
                    />
                </CircularButton>
            </Link>
            <Link to="/historico">
                Histórico
            </Link>
        </Bottom>
    );
}

const Bottom = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    a {
        font-size: 23px;
        color: #52b6ff;
        text-decoration: none;
    }
`;

const CircularButton = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    background-color: #52b6ff;
    margin-bottom: 40px;
`;