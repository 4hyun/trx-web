import React, { useState, useEffect, useCallback } from "react";
import { useAgeGate } from "components/AgeGate/context";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import { LogoCircleWhiteTransparent } from "components/Icons";
import messages, {
  handleMessageAction,
  getAgeCheckValue,
  getMessageById,
  setAgeCheckValue,
} from "components/AgeGate/messages";

const Logo = styled(LogoCircleWhiteTransparent)`
  width: 96px;
  height: 96px;
`;

const Content = styled.div`
  ${tw`fixed inset-0 z-20`}
`;

export const GridLayout = styled.div`
  ${tw`w-full h-full grid grid-cols-12`}
`;

const MessageContainer = styled.div`
  ${tw`col-start-2 col-span-10 lg:(col-end-6)`}
  ${tw`flex flex-col justify-center space-y-8`}
`;

const MessageHeader = styled.div``;
const MessageFooter = styled.div``;

const Message = styled.p`
  ${tw`uppercase text-tr-white font-accent-2`}
  font-size:48px;
  line-height: 52px;
  @media (min-width: 768px) {
    font-size: 96px;
    line-height: 104px;
  }
`;

const ButtonGroup = tw.div`flex w-full space-x-6`;
const Button = styled.button`
  ${tw`bg-tr-white px-4 py-1 rounded-md lg:(px-6 pt-3 pb-3 rounded-2xl)`}
  ${tw`font-accent font-bold text-tr-black text-2xl tracking-tight whitespace-pre lg:(text-5xl tracking-normal)`}
  ${tw`focus:outline-none`}
  ${tw`transform hover:-translate-y-2 transition-transform outline-none`}
`;

const processNewAgeCheck = async () => {
  let ageCheckValue = await setAgeCheckValue();
  return ageCheckValue;
};

const cbBeforeNextMessage = (actionId) => async () => {
  switch (actionId) {
    case 1: {
      // console.log("cbBeforeNextMessage triggered");
      let ageCheckValue = processNewAgeCheck();
      return ageCheckValue;
    }
    case 2: {
      return;
    }
    case 3: {
      return;
    }
    case 4: {
      return;
    }
    case 5: {
      return;
    }
  }
};

const AgeGatePage = () => {
  const router = useRouter();
  const [ageCheckValue, setAgeCheckValue] = useAgeGate();
  const [currentMessage, setMessage] = useState(null);
  const handleActionButtonClick = useCallback(async (action) => {
    if (action.next.pass) {
      try {
        setAgeCheckValue(getAgeCheckValue());
      } catch (error) {
        console.log(error);
      }
      return enterHome();
    }
    let message = await handleMessageAction(
      action,
      cbBeforeNextMessage(action.a_id)
    );
    setMessage(message);
  });
  const enterHome = () => {
    router.replace("/");
  };
  useEffect(async () => {
    let ageCheckValue = await getAgeCheckValue();
    if (ageCheckValue) {
      setAgeCheckValue(ageCheckValue);
      return router.replace("/");
    }
    if (!ageCheckValue && !currentMessage) {
      setMessage(getMessageById(1));
    }
  }, []);
  return (
    <Content>
      <GridLayout>
        {currentMessage && (
          <MessageContainer>
            <MessageHeader>
              <Logo />
            </MessageHeader>
            <Message>{currentMessage.message}</Message>
            <MessageFooter>
              {currentMessage && currentMessage.actions.length > 0 && (
                <ButtonGroup>
                  {currentMessage.actions.map((action) => (
                    <Button
                      key={action.a_id}
                      onClick={() => handleActionButtonClick(action)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </ButtonGroup>
              )}
            </MessageFooter>
          </MessageContainer>
        )}
      </GridLayout>
    </Content>
  );
};

export default AgeGatePage;
