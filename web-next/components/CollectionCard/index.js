import styled, { css } from "styled-components";
import tw from "twin.macro";

const gridColumnCSS = (colspan) => `span ${colspan} / span ${colspan}`;

const Container = styled.div`
  ${tw`flex flex-col rounded-3xl bg-tr-white shadow-lg cursor-pointer select-none hover:(ring-4 ring-hover-green-100) transform active:(translate-y-0.5 translate-x-0.5)`};
  height: fit-content;
  grid-column: ${({ colspan }) => gridColumnCSS(colspan ? colspan : 1)};
  -webkit-tap-highlight-color: transparent;
`;

const commonStyles = {
  background: css`
    ${tw`bg-tr-white`}
  `,
};

const CardHeader = styled.div`
  ${commonStyles.background}
  ${tw`rounded-t-3xl px-4 pt-2.5 pb-2 whitespace-pre font-accent font-bold text-xl leading-none`}
`;
const CardBody = styled.div`
  ${commonStyles.background}
  ${tw`flex justify-center`}
  @media(min-width: 768px) {
    height: 100px;
  }
`;
const CardFooter = styled.div`
  ${commonStyles.background}
  ${tw`rounded-b-3xl px-4`}
`;

const mockImageUrl = "/mock/product-1.png";
const MainImage = styled.img`
  ${tw`h-full w-auto mx-0`}
`;
const CollectionCard = ({
  colspan,
  item,
  renderFooterContent,
  renderFooterContentProp,
}) => {
  return (
    <Container colspan={colspan}>
      <CardHeader>{`Tunaaaa\n${item.name}`}</CardHeader>
      <CardBody>
        <MainImage
          src={
            item.main_img ? item.main_img?.formats?.medium?.url : mockImageUrl
          }
        />
      </CardBody>
      <CardFooter>
        {renderFooterContent &&
          renderFooterContent({ renderFooterContentProp })}
      </CardFooter>
    </Container>
  );
};

export default CollectionCard;
