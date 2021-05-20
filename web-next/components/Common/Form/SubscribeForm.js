import React from 'react'
import { Formik, Field, Form } from 'formik'
import styled from 'styled-components'
import tw from 'twin.macro'
import { subscribeNewsletterUrl } from 'constants/index.js'
import { callCloudFunction } from 'lib/api'
/* ./utils. */
import { formatRow } from './utils'

const StyledForm = styled(Form)`
  ${tw`w-full`}
`

const StyledField = styled(Field)`
  ${tw`relative font-primary text-base text-gray-50! bg-transparent`}
  ${tw`w-full (border-b border-solid border-white)!`}
  ${tw`xs:(rounded-none px-2 (border-0 border-none text-tr-black)!)`}
`

const StyledButton = styled.button`
  ${tw`w-full text-tr-black bg-tr-white font-primary rounded-full font-bold focus:(outline-none) active:(text-tr-white bg-tr-black border border-tr-white) transition-colors`}
  ${tw`xs:(text-tr-white bg-tr-black w-auto active:(bg-tr-white text-tr-black))`}
`

const InputGroup = styled.div`
  /* Change the white to any color */
  &,
  & * {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      border-radius: 50px;
    }
  }
  & {
    ${tw`relative flex flex-col items-center space-y-6`}
    ${tw`xs:(flex-row bg-tr-white rounded-full pl-4 max-w-md space-y-0)`}
  }
  ${StyledField}, ${StyledButton} {
    ${tw`px-4 py-3`}
  }
  ${StyledButton} {
    ${tw`xs:py-2! xs:mr-1`}
  }
  & > input {
    ${tw`border-none flex-1 focus:(outline-none)`}
  }
`
/** TODO: add validation
 * consider Yup
 * other reference: https://formik.org/docs/guides/validation */

const SuccessMessage = styled.span`
  ${tw`w-full flex justify-center`}
`

const clearForm = (clearFn = () => {}) => {
  const wait = 3000
  setTimeout(clearFn, wait)
}

const SubscribeForm = ({ submitLabel }) => (
  <>
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        const fieldValues = Object.values(values)
        const rowData = formatRow(fieldValues)
        const { status } = await callCloudFunction(
          subscribeNewsletterUrl,
          rowData
        )
        setStatus(status)
        if (status === 200) clearForm(resetForm)
      }}
    >
      {(props) => (
        <StyledForm onSubmit={props.handleSubmit}>
          <InputGroup>
            <StyledField
              id="email"
              name="email"
              placeholder="enter your email"
              type="email"
            />
            <StyledButton type="submit">
              {props.isSubmitting ? 'sending..' : submitLabel || 'Subscribe'}
            </StyledButton>
          </InputGroup>
          {props.status === 200 && (
            <SuccessMessage>Thank you, we will keep you posted!</SuccessMessage>
          )}
        </StyledForm>
      )}
    </Formik>
  </>
)

export default SubscribeForm
