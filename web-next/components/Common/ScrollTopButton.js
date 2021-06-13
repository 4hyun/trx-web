// import { useContext } from 'react'
import tw, { styled } from 'twin.macro'
/* hook */
import { useScrollPosition, useScrollDirection } from 'lib/hooks'
/* utils */
import { scrollTo } from 'lib/utils'
/* context */
import { SCROLL_UP, SCROLL_DOWN } from 'contexts/ScrollDirectionContext'

const Button = styled.button`
  ${tw`rounded-lg bg-black text-tr-white fixed right-9 bottom-12 p-4 w-12 h-12 flex justify-center items-center md:(right-24 bottom-28) lg:(right-32 bottom-40) focus:outline-none shadow-xl transform active:(translate-x-1 translate-y-1) transition-opacity select-none`}
  ${({ scrollY, scrollDir }) =>
    scrollY > 300 && scrollDir === SCROLL_DOWN
      ? tw`opacity-100`
      : tw`opacity-0`}
`

const scrollOption = { top: 0 }

const ScrollTopButton = () => {
  const scrollDir = useScrollDirection()
  const scrollY = useScrollPosition(60)
  return (
    <Button
      onClick={() => scrollTo(scrollOption)}
      scrollY={scrollY}
      scrollDir={scrollDir}
    >
      TOP
    </Button>
  )
}

export default ScrollTopButton
