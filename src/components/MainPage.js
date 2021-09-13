import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import TodayHabitsListContext from '../contexts/TodayHabitsListContext.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Today from './Today/Today.js';
import Habits from './Habits/Habits.js';
import History from './History.js';

export default function MainPage () {
    const [todayHabitsList, setTodayHabitsList] = useState([]);

    return (
        <TodayHabitsListContext.Provider value={{ todayHabitsList, setTodayHabitsList }}>
            <Header />

            <Container>
                <Route path='/hoje' exact>
                    <Today />
                </Route>
                <Route path='/habitos' exact>
                    <Habits />
                </Route>
                <Route path='/historico' exact>
                    <History />
                </Route>
            </Container>

            <Footer />
        </TodayHabitsListContext.Provider>
    );
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #F2F2F2;
    padding: 90px 15px 120px;
    overflow: scroll;

    button {
        width: auto !important;
        height: 100% !important;
        padding: 0 10px;
    }
`;