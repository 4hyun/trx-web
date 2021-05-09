import { Formik, Field, Form } from "formik"
import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled(Form)`
  ${tw`w-full`}
`

const StyledField = styled(Field)`
  ${tw`relative font-primary text-base text-gray-50 bg-transparent`}
  ${tw`w-full (rounded-full border-b border-solid border-white)!`}
  ${tw`xs:(rounded-none px-2 (border-0 border-none)!)`}
`

const StyledButton = styled.button`
  ${tw`w-full text-tr-black bg-tr-white font-primary rounded-full font-bold focus:(outline-none) active:(text-tr-white bg-tr-black border border-tr-white) transition-colors`}
  ${tw`xs:(text-tr-white bg-tr-black w-auto active:(bg-tr-white text-tr-black))`}
`

const InputGroup = styled.div`
  & {
    ${tw`relative flex flex-col items-center space-y-4`}
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
const SubscribeForm = ({ submitLabel }) => (
  <>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        // alert(JSON.stringify(values, null, 2))
      }}
    >
      <StyledForm>
        <InputGroup>
          <StyledField id="email" name="email" placeholder="enter your email" type="email" />
          <StyledButton type="submit">{submitLabel || "Subscribe"}</StyledButton>
        </InputGroup>
      </StyledForm>
    </Formik>
  </>
)

export default SubscribeForm
