import React from 'react';
import { Copyright, FooterContainer, FooterLogo, FooterLogoContainer } from './styles';
import { LogoHeader } from '../../../assets/images';


function Footer(): JSX.Element {
    
    return (
    <FooterContainer>
        <FooterLogoContainer>
            <FooterLogo src={LogoHeader}  />
        </FooterLogoContainer>
        <Copyright>Agência N1 - Todos os direitos reservados</Copyright>
    </FooterContainer>
    );
}

export default Footer;