import { useEffect, useState, useMemo, useContext } from 'react'
import moment from 'moment'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import Select from 'components/Common/Select'
import { range } from 'lib/utils'
import {
  // AGE_GATE_DOB_LS_KEY,
  AGE_GATE_PROV_LS_KEY,
} from 'components/AgeGate/constants'
import { initialDOB, DOBContext } from './context'
import useDOBSelectControls from './useDOBSelectControls'

import { PROVINCES, ageRestrictionByProv } from './constants'
import AgeGateManager from 'lib/agegate-manager'

const sharedSelectCss = css`
  ${tw`w-full`}
`

const FixedLayout = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10`}
`

const Container = styled.div`
  ${tw`relative flex flex-col bg-black p-4 rounded-md gap-y-4 lg:w-1/5`}
`

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

const SHARED_SELECT_UI_HEIGHT = 40
const ProvinceSelect = ({ setProvince }) => {
  const provList = Object.values(PROVINCES)
  return (
    <SharedYMDWrapper>
      <StyledSelect
        values={provList}
        defaultValue={provList[0]}
        height={SHARED_SELECT_UI_HEIGHT}
        handleClick={(prov) => setProvince(prov)}
      />
    </SharedYMDWrapper>
  )
}

/* TODO: animate StyledSelect transition in all 3 YMD components */
const YMDContainer = styled.div``
const SharedYMDWrapper = styled.div``
const YearSelect = (props) => {
  const { setDOB } = useContext(DOBContext)
  const currYear = useMemo(() => {
    return new Date().getFullYear()
  })
  const yearRange = useMemo(() => range(currYear, currYear - 120).reverse())
  return (
    <SharedYMDWrapper>
      <StyledSelect
        values={yearRange}
        defaultValue={currYear}
        height={SHARED_SELECT_UI_HEIGHT}
        handleClick={(y) => setDOB({ y })}
      />
    </SharedYMDWrapper>
  )
}
const MonthSelect = () => {
  const { setDOB } = useContext(DOBContext)
  const monthRange = useMemo(() => range(12, 1).reverse())
  return (
    <SharedYMDWrapper>
      <StyledSelect
        values={monthRange}
        defaultValue={1}
        height={SHARED_SELECT_UI_HEIGHT}
        handleClick={(m) => setDOB({ m })}
      />
    </SharedYMDWrapper>
  )
}
const DaySelect = () => {
  const { setDOB } = useContext(DOBContext)
  const daysInMonth = useMemo(() => range(31, 1).reverse())
  return (
    <SharedYMDWrapper handleClick={(d) => setDOB({ d })}>
      <StyledSelect
        values={daysInMonth}
        defaultValue={1}
        height={SHARED_SELECT_UI_HEIGHT}
        handleClick={(d) => setDOB({ d })}
      />
    </SharedYMDWrapper>
  )
}

const Message = styled.p`
  ${tw`uppercase text-tr-white font-accent-2`}
  font-size:24px;
  line-height: 52px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`
const GeneratedDOBStyles = css`
  margin-right: auto;
  ${tw`my-auto`}
`
const GeneratedDOB = ({ children }) => {
  return <Message css={[GeneratedDOBStyles]}>{children}</Message>
}

const DOB_SELECT_MSG = `Please Enter Your Birth Date To Continue`
const Button = styled.div.attrs({
  role: 'button',
})`
  ${tw`flex bg-white px-2 py-2 font-accent-2`}
  ${(props) => (props['aria-disabled'] ? tw`opacity-20!` : '')}
`

const Row = styled.div`
  ${tw`flex w-full justify-end gap-x-4`}
`

