import React from "react";
import styled from "styled-components";

export const Item = styled.li``;
const StyledList = styled.ul``;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
