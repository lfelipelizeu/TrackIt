import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../styles/Button.js';
import { PageTitle, Warning } from '../../styles/MainPageStyles.js';
import CreateHabit from './CreateHabit.js';

export default function Habits () {
    const [creatingHabit, setCreatingHabit] = useState(false);

    return (
        <>
            <Title setCreatingHabit={setCreatingHabit} />
            {creatingHabit ? <CreateHabit setCreatingHabit={setCreatingHabit} /> :""}
            <Warning>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Warning>
        </>
    );
}

function Title ({ setCreatingHabit }) {
    function createHabit () {
        setCreatingHabit(true);
    }

    return (
        <PageTitle>
            Meus hábitos
            <Button onClick={createHabit}>+</Button>
        </PageTitle>
    );
}