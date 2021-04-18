import React from "react";
import styled from "styled-components";
import {
  IndicaLeaf as IndicaLeafSVG,
  SativaLeaf as SativaLeafSVG,
} from "components/Icons";
import tw from "twin.macro";

const IndicaLeaf = styled(IndicaLeafSVG)``;
const SativaLeaf = styled(SativaLeafSVG)``;

const Container = styled.div`
  ${tw`flex space-x-0.5 pb-1`}
`;

const Leaf = ({ leafType }) =>
  leafType === "i" ? <IndicaLeaf /> : <SativaLeaf />;

const IndicaSativaIndicator = ({ indica, sativa }) => {
  let leaves = [];
  for (let i = indica; i > 0; i--) {
    leaves.push("i");
  }
  for (let i = sativa; i > 0; i--) {
    leaves.push("s");
  }
  return (
    <Container>
      {leaves.map((leafType, i) => (
        <Leaf key={i} leafType={leafType} />
      ))}
    </Container>
  );
};

export default IndicaSativaIndicator;
