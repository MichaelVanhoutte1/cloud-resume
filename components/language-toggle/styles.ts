import styled from "styled-components";
import { breakpoints } from "../../styles/variables.styled";

export const LanguageIcon = styled.img`
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 3rem;
    transition: filter 0.3s;
    @media (min-width: ${breakpoints.md}) {
        right: 3rem;
        width: 30px;
        &:hover {
            filter: brightness(80%)
        }
    }
`;
