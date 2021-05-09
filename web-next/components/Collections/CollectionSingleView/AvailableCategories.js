import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { createScrollbarStyles } from "components/Common/Styles"

const Column = styled.div`
  ${tw`flex flex-col space-y-4`}
  @media (min-width: 768px) {
    margin-top: 1.5rem !important;
  }
`

const scrollbarStylesOptions = {
  width: "10px",
  trackColor: "#f1f1f1",
  handleColor: "#888",
  handleColorOnHover: "#555",
}
const scrollbarStyles = createScrollbarStyles(scrollbarStylesOptions)
const ScrollContainer = styled.div`
  @media (min-width: 768px) {
    /* height: 286.5px; */
    /* space between scrollbar */
    padding-right: 1rem;
  }
  /* ${tw`overflow-y-auto`} */
  & {
    ${scrollbarStyles}
  }
`

const BlockTitle = styled.p`
  ${tw`text-tr-white font-accent font-bold text-3xl`}
`

const List = styled.div`
  ${tw`grid grid-rows-2 grid-cols-3 xs:grid-cols-4 gap-6 pb-10 `}
  ${tw`md:grid-cols-3`}
  @media (min-width: 768px) {
    height: 150px;
  }
`

const CategoryWrapper = styled.div`
  ${tw`flex justify-center items-center rounded-full bg-tr-white font-accent font-bold text-sm xs:(text-base) py-2`}
  @media (min-width: 768px) {
    /* height: 100px; */
    ${tw`text-xl py-2`}
  }
`

const Category = ({ data }) => {
  return <CategoryWrapper>{data.name}</CategoryWrapper>
}

const AvailableCategories = ({ categories }) => {
  return (
    <Column>
      <BlockTitle>Available as:</BlockTitle>
      <ScrollContainer>
        <List>
          {categories.map((categoryData) => (
            <Category key={categoryData.id} data={categoryData} />
          ))}
        </List>
      </ScrollContainer>
    </Column>
  )
}

export default AvailableCategories