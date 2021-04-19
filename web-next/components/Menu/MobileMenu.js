import styled, { css } from "styled-components";
import tw from "twin.macro";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const styles = {
  menuOpen: css`
    ${tw`z-40 border-b border-tr-black`}
    opacity: 1;
    transition-delay: 0s, 0.3s;
    transition-timing-function: easeInQuart, easeInQuart;
    transition-duration: 0.5s, 0.3s;
  `,
  menuClose: css`
    transform: translateY(-100%);
    opacity: 0;
    z-index: -1;
    transition-timing-function: easeOutQuart, easeOutQuart;
    transition-duration: 0.6s, 0.3s;
    transition-delay: 0.3s, 0;
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

const Link = styled.a`
  ${tw`font-bungee text-tr-black text-lg relative`}
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    transform: scaleX(0);
    border-bottom: 1px solid black;
    transition: transform 0.2s ease-in-out;
  }
  &:hover:after {
    content: "";
    transform: scaleX(1);
  }
`;

// const variants = {
//   list: {
//     hidden: { opacity: 0 },
//     visible: { transition: { staggerChildren: 0.5 } },
//   },
//   item: {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   },
// };

const MobileMenuItem = ({ href, label }) => <Link href={href}>{label}</Link>;

export const MobileMenu = ({ menuList, menuOpen }) => {
  return (
    <MobileMenuContainer menuOpen={menuOpen}>
      <MobileMenuList>
        {menuList &&
          menuOpen &&
          menuList.map((menuItem) => (
            <MobileMenuItem key={menuItem.id} {...menuItem} />
          ))}
      </MobileMenuList>
    </MobileMenuContainer>
  );
};
