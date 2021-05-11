import tw, { styled, css } from "twin.macro"

const gridColumnCSS = (colspan) => `span ${colspan} / span ${colspan}`

const Container = styled.div`
  ${tw`flex flex-col justify-between bg-tr-white rounded-md hover:(ring-4 ring-hover-green-100) transform active:(translate-y-0.5 translate-x-0.5) transition transition-transform duration-75 shadow-md`}
  height: 100%;
  @media (min-width: 768px) {
    ${tw`rounded-xl shadow-lg cursor-pointer select-none`};
    grid-column: ${({ colspan }) => gridColumnCSS(colspan ? colspan : 1)};
    -webkit-tap-highlight-color: transparent;
  }
`

const commonStyles = {
  background: css`
    ${tw`bg-tr-white`}
  `,
}

const CardHeader = styled.div`
  ${commonStyles.background}
  ${tw`rounded-t-3xl p-4 sm:(px-4 pt-2.5) pb-2 md:(whitespace-pre-wrap) font-accent font-bold text-xl leading-none`}
`
const CardBody = styled.div`
  ${commonStyles.background}
  ${tw`hidden`}
  @media (min-width: 768px) {
    ${tw`flex justify-center`}
    height: 100px;
  }
`
const CardFooter = styled.div`
  ${commonStyles.background}
  ${tw`rounded-b-3xl px-2.5 sm:px-4`}
`

const mockImageUrl = "/mock/product-1.png"
const MainImage = styled.img`
  ${tw`h-full w-auto mx-0`}
`
const FlavorCard = ({ colspan, item, renderFooterContent, renderFooterContentProp, onClick }) => {
  return (
    <Container colspan={colspan} onClick={onClick}>
      <CardHeader>{`Tunaaaa\n${item.name}`}</CardHeader>
      <CardBody>
        <MainImage src={item.main_img ? item.main_img?.formats?.medium?.url : mockImageUrl} />
      </CardBody>
      <CardFooter>{renderFooterContent && renderFooterContent({ renderFooterContentProp })}</CardFooter>
    </Container>
  )
}

export default FlavorCard
