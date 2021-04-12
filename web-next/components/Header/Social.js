import { FacebookIcon, TwitterIcon, InstagramIcon } from "components/Icons";
import styled from "styled-components";

const SocialWrapper = styled.div`
  ${({ stylesheet }) => stylesheet && stylesheet}
`;

const Social = ({ onClick, stylesheet }) => {
  return (
    <SocialWrapper onClick={onClick} stylesheet={stylesheet}>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </SocialWrapper>
  );
};

export default Social;
