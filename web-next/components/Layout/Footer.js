import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.footer`
  ${tw`flex flex-col justify-center items-center w-full bg-tr-black bg-opacity-90 text-tr-white font-bungee select-none`}
  /* Temp Styles */
  top: 100vh;
  min-height: 200px;
`;

const Grid = styled.div`
  ${tw`grid grid-cols-3 px-4 xs:px-8 w-full`}
`;

const Column = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-2`}
`;

const StyledLink = styled.a`
  ${tw`cursor-pointer text-tr-white text-opacity-70 text-xs xs:text-base hover:text-opacity-100`}
`;

const Link = ({ href, name }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </NextLink>
  );
};

const TRLogo = styled.img`
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Grid>
        <Column>
          <TRLogo
            src="https://storage.googleapis.com/trx-web-static-media/trBlackTransparentLogo.png"
            alt="Tunaaaa Room Logo"
            width={64.5}
            height={65.25}
          />
        </Column>
        <Column>
          <Link href="/" name="Collections" />
          <Link href="/" name="Find Stores" />
        </Column>
        <Column>
          <Link href="/" name="Contact" />
        </Column>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
