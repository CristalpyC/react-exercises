import styled from "styled-components";

export const Card = styled.div`
    background-color: rgba(9, 9, 58, 0.438);
    padding: 1.5rem;
    max-width: 50%;
    margin: 0 15px 15px 15px;
    transition: ease-in-out 1s;
    box-shadow: 0px 1px 13px navy;
    text-align: left;

    &:hover{
        transform: scale(1.1);
    }
`