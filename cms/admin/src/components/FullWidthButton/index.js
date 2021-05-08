import styled, { css } from "styled-components";
import { Button as Base } from "@buffetjs/core";

const Button = styled(Base)`
  color: ${({ textcolor }) => textcolor || "initial"};
  background: ${({ background }) => background || "initial"};
  border: ${({ border }) => border || "none"};
  width: 100%;
  text-transform: ${({ textTransform }) => textTransform};
  :hover {
    background: ${({ hoverbackground }) => hoverbackground || "initial"};
  }
  :active {
    background: ${({ hoverbackground, background }) =>
      (hoverbackground && background && background) || "initial"};
  }
`;

Button.defaultProps = {
  color: "primary",
  type: "button",
  textTransform: "none",
};

export default Button;
