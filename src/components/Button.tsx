import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppProvider";
import {
  iconArrow,
  iconArrowBlack,
  iconClose,
  iconCloseBlack,
} from "../utils/IconsUrls";
import lightOrDark from "../utils/CheckColorLightOrDark";

interface PropsButton {
  bgColor: string;
}

const Container = styled.div<PropsButton>`
  display: flex;
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
    transition: 0.7s;
    &:focus {
      outline: none;
    }
    &.icon-close {
      &:hover {
        transition: 0.7s;
        transform: rotate(180deg);
      }
    }
  }
`;

function Button() {
  const { isOpen, handleClickButton, bgColor } = useContext(AppContext);
  const isDarkColor = lightOrDark(bgColor);

  return (
    <Container bgColor={bgColor}>
      <button
        data-testid="button-bcontact"
        className={isOpen ? "icon-close" : "icon"}
        type="button"
        onClick={handleClickButton}
      >
        {isOpen && isDarkColor === "dark" && (
          <img alt="Arrow Icon" src={iconClose} />
        )}
        {isOpen && isDarkColor === "light" && (
          <img alt="Arrow Icon" src={iconCloseBlack} />
        )}
        {!isOpen && isDarkColor === "dark" && (
          <img alt="Arrow Icon" src={iconArrow} />
        )}
        {!isOpen && isDarkColor === "light" && (
          <img alt="Arrow Icon" src={iconArrowBlack} />
        )}
      </button>
    </Container>
  );
}

export default Button;
