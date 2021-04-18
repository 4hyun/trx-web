import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.footer`
  ${tw`w-full bg-tr-white`}
  /* Temp Styles */
  top: 100vh;
  min-height: 200px;
`;

const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};

export default Footer;
