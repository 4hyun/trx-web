import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { scrollbarStyles } from "components/Common/Styles";

const Column = styled.div`
  ${tw`flex flex-col space-y-4`}
  @media (min-width: 768px) {
    margin-top: 1.5rem !important;
  }
`;

const ScrollContainer = styled.div`
  @media (min-width: 768px) {
    /* height: 286.5px; */
    /* space between scrollbar */
    padding-right: 1rem;
  }
  /* ${tw`overflow-y-auto`} */
  & {
    ${scrollbarStyles}
  }
`;

const BlockTitle = styled.p`
  ${tw`text-tr-white font-accent font-bold text-3xl`}
`;

const List = styled.div`
  ${tw`grid grid-cols-3 gap-6 pb-10 md:(grid-rows-2)`}
  @media (min-width: 768px) {
    height: 150px;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    /* height: 100px; */
    ${tw`flex justify-center items-center rounded-full bg-tr-white font-accent font-bold text-xl py-2`}
  }
`;

const Category = ({ data }) => {
  return <Wrapper>{data.name}</Wrapper>;
};

const AvailableCategories = ({ categories }) => {
  console.log("AvailableCategories.props.categories : ", categories);
  return (
    <Column>
      <BlockTitle>Available as:</BlockTitle>
      <ScrollContainer>
        <List>
          {categories.map((categoryData) => (
            <Category data={categoryData} />
          ))}
        </List>
      </ScrollContainer>
    </Column>
  );
};

export default AvailableCategories;
