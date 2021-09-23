import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  padding-top: 10px;
`;

const Heading = styled.h2``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const XtractsAppSection = () => {
  return (
    <Container>
      <Heading>Xtracts Apps</Heading>
      <Content>
        <ul>
          <li>
            <a href="https://label.app.tunaaaaroomxtracts.ca/" target="_blank">
              Label Maker
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default XtractsAppSection;
