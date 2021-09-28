import styled from "styled-components";
import colors from "../../../styles/colors";

export const FooterContainer = styled.footer`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 3.125rem;
    background-color: ${colors.blue};
    `

export const FooterLogoContainer = styled.div`
    display: flex;
    background-color: ${colors.darkBlue};
    width: 28.5%;
`

export const FooterLogo = styled.img`
    display: flex;
    margin-left: auto;
    margin: 0.688rem 2.75rem 0.688rem auto;    
`

export const Copyright = styled.p`
    color: ${colors.white};
    margin-top: 1.063rem;
    margin-bottom: 1.063rem;
    margin-left: 2.188rem;
`
