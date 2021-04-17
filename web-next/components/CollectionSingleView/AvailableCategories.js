import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  @media (min-width: 768px) {
    ${tw`flex justify-center items-center rounded-3xl bg-tr-white`}
  }
`;

const List = styled.div`
  ${tw`grid grid-cols-3`}
`;

const Category = ({ data }) => {
  return <Wrapper>Name</Wrapper>;
};
const AvailableCategories = ({ categories }) => {
  return (
    <List>
      {categories.map((categoryData) => (
        <Category data={categoryData} />
      ))}
    </List>
  );
};

AvailableCategories.defaultProps = {};

export default AvailableCategories;
