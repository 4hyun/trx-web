import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import FlavorCard from "../FlavorCard"
import IndicaSativaIndicator from "@/components/IndicaSativaIndicator"
import { scrollbarHideStyles } from "@/components/Common/Styles"

const styles = {
  borderGap: "16px",
  header: { fontSize: "2rem" },
}

/* TODO: possibly rename to LayoutContainer to 
keep consistency with CollectionSingleView's LayoutContainer */
const Container = styled.div`
  ${tw`col-span-full space-y-4 lg:(flex flex-col justify-center space-y-4 col-start-2 col-end-6 row-span-full)`}
`

const HeaderContainer = styled.div`
  @media (min-width: 768px) {
  }
`

const Header = styled.div`
  ${tw`flex items-start uppercase font-bungee text-tr-black leading-none tracking-wider`}
  font-size: ${styles.header.fontSize};
`
const ScrollContainer = styled.div`
  ${scrollbarHideStyles}
  @media (min-width: 1024px) and (max-width: 1279px) {
    ${"" /* height: 600px; */}
    overflow-y: scroll;
  }
`
const FlavorList = styled.div`
  ${scrollbarHideStyles}
  grid-auto-rows: 1fr;
  ${tw`grid grid-cols-2 gap-3 md:(grid-cols-5 gap-x-4 gap-y-6 overflow-y-auto p-4 h-auto) lg:(grid-cols-4 gap-x-4 gap-y-6 grid-rows-2 overflow-y-scroll) xl:(grid-cols-7 grid-rows-1 gap-8)`}
`

const FooterContainer = styled.div`
  ${tw`hidden`}
  @media (min-width: 768px) {
    padding-top: ${styles.borderGap};
  }
`

const Footer = styled.div`
  min-height: ${styles.header.fontSize};
`

const CardFooterContent = ({ renderFooterContentProp }) => {
  const { indica, sativa } = renderFooterContentProp[0] || {}
  return <IndicaSativaIndicator indica={indica} sativa={sativa} />
}

const FlavorsPortfolio = ({ collection, onItemClick }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Flavors</Header>
      </HeaderContainer>
      <ScrollContainer>
        <FlavorList>
          {collection.map((flavor) => {
            return (
              <FlavorCard
                key={flavor.id}
                item={flavor}
                renderFooterContentProp={flavor.collection_card_footer_content}
                renderFooterContent={CardFooterContent}
                onClick={() => onItemClick(flavor)}
              />
            )
          })}
        </FlavorList>
      </ScrollContainer>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </Container>
  )
}
FlavorsPortfolio.defaultProps = { collection: new Array(10) }
FlavorsPortfolio.propTypes = {
  collection: PropTypes.array,
}

export default FlavorsPortfolio
