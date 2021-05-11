import tw, { styled, css } from "twin.macro"
import { animateScroll as scroll } from "react-scroll"

const hoverButtonStyles = css`
  ${tw`lg:(px-2.5 py-1)`}
  :hover {
    ${tw`bg-tr-black text-tr-white cursor-pointer rounded-sm`}
  }
`

const FilterItem = styled.li`
  ${tw`select-none font-primary font-bold uppercase border-2 border-tr-black rounded-full text-xl px-4 mx-2 my-1.5 py-1.5`}
  ${tw` lg:(text-3xl px-0 py-0 border-none rounded-none)`}
  ${tw`xl:(font-bungee font-normal)`}
  ${hoverButtonStyles}
`

const Wrapper = tw.ul`flex mt-20 flex-wrap justify-center mb-14 lg:(space-x-12 mb-0)`

const FilterBar = ({ filters, setFilter }) => (
  <Wrapper>
    {filters.map((filter) => (
      <FilterItem
        key={filter.id}
        onClick={() => {
          scroll.scrollTo()
        }}
      >
        {filter.name}
      </FilterItem>
    ))}
  </Wrapper>
)

export default FilterBar
