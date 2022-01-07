import { useRef, useMemo } from 'react'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'components/Common/Select'
import { range } from 'lib/utils'

const sharedSelectCss = css`
  ${tw`w-full`}
`

const FixedLayout = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10`}
`

const Container = styled.div`
  ${tw`relative flex flex-col bg-black p-4 rounded-md gap-y-4 lg:w-1/5`}
`

const dob = {
  y: '',
  m: '',
  d: '',
}

const StyledSelect = ({
  values,
  defaultValue,
  selectedValue,
  height,
  handleClick,
}) => {
  return (
    <Select
      {...{
        values,
        defaultValue,
        selectedValue,
        height,
        handleClick,
        cssOptions: sharedSelectCss,
      }}
    />
  )
}

const YMDContainer = styled.div``
const SharedYMDWrapper = styled.div``
const SHARED_SELECT_HEIGHT = 40
const YearSelect = ({ setDOB }) => {
  const currYear = useMemo(() => {
    return new Date().getFullYear()
  })
  const yearRange = useMemo(() => range(currYear, currYear - 120).reverse())
  return (
    <SharedYMDWrapper>
      <StyledSelect
        values={yearRange}
        defaultValue={currYear}
        height={SHARED_SELECT_HEIGHT}
        handleClick={setDOB}
      />
    </SharedYMDWrapper>
  )
}
const MonthSelect = () => {
  return <SharedYMDWrapper></SharedYMDWrapper>
}
const DaySelect = () => {
  return <SharedYMDWrapper></SharedYMDWrapper>
}
const Message = styled.span`
  ${tw`text-white`}
`

const DOBSelect = ({ handleVerifySuccess }) => {
  const dobRef = useRef({ ...dob })
  const setDOB = (ymdVal) => {
    dobRef.current = { ...dobRef.current, ...ymdVal }
  }
  return (
    <FixedLayout>
      <Container>
        <Message>Please Enter Your DOB:</Message>
        <YMDContainer>
          <YearSelect
            setDOB={(m) => {
              console.log('setDOB m:', m)
              setDOB({ m })
            }}
          />
          {/* <MonthSelect></MonthSelect>
        <DaySelect></DaySelect> */}
        </YMDContainer>
      </Container>
    </FixedLayout>
  )
}

DOBSelect.propTypes = {}

export default DOBSelect
