import React, { useState, useEffect, useCallback } from 'react'
// import { useAgeGate } from 'components/AgeGate/context'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import tw from 'twin.macro'
import { LogoCircleWhiteTransparent } from 'components/Icons'
import messages, {
  handleMessageAction,
  getAgeCheckValue,
  getMessageById,
  setAgeCheckValue,
} from 'components/AgeGate/messages'
import { fetchAPI } from 'lib/api'
import SEO from 'components/SEO'
import DOBSelect from 'components/AgeGate/DOBSelect'
import queries from 'api/graphql/queries'
import { DOB_STATUS } from 'components/AgeGate/constants'

const Logo = styled(LogoCircleWhiteTransparent)`
  width: 96px;
  height: 96px;
`

const Content = styled.div`
  ${tw`fixed inset-0 z-20`}
`

const GridLayout = styled.div`
  ${tw`w-full h-full grid grid-cols-12`}
`

const MessageContainer = styled.div`
  ${tw`col-start-2 col-span-10 lg:(col-end-6)`}
  ${tw`flex flex-col justify-center space-y-8`}
`

const MessageHeader = styled.div``
const MessageFooter = styled.div``

const Message = styled.p`
  ${tw`uppercase text-tr-white font-accent-2`}
  font-size:48px;
  line-height: 52px;
  @media (min-width: 768px) {
    font-size: 96px;
    line-height: 104px;
  }
`

/* TODO: refactor mobile screen "remember me" and "go without it" button to a modal "yes" or "no" */
const ButtonGroup = tw.div`flex w-full space-x-6`
const Button = styled.button`
  ${tw`bg-tr-white px-4 py-1 rounded-md lg:(px-5 pt-3 pb-3 rounded-none)`}
  ${tw`uppercase font-accent-2 text-tr-black text-2xl tracking-tight md:whitespace-pre lg:(text-5xl tracking-wide text-opacity-40)`}
:hover {
    ${tw`text-opacity-100`}
  }
  ${tw`focus:outline-none`}
  ${tw`transform hover:-translate-y-2 focus:translate-y-0 outline-none`}
`

const processNewAgeCheck = async () => {
  const ageCheckValue = await setAgeCheckValue()
  return ageCheckValue
}

const cbBeforeNextMessage = (actionId) => async () => {
  switch (actionId) {
    case 1: {
      // console.log("cbBeforeNextMessage triggered");
      const ageCheckValue = processNewAgeCheck()
      return ageCheckValue
    }
    case 2: {
      break
    }
    case 3: {
      break
    }
    case 4: {
      break
    }
    case 5: {
      break
    }
    default:
      break
  }
}

const AgeGatePage = ({ seoValues }) => {
  const router = useRouter()
  // TODO: fix lint error
  // const [ageCheckValue, setAgeCheckValue] = useAgeGate()
  const [currentMessage, setMessage] = useState(null)
  const [checkingDOB, setCheckingDOB] = useState(null)
  const [DOBStatus, setDOBStatus] = useState(DOB_STATUS.required)
  const enterHome = () => {
    router.replace('/')
  }
  const initCheckDOB = useCallback(() => {
    setCheckingDOB(true)
  })
  const handleActionButtonClick = useCallback(async (action) => {
    // handle a_id === 1 ("are you of age?" = 'Yes')
    if (action.a_id === 1) {
      console.log('>> action id === 1')
      if (DOBStatus !== DOB_STATUS.checked) {
        initCheckDOB()
        return
      }
    }
    if (action.next.pass) {
      try {
        setAgeCheckValue(getAgeCheckValue())
      } catch (error) {
        console.log(error)
      }
      return enterHome()
    }
    const message = await handleMessageAction(
      action,
      cbBeforeNextMessage(action.a_id)
    )
    setMessage(message)
  })
  // TODO: validate use of async in useEffect hook. Does this even have a purpose?
  useEffect(async () => {
    /* TODO : check DOBStatus session value*/
    /* TODO : create DOBStatus manager*/

    const currentAgeCheckValue = await getAgeCheckValue()
    if (currentAgeCheckValue) {
      setAgeCheckValue(currentAgeCheckValue)
      return router.replace('/')
    }
    if (!currentAgeCheckValue && !currentMessage) {
      setMessage(getMessageById(1))
    }
  }, [])

  const handleVerifySuccess = () => {
    setCheckingDOB(false)
    setMessage(getMessageById(2))
  }

  return (
    <>
      <SEO seoValues={seoValues} />
      <Content>
        {checkingDOB && <DOBSelect handleVerifySuccess={handleVerifySuccess} />}
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
    </>
  )
}

export default AgeGatePage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(queries.pages.homePage)
  // DEV: on Age Gate Page, seoValues is a map not an array
  const { SEO: seoValues } = data.homePage
  return {
    props: { seoValues: seoValues[0] },
  }
}
