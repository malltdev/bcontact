/* eslint-disable no-nested-ternary */
import { useContext } from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { AppContext } from "../context/AppProvider";
import iconArrow from "../icons/arrow.svg";
import iconArrowBlack from "../icons/arrowblack.svg";
import iconClose from "../icons/close.svg";
import lightOrDark from "../utils/CheckColorLightOrDark";

// eslint-disable-next-line no-use-before-define
const Container = styled.div<PropsButton>`
  button {
    width: 46px;
    height: 46px;
    border-radius: 46px;
    border: 0;
    cursor: pointer;
    background: ${(props) => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 20px;
    transition: 0.7s;
    &:hover {
      background: ${lighten(0.1, "#000000")};
    }
    &.icon-close {
      &:hover {
        transition: 0.7s;
        transform: rotate(180deg);
      }
    }
  }
`;

interface PropsButton {
  bgColor: string;
}

function Button() {
  const { isOpen, handleClickButton, bgColor } = useContext(AppContext);
  const isDarkColor = lightOrDark(bgColor);

  return (
    <Container bgColor={isOpen ? "#000000" : bgColor}>
      <button
        className={isOpen ? "icon-close" : "icon"}
        type="button"
        onClick={handleClickButton}
      >
        <img
          alt="Arrow Icon"
          src={
            isOpen
              ? iconClose
              : isDarkColor === "dark"
              ? iconArrow
              : iconArrowBlack
          }
        />
      </button>
    </Container>
  );
}

export default Button;
