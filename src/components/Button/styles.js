import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #000;
    border: none;
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    padding: .5rem 1.5rem;
    min-width: 120px;
    width: 100%;

    &:hover{
        background-color: #565656;
    }

    ${({variant}) => variant != "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #e4105d;

        &::after {
            contant: '',
            position: absolute,
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
