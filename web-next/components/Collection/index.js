import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import CollectionCard from "components/CollectionCard";
import IndicaSativaIndicator from "components/IndicaSativaIndicator";

const styles = {
  borderGap: "26px",
  header: { fontSize: "2rem" },
};

const Container = styled.div`
  ${tw`flex flex-col justify-center space-y-7`}
  ${tw`col-start-2 col-end-6`}
`;

const HeaderContainer = styled.div`
  @media (min-width: 768px) {
    padding-bottom: ${styles.borderGap};
    ${tw`border-b-2 border-tr-white`}
  }
`;

const Header = styled.div`
  ${tw`flex items-start`}
  ${tw`uppercase font-accent font-bold text-tr-white leading-none tracking-wider`}
  font-size: ${styles.header.fontSize};
`;

const CollectionGallery = styled.div`
  ${tw`grid grid-cols-3 gap-4`}
`;

const FooterContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: ${styles.borderGap};
    ${tw`border-t-2 border-tr-white`};
  }
`;

const Footer = styled.div`
  min-height: ${styles.header.fontSize};
`;

const CollectionCardFooterContent = ({ renderFooterContentProp }) => {
  const { indica, sativa } = renderFooterContentProp[0] || {};
  return <IndicaSativaIndicator indica={indica} sativa={sativa} />;
};

const Collection = ({ collection }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Collection</Header>
      </HeaderContainer>
      <CollectionGallery>
        {collection.map((flavor) => {
          return (
            <CollectionCard
              item={flavor}
              renderFooterContentProp={flavor.collection_card_footer_content}
              renderFooterContent={CollectionCardFooterContent}
            />
          );
        })}
      </CollectionGallery>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </Container>
  );
};
Collection.defaultProps = { collection: new Array(10) };
Collection.propTypes = {
  collection: PropTypes.array,
};

export default Collection;
