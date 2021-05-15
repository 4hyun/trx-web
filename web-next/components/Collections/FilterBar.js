import { useMemo } from "react"
import tw, { styled, css } from "twin.macro"
import { animateScroll as scroll } from "react-scroll"

const hoverButtonStyles = css`
  ${tw`lg:(px-2.5 py-1)`}
  :hover {
    ${tw`bg-tr-black text-tr-white cursor-pointer lg:rounded-sm`}
  }
`

const FilterItem = styled.li`
  ${tw`select-none uppercase border-2 border-tr-black rounded-full text-xs px-4 mx-2 my-1.5 py-1.5 font-bungee`}
  ${tw`xs:text-lg`}
  ${tw`md:text-xl`}
  ${tw` lg:(text-2xl px-0 py-0 border-none rounded-none)`}
  ${tw`xl:(text-3xl font-normal)`}
  ${hoverButtonStyles}
`

const Wrapper = tw.ul`flex flex-wrap justify-center mb-14 -mx-8 lg:(space-x-12 mb-0)`

const FilterBar = ({ filters, setFilter }) => {
  console.log('>>DEBUG : filters.length :', filters.length)
  return (
    <Wrapper>
      {filters.map((collectionName) => {
        return (
          <FilterItem
            key={collectionName}
            onClick={() => {
              const scrollToElement = collectionName.toLowerCase().replaceAll(' ','-')
              console.log(`scorll to ${scrollToElement}`)
              scroll.scrollTo(scrollToElement)

            }}
          >
            {collectionName}
          </FilterItem>
        )
      })}
    </Wrapper>
  )
}

export default FilterBar
