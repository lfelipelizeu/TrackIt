import { PageTitle } from '../../styles/MainPageStyles.js';
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './custom-calendar.css';

export default function History () {
    return (
        <>
            <PageTitle>Histórico</PageTitle>
            <Calendar
                locale='pt-br'
                calendarType='US'
                maxDate={new Date()}
            />
        </>
    );
}