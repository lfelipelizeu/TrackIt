import { PageTitle, Warning } from '../../styles/MainPageStyles.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function Today () {
    dayjs.locale('pt-br')

    return (
        <>
            <PageTitle>{dayjs().format('dddd, DD/MM')}</PageTitle>
        </>
    );
}