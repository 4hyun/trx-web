import React from "react";
import styled from "styled-components";
import { Text } from "@buffetjs/core";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { BaselineAlignment } from "strapi-helper-plugin";
import Section from "../Section";
import Link from "./Link";
import Wrapper from "./Wrapper";

const StyledText = styled(Text)`
  color: #f7f8f8;
`;

const AuthLink = ({ children, label, to }) => {
  const { formatMessage } = useIntl();
  const message = formatMessage({ id: label });

  return (
    <Section textAlign="center">
      <Wrapper>
        <BaselineAlignment top size="24px">
          <Link to={to}>
            {children || <StyledText fontSize="md">{message}</StyledText>}
          </Link>
        </BaselineAlignment>
      </Wrapper>
    </Section>
  );
};

AuthLink.defaultProps = {
  children: null,
};

AuthLink.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthLink;
