import styled from "styled-components";
import tw from "twin.macro";

const styles = {
  borderGap: "26px",
  header: { fontSize: "2rem" },
};

const Container = styled.div`
  ${tw`flex flex-col justify-center`}
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

const CollectionGallery = styled.div``;

const FooterContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: ${styles.borderGap};
    ${tw`border-t-2 border-tr-white`};
  }
`;

const Footer = styled.div`
  min-height: ${styles.header.fontSize};
`;

const Collection = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Collection</Header>
      </HeaderContainer>
      <CollectionGallery>Collection Gallery</CollectionGallery>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </Container>
  );
};

export default Collection;