const DOBSelect = ({ handleVerifySuccess }) => {
  const [validateAgeByProvSuccess, setValidateAgeByProvSuccess] =
    useState(false)
  const [province, setProvince] = useState({ value: null, isSet: false })
  const { ymdKey, startDobSelect, dobSelectNext, dobSelectPrev } =
    useDOBSelectControls()
  const [DOBVal, setDOBVal] = useState({ ...initialDOB })
  const setDOB = (ymdKV) => {
    setDOBVal({ ...DOBVal, ...ymdKV })
  }
  /* WIP: testing momentjs queries */
  const validateAgeByProv = (prov, DOBStringValue) => {
    const FormattedDOBStringValue = DOBStringValue.replace(/ /g, '')
    return moment(FormattedDOBStringValue).isBefore(
      moment().subtract(ageRestrictionByProv[prov], 'years')
    )
  }
  const validateDOB = (y, m, d) => {
    return y && m && d
  }
  /* TODO: replace logic of returning parsed-for-display(current) value, to raw value. Then use parser function to display the string in template. */
  const DOBString = useMemo(() => {
    const { y, m, d } = DOBVal
    const DOBStringValue = `${y || ''}${m ? ` - ${m}` : ''}${
      d ? ` - ${d}` : ''
    }`
    return {
      value: DOBStringValue,
      isValidDOB:
        validateDOB(y, m, d) &&
        validateAgeByProv(province.value, DOBStringValue),
    }
  }, [DOBVal])
  /* WIP: testing useLayoutEffect.  */
  /* FEAT: record validateAgeByProvSuccess */
  useEffect(() => {
    // console.log('DOBString.isValidDOB changed: ', DOBString.isValidDOB)
    setValidateAgeByProvSuccess(DOBString.isValidDOB)
  }, [DOBString.isValidDOB])
  const ariaDisabledForDOB = useMemo(
    () => ymdKey !== null && DOBVal[ymdKey] === null,
    [DOBVal, ymdKey]
  )
  /* TODO: use AgeGateManager to persist values to LS */

  const saveDOB = () => {
    // console.log('saveDOB()')
    // localStorage.setItem(AGE_GATE_DOB_LS_KEY, DOBString.value.replace(/ /g, ''))
    AgeGateManager.setDOB(DOBString.value.replace(/ /g, ''))
    AgeGateManager.setProvince(province.value)
    handleVerifySuccess()
  }
  const saveProvince = () => {
    localStorage.setItem(AGE_GATE_PROV_LS_KEY, province.value)
    startDobSelect()
    setProvince((prev) => ({ ...prev, isSet: true }))
  }
  return (
    <FixedLayout>
      <Container>
        <Message>{DOB_SELECT_MSG}</Message>
        <YMDContainer>
          <DOBContext.Provider value={{ dob: DOBVal, setDOB }}>
            {!province.isSet ? (
              <ProvinceSelect
                setProvince={(prov) =>
                  setProvince((prev) => ({ ...prev, value: prov }))
                }
              />
            ) : (
              <>
                {ymdKey === 'y' && <YearSelect />}
                {ymdKey === 'm' && <MonthSelect />}
                {ymdKey === 'd' && <DaySelect />}
              </>
            )}
          </DOBContext.Provider>
        </YMDContainer>
        <Row>
          {province.isSet && (
            <>
              <GeneratedDOB>{DOBString.value}</GeneratedDOB>
              <Button
                key="prev-btn"
                onClick={dobSelectPrev}
                onKeyPress={dobSelectPrev}
              >
                prev
              </Button>
              <Button
                key="next-btn"
                onClick={() =>
                  validateAgeByProvSuccess
                    ? saveDOB()
                    : !ariaDisabledForDOB && dobSelectNext()
                }
                onKeyPress={() =>
                  validateAgeByProvSuccess
                    ? saveDOB()
                    : !ariaDisabledForDOB && dobSelectNext()
                }
                aria-disabled={
                  ymdKey === 'd'
                    ? ariaDisabledForDOB || !DOBString.isValidDOB
                    : ariaDisabledForDOB
                }
              >
                next
              </Button>
            </>
          )}
          {!province.isSet && (
            <>
              <Button
                key="select-province-next"
                onClick={() => province.value && saveProvince()}
                onKeyPress={() => province.value && saveProvince()}
                aria-disabled={province.value === null}
              >
                next
              </Button>
            </>
          )}
        </Row>
      </Container>
    </FixedLayout>
  )
}

DOBSelect.propTypes = {}

export default DOBSelect
