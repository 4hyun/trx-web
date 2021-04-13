import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import { LogoCircleWhiteTransparent } from "components/Icons";
import messages, {
  handleMessageAction,
  getAgeCheckValue,
  getMessageById,
  setAgeCheckValue,
} from "./messages";

const Logo = styled(LogoCircleWhiteTransparent)`
  width: 96px;
  height: 96px;
`;

const Content = styled.div`
  ${tw`fixed inset-0 z-20`}
`;

const GridLayout = styled.div`
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

const processNewAgeCheck = async () => {
  let ageCheckValue = await setAgeCheckValue();
  return ageCheckValue;
};

const cbBeforeNextMessage = (actionId) => async () => {
  switch (actionId) {
    case 1: {
      console.log("cbBeforeNextMessage triggered");
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
  const [currentMessage, setMessage] = useState(null);
  const [ageCheckValue, setAgeCheckValue] = useState(null);
  const enterHome = () => {
    router.replace("/");
  };
  useEffect(async () => {
    let ageCheckValue = await getAgeCheckValue();
    if (ageCheckValue) return router.replace("/");
    if (!ageCheckValue && !currentMessage) setMessage(getMessageById(1));
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
                      onClick={async () => {
                        if (action.next.pass) return enterHome();
                        let message = await handleMessageAction(
                          action,
                          cbBeforeNextMessage(action.a_id)
                        );
                        console.log("Button.onClick, message : ", message);
                        setMessage(message);
                      }}
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
