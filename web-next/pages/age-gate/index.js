import React, { useState, useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { LogoCircleWhiteTransparent } from "components/Icons";
import story from "./messages";

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
  const findMessageById = useCallback((messageId) => {
    if (!story) throw '"story" must be defined.';
    let message = story.find((message) => message.mid === messageId);
    console.log("story : ", story);
    console.log("message : ", message);
    return message;
  });
  const [currentMessage, setMessage] = useState(findMessageById(1));
  return (
    <Content>
      <Container>
        <MessageContainer>
          <MessageHeader>
            <Logo />
          </MessageHeader>
          <Message>{currentMessage.message}</Message>
          <MessageFooter>
            {currentMessage.options.length > 0 && (
              <ButtonGroup>
                {currentMessage.options.map((option) => (
                  <Button>{option.label}</Button>
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
