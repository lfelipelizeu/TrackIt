import styled from 'styled-components';
import Loader from "react-loader-spinner";

export default function Loading () {
    return (
        <LoadingBox>
            <Loader
                type="TailSpin"
                color="#52b6ff"
                height={150}
                width={150}
            />
        </LoadingBox>
    );
}

const LoadingBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;