import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const LanguageIcon = styled.img`
    width: 20px;
`;

export const LanguageText = styled.p`
    width: 20px;
    margin: auto 0.3rem auto 0;
    font-weight: 600;
`;

export const LanguageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${colors.primary};
    margin: 0 auto;
    padding: 0.4rem;
    &:nth-child(odd) {
        border-radius: 0.5rem 0.5rem 0 0;
    }
    &:nth-child(even) {
        border-radius: 0 0 0.5rem 0.5rem;
    }
    @media (min-width: ${breakpoints.md}) {
        margin: 0 auto;
        padding: 0.5rem;
        &:nth-child(odd) {
            border-radius: 0.5rem 0.5rem 0 0;
        }
        &:nth-child(even) {
            border-radius: 0 0 0.5rem 0.5rem;
        }
        &:hover {
            cursor: pointer;
            background-color: ${colors.secondary};
            transition: background-color 0.5s;
            transition: color 0.3s;
            border: none;
            color: ${colors.primaryText};
        }
    }
    &.activeLanguage {
        background-color: ${colors.secondary};
        color: ${colors.primaryText};
        &:hover {
            filter: brightness(0.9);
            transition: filter 0.3s;
        }
    }
    [data-language-switcher="true"] {
        display: flex;
    }
`;
