import React from 'react';
import { Checkbox } from '@buffetjs/core';
import { useIntl } from 'react-intl';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';

import Button from '../../../../components/FullWidthButton';
import AuthLink from '../AuthLink';
import Box from '../Box';
import Input from '../Input';
import Logo from '../Logo';
import Section from '../Section';

import styled from 'styled-components'

const StyledButton = styled(Button)`
  background-color:#080808;
  border: 1px solid #080808;
`

const Login = ({ children, formErrors, modifiedData, onChange, onSubmit, requestError }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Section textAlign="center">
        <Logo />
      </Section>
      <Section withBackground>
        <BaselineAlignment top size="25px">
          <Box errorMessage={get(requestError, 'errorMessage', null)}>
            <form onSubmit={onSubmit}>
              <Input
                autoFocus
                error={formErrors.email}
                label="Auth.form.email.label"
                name="email"
                onChange={onChange}
                placeholder="Auth.form.email.placeholder"
                type="email"
                validations={{ required: true }}
                value={modifiedData.email}
              />
              <Input
                error={formErrors.password}
                label="Auth.form.password.label"
                name="password"
                onChange={onChange}
                type="password"
                validations={{ required: true }}
                value={modifiedData.password}
              />
              <Checkbox
                type="checkbox"
                message={formatMessage({ id: 'Auth.form.rememberMe.label' })}
                name="rememberMe"
                onChange={onChange}
                value={modifiedData.rememberMe}
              />
              <BaselineAlignment top size="27px">
                <StyledButton type="submit" color="primary" textTransform="uppercase">
                  {formatMessage({ id: 'Auth.form.button.login' })}
                </StyledButton>
              </BaselineAlignment>
            </form>
            {children}
          </Box>
        </BaselineAlignment>
      </Section>
      <AuthLink label="Auth.link.forgot-password" to="/auth/forgot-password" />
    </>
  );
};

Login.defaultProps = {
  children: null,
  onSubmit: e => e.preventDefault(),
  requestError: null,
};

Login.propTypes = {
  children: PropTypes.node,
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  requestError: PropTypes.object,
};

export default Login;
