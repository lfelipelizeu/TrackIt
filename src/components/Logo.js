import { Image, Title } from '../styles/LogoArea.js'
import LogoImage from '../assets/images/logo.png';

export default function Logo () {
    return (
        <>
            <Image src={LogoImage} />
            <Title>TrackIt</Title>
        </>
    );
}