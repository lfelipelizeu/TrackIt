import { PageTitle } from '../../styles/MainPageStyles.js';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import { getDailyHabitsHistory } from '../../service/trackit.js';
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './custom-calendar.css';
import 'dayjs/locale/pt-br';

export default function History () {
    const { user } = useContext(UserContext);
    const [dailyHabitsHistory, setDailyHabitsHistory] = useState([]);
    const datesHistory = dailyHabitsHistory.map((day) => day.day);

    useEffect(() => {
        getDailyHabitsHistory(user.token, setDailyHabitsHistory);
    },[]);

    return (
        <>
            <PageTitle>Histórico</PageTitle>
            <Calendar
                locale='pt-br'
                calendarType='US'
                maxDate={new Date()}
                tileClassName={({ date }) => {
                        const index = datesHistory.indexOf(dayjs(date).format('DD/MM/YYYY'));

                        if (index !== -1) {
                            const doneHabitsBoolean = dailyHabitsHistory[index].habits.map((habit) => habit.done);
                            
                            if (doneHabitsBoolean.some((item) => item === false)) {
                                return 'not-all-habits-done';
                            } else {
                                return 'all-habits-done';
                            }
                        }
                    }
                }
            />
        </>
    );
}