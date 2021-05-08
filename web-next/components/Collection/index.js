import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"
import CollectionCard from "components/CollectionCard"
import IndicaSativaIndicator from "components/IndicaSativaIndicator"
import { scrollbarHideStyles } from "components/Common/Styles"

const styles = {
  borderGap: "26px",
  header: { fontSize: "2rem" },
}

/* TODO: possibly rename to LayoutContainer to 
keep consistency with CollectionSingleView's LayoutContainer */
const Container = styled.div`
  ${tw`col-span-full space-y-4 lg:(flex flex-col justify-center space-y-7 col-start-2 col-end-6 row-span-full)`}
`

const HeaderContainer = styled.div`
  @media (min-width: 768px) {
    padding-bottom: ${styles.borderGap};
    ${tw`border-b-2 border-tr-white`}
  }
`

const Header = styled.div`
  ${tw`flex items-start uppercase font-accent font-bold text-tr-white leading-none tracking-wider`}
  font-size: ${styles.header.fontSize};
`
const ScrollContainer = styled.div`
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 600px;
    overflow-y: scroll;
  }
`
const CollectionGallery = styled.div`
  grid-auto-rows: 1fr;
  ${tw`grid grid-cols-3 gap-3 md:(grid-cols-5 gap-x-4 gap-y-6 overflow-y-auto p-2 h-auto) lg:(grid-cols-2 gap-x-4 gap-y-6 grid-rows-2 overflow-y-scroll) xl:(grid-cols-3)`}
  @media (min-width: 768px) {
    & {
      ${scrollbarHideStyles}
    }
  }
`

const FooterContainer = styled.div`
  ${tw`hidden`}
  @media (min-width: 768px) {
    padding-top: ${styles.borderGap};
    ${tw`block border-t-2 border-tr-white`};
  }
`

const Footer = styled.div`
  min-height: ${styles.header.fontSize};
`

const CollectionCardFooterContent = ({ renderFooterContentProp }) => {
  const { indica, sativa } = renderFooterContentProp[0] || {}
  return <IndicaSativaIndicator indica={indica} sativa={sativa} />
}

const Collection = ({ collection, onItemClick }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Collection</Header>
      </HeaderContainer>
      <ScrollContainer>
        <CollectionGallery>
          {collection.map((flavor) => {
            return (
              <CollectionCard
                key={flavor.id}
                item={flavor}
                renderFooterContentProp={flavor.collection_card_footer_content}
                renderFooterContent={CollectionCardFooterContent}
                onClick={() => onItemClick(flavor)}
              />
            )
          })}
        </CollectionGallery>
      </ScrollContainer>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </Container>
  )
}
Collection.defaultProps = { collection: new Array(10) }
Collection.propTypes = {
  collection: PropTypes.array,
}

export default Collection
