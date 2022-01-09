/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import tw, { css } from 'twin.macro'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { range } from 'lib/utils'
import moment from 'moment'
import { ChevronCompactDown } from 'components/Icons'

const SharedPadding = css`
  ${tw`py-2 px-3`}
`

const Container = styled.div`
  ${tw`relative bg-white flex justify-between items-center box-border!`};
  height: ${({ height }) => `${height}px`};
  ${SharedPadding}
`

const NUM_ITEMS_VISIBLE = 5
const ListBoxRoot = styled.ul`
  ${tw`absolute bg-white z-20 w-full top-full left-0 box-border! overflow-scroll`}
  max-height: ${({ itemHeight }) => `${itemHeight * NUM_ITEMS_VISIBLE}px`};
`

const ListBox = ({ children, itemHeight }) => {
  return <ListBoxRoot itemHeight={itemHeight}>{children}</ListBoxRoot>
}

const ItemHoverStyle = css`
  ${tw`bg-gray-200`}
`
const Item = styled.div`
  ${tw`flex items-center box-border!`}
  height: ${({ height }) => `${height}px`};
  ${({ selected }) => selected && ItemHoverStyle};
  ${SharedPadding}
  :hover {
    ${ItemHoverStyle}
  }
`

const ToggleIcon = styled(ChevronCompactDown)`
  ${tw`transform`}
  ${({ opened }) => (opened ? tw`rotate-180` : {})}
`
const ToggleCss = css``

const ToggleRoot = styled.div`
  ${tw`cursor-pointer`}
`
const Toggle = ({ opened, toggle }) => {
  return (
    <ToggleRoot>
      <ToggleIcon
        css={[ToggleCss]}
        opened={opened}
        size={24}
        onClick={toggle}
      />
    </ToggleRoot>
  )
}

/* mock */
const mock = {
  values: range(moment(moment('YYYY-MM'), 'YYYY-MM').daysInMonth()),
}

const Select = ({
  values,
  handleClick,
  cssOptions,
  defaultValue,
  selectedValue,
  height = 32,
}) => {
  const [show, toggleShow] = useState(null)
  const [value, setValue] = useState(null)
  React.useEffect(() => {
    if (!value) setValue(defaultValue)
  }, [])
  const updateOwnValue = (v) => setValue(v)
  const _handleClick = React.useCallback(
    (v) => {
      console.log('next val: ', v)
      handleClick(v)
      if (!selectedValue) {
        updateOwnValue(v)
      }
      toggleShow(false)
    },
    [selectedValue]
  )
  return (
    <Container css={cssOptions} height={height}>
      {value || selectedValue}
      <Toggle
        toggle={() => {
          toggleShow(!show)
        }}
        opened={show}
      />
      {show && (
        <ListBox itemHeight={height}>
          {values.map((v) => (
            <Item
              key={v}
              {...{
                height,
                onClick: () => _handleClick(v),
                selected: (value || selectedValue) === v,
              }}
            >
              {v}
            </Item>
          ))}
        </ListBox>
      )}
    </Container>
  )
}

Select.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  handleClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  cssOptions: PropTypes.array,
}

Select.defaultProps = {
  values: mock.values,
  handleClick: () => {
    console.log('select option clicked')
  },
  cssOptions: {},
}

export default Select
