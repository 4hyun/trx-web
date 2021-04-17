import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AvailableCategories from "./AvailableCategories";

export const LayoutContainer = styled.div`
  ${tw`flex flex-col justify-center space-y-7 col-start-7 col-end-12`}
`;

const Container = styled.div`
  ${tw`rounded-3xl bg-tr-black bg-opacity-90 space-y-3`}
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    min-height: 500px;
  }
`;

const mockData = {
  title: "Tunaaaa Tiger",
  description:
    "This potent strain is our Tiger Cake Menthol crossed with Layer Cake and offers a creamy vanilla flavour profile. With hints of gas and menthol, this strain is known for its powerful psychedelic effects.",
  availble_categories: [],
};

const Title = styled.h2`
  ${tw`font-accent font-bold text-3xl text-tr-white`}
  @media (min-width: 768px) {
    padding: 24px 0px 10px;
  }
`;
const Description = styled.p`
  ${tw`font-accent text-tr-white`}
  font-size: 24px;
  line-height: 140%;
`;
const CollectionSingleView = ({ selected }) => {
  return (
    <Container>
      <Title>{mockData.title}</Title>
      <Description>{mockData.description}</Description>
      {/* <AvailableCategories></AvailableCategories> */}
    </Container>
  );
};

CollectionSingleView.defaultProps = {
  selected: {
    title: mockData.title,
    description: mockData.description,
    available_categories: [...mockData.availble_categories],
  },
};

export default CollectionSingleView;
