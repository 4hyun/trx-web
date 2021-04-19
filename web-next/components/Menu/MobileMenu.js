import styled, { css } from "styled-components";
import tw from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";

const styles = {
  menuOpen: css`
    ${tw`z-40`}
    opacity: 1;
    transition-delay: 0s, 0.3s;
    transition-timing-function: easeInQuart;
    transition-duration: 0.5s, 0.3s;
  `,
  menuClose: css`
    transform: translateY(-100%);
    opacity: 0;
    z-index: -1;
    transition-timing-function: easeInBack;
    transition-duration: 0.5s, 0.3s;
  `,
};

const MobileMenuContainer = styled.div`
  /* test styles */
  transition-property: transform, opacity;
  ${tw`absolute w-full lg:hidden bg-tr-white`}
  ${({ menuOpen }) => (menuOpen && styles.menuOpen) || styles.menuClose}
`;

const MobileMenuList = styled.ul`
  ${tw`flex flex-col justify-center items-center py-12 space-y-4`}
`;

const Link = styled(motion.a)`
  ${tw`font-accent font-bold text-tr-black text-2xl`}
`;

const MobileMenuItem = ({ href, label }) => (
  <Link
    href={href}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {label}
  </Link>
);

export const MobileMenu = ({ menuList, menuOpen }) => {
  return (
    <MobileMenuContainer menuOpen={menuOpen}>
      <MobileMenuList>
        <AnimatePresence>
          {menuList &&
            menuList.map((menuItem) => (
              <MobileMenuItem key={menuItem.id} {...menuItem} />
            ))}
        </AnimatePresence>
      </MobileMenuList>
    </MobileMenuContainer>
  );
};
