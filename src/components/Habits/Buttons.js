import styled from 'styled-components';
import { Button } from '../../styles/Button.js';

import Loader from "react-loader-spinner";

export default function Buttons ({ cancelCreation, disable }) {
    return (
        <ButtonsBox>
            <CancelButton onClick={cancelCreation} disabled={disable}>Cancelar</CancelButton>
            <Button type="submit" disabled={disable}>{disable ? <Loader type="ThreeDots" height={35} width={50} color="#ffffff" />:"Salvar"}</Button>
        </ButtonsBox>
    );
}

const ButtonsBox = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        height: 100% !important;
        font-size: 16px;
        padding: 0 15px;
    }
`;

const CancelButton = styled.button`
    background-color: transparent;
    border: none;
    color: #52b6ff;
`;