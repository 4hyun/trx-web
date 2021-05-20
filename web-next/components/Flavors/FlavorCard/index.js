import { memo } from "react"
import tw, { styled, css } from "twin.macro"

const gridColumnCSS = (colspan) => `span ${colspan} / span ${colspan}`

const Container = styled.div`
  ${tw`relative flex flex-col justify-between bg-tr-white rounded-2xl hover:(ring-4 ring-tr-white) transform active:(translate-y-0.5 translate-x-0.5) transition transition-transform duration-75 shadow-md overflow-hidden`}
  height: 100%;
  @media (min-width: 768px) {
    ${tw`rounded-xl shadow-lg cursor-pointer select-none`};
    grid-column: ${({ colspan }) => gridColumnCSS(colspan || 1)};
    -webkit-tap-highlight-color: transparent;
  }
  background: ${({ background }) => background && `url('${background}')`};
  background-size: cover;
  background-repeat: no-repeat;
  :after {
    ${tw`absolute left-0 w-full`}
    top:-40%;
    height: 210%;
    content: "";
    background: linear-gradient(162deg, rgb(65 3 121 / 38%) 19%, rgb(18 18 234 / 0%) 31%, rgb(225 225 225 / 65%) 83.5%);
  }
`

const commonStyles = {
  background: css`
    ${tw`bg-transparent z-20`}
  `,
}

const CardHeader = styled.div`
  ${commonStyles.background}
  ${tw`rounded-t-3xl p-4 pb-2 font-accent font-bold text-3xl leading-none text-tr-white whitespace-pre-wrap`}
  ${tw`sm:(px-2.5 pt-2.5)`}
  ${"" /* ${tw`md:(whitespace-pre-wrap)`} */}
  ${tw`lg:(pl-3 text-2xl leading-none tracking-wide)`}
`
const CardBody = styled.div`
  ${commonStyles.background}
  height:300px;
  @media (min-width: 768px) {
    ${tw`flex justify-center`}
    height: 250px;
  }
`
const CardFooter = styled.div`
  ${commonStyles.background}
  ${tw`rounded-b-3xl px-2.5`}
`

const mockImageUrl = "/mock/product-1.png"
// const MainImage = styled.img`
//   ${tw`h-full w-auto mx-0`}
// `
const FlavorCard = ({ colspan, item, renderFooterContent, renderFooterContentProp, onClick }) => (
    <Container colspan={colspan} onClick={onClick} background={item.main_img ? item.main_img?.formats?.medium?.url : mockImageUrl}>
      <CardHeader>{`Tunaaaa\n${item.name}`}</CardHeader>
      <CardBody>{/* <MainImage src={item.main_img ? item.main_img?.formats?.medium?.url : mockImageUrl} /> */}</CardBody>
      <CardFooter>{renderFooterContent && renderFooterContent({ renderFooterContentProp })}</CardFooter>
    </Container>
  )

export default memo(FlavorCard)
