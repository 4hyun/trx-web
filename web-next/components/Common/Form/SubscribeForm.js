import { Formik, Field, Form } from "formik"
import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled(Form)`
  ${tw`w-full`}
`

const StyledField = styled(Field)`
  ${tw`px-2 py-3 text-base font-primary text-tr-black relative bg-transparent`}
`

const StyledButton = styled.button`
  ${tw`text-tr-white bg-tr-black font-primary rounded-full px-4 py-2 mr-1 font-bold`}
`

const InputGroup = styled.div`
  min-width: 80%;
  ${tw`relative flex items-center bg-tr-white rounded-full pl-4 max-w-md`}
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
        alert(JSON.stringify(values, null, 2))
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
