import tw, { styled } from 'twin.macro'
/* hook */
import { useScrollPosition } from 'lib/hooks'
/* utils */
import { scrollTo } from 'lib/utils'

const Button = styled.button`
  ${tw`rounded-full bg-black text-tr-white fixed right-9 bottom-12 p-4 w-12 h-12 flex justify-center items-center md:(right-24 bottom-28) lg:(right-32 bottom-40) focus:outline-none shadow-lg transform active:(translate-x-1 translate-y-1) transition-opacity`}
  ${({ scrollY }) => (scrollY > 300 ? tw`opacity-100` : tw`opacity-0`)}
  @media()
`

const scrollOption = { top: 0 }
const ScrollTopButton = () => {
  const scrollY = useScrollPosition(60)
  return (
    <Button onClick={() => scrollTo(scrollOption)} scrollY={scrollY}>
      TOP
    </Button>
  )
}

export default ScrollTopButton
