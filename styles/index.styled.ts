import styled from "styled-components";
import { breakpoints, colors } from "../styles/variables.styled";

export const LanguagePopup = styled.div`
    background-color: ${colors.primaryText};
    width: 3.3rem;
    height: 4.1rem;
    position: absolute;
    right: 3rem;
    border-radius: 0.5rem;
    top: 2rem;
    z-index: 2;
    visibility: hidden;
    &.active {
        visibility: visible;
    }
    @media (min-width: ${breakpoints.md}) {
        top: 2rem;
        height: 4.5rem;
        width: 3.3rem;
        right: 3rem;
        display: block;
    }
`;
export const PDFIcon = styled.img`
    width: 57px;
`;

export const PDFLink = styled.a`
    position: absolute;
    top: -0.95rem;
    right: 5rem;
    transition: filter 0.3s;
    &:hover {
        filter: none;
    }
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            filter: brightness(80%);
        }
    }
`;