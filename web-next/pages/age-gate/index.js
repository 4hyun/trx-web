import React, { useState, useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { LogoCircleWhiteTransparent } from "components/Icons";
import messages, {
  handleMessageAction,
  getAgeCheckValue,
  getMessageById,
} from "./messages";

const Logo = styled(LogoCircleWhiteTransparent)`
  width: 96px;
  height: 96px;
`;

const Content = styled.div`
  ${tw`fixed inset-0 z-20`}
`;

const Container = styled.div`
  ${tw`w-full h-full grid grid-cols-12`}
`;

const MessageContainer = styled.div`
  ${tw`col-start-2 col-end-6`}
  ${tw`flex flex-col justify-center space-y-8`}
`;

const MessageHeader = styled.div``;
const MessageFooter = styled.div``;

const Message = styled.p`
  ${tw`uppercase text-tr-white font-accent-2`}
  @media(min-width: 768px) {
    font-size: 96px;
    line-height: 104px;
  }
`;

const ButtonGroup = tw.div`flex w-full space-x-6`;
const Button = styled.button`
  ${tw`bg-tr-white px-6 pt-3 pb-3 rounded-2xl`}
  ${tw`font-accent font-bold text-tr-black text-5xl`}
  ${tw`focus:outline-none`}
  ${tw`transform hover:-translate-y-2 transition-transform outline-none`}
`;

const AgeGatePage = () => {
  const [currentMessage, setMessage] = useState(getMessageById(1));
  return (
    <Content>
      <Container>
        <MessageContainer>
          <MessageHeader>
            <Logo />
          </MessageHeader>
          <Message>{currentMessage.message}</Message>
          <MessageFooter>
            {currentMessage?.actions?.length > 0 && (
              <ButtonGroup>
                {currentMessage.actions.map((action) => (
                  <Button>{action.label}</Button>
                ))}
              </ButtonGroup>
            )}
          </MessageFooter>
        </MessageContainer>
      </Container>
    </Content>
  );
};

export default AgeGatePage;
