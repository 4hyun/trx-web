import styled, { css } from "styled-components";
import tw from "twin.macro";

const styles = {
  menuOpen: css`
    ${tw`z-40`}
    opacity: 1;
    transition-delay: 0s, 0.3s;
    transition-timing-function: easeInQuart;
  `,
  menuClose: css`
    transform: translateY(-100%);
    opacity: 0;
    z-index: -1;
    transition-timing-function: easeInQuart;
  `,
};

const MobileMenuContainer = styled.div`
  /* test styles */
  transition: transform 0.5s, opacity 0.3s;
  ${tw`absolute w-full lg:hidden bg-tr-white`}
  ${({ menuOpen }) => (menuOpen && styles.menuOpen) || styles.menuClose}
`;

const MobileMenuList = styled.ul`
  ${tw`flex flex-col justify-center items-center py-12 space-y-4`}
`;

const Link = styled.a`
  ${tw`font-accent font-bold text-tr-black text-2xl`}
`;

const MobileMenuItem = ({ href, label }) => <Link href={href}>{label}</Link>;

export const MobileMenu = ({ menuList, menuOpen }) => {
  return (
    <MobileMenuContainer menuOpen={menuOpen}>
      <MobileMenuList>
        {menuList &&
          menuList.map((menuItem) => <MobileMenuItem {...menuItem} />)}
      </MobileMenuList>
    </MobileMenuContainer>
  );
};
