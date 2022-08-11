import { Formik, Field, FieldArray, Form } from 'formik';
import styled from 'styled-components';

const Signup = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    birthDate: string;
    childrenAmount: number;
    adresses: string[];
    role: 'user' | 'admin';
  }

  return (
    <Wrapper>
      <Header>Sign Up</Header>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthDate: '1990-01-01',
          childrenAmount: 0,
          adresses: [],
          role: 'user',
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        render={({ values }) => (
          <Form>
            <FormWrapper>
              <label htmlFor='firstName'>First Name</label>
              <Field
                id='firstName'
                name='firstName'
                placeholder='Name'
                type='text'
              />
              <label htmlFor='lastName'>Last Name</label>
              <Field
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                type='text'
              />
              <label htmlFor='birthDate'>Birth date</label>
              <Field id='birthDate' name='birthDate' type='date' />
              <label htmlFor='childrenAmount'>Children amount</label>
              <Field
                id='childrenAmount'
                name='childrenAmount'
                placeholder='0'
                type='number'
              />
              <label htmlFor='adresses'>Adresses</label>
              <FieldArray
                name='adresses'
                render={(arrayHelpers) => (
                  <div>
                    {values.adresses.map((address, index) => (
                      <AddressWrapper key={index}>
                        <Field
                          name={`address[${index}].country`}
                          placeholder='Country'
                        />
                        <Field
                          name={`address.${index}.city`}
                          placeholder='City'
                        />

                        <AddressButton
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove Address
                        </AddressButton>
                      </AddressWrapper>
                    ))}
                    <AddressButton
                      type='button'
                      onClick={() =>
                        arrayHelpers.push({ country: '', city: '' })
                      }
                    >
                      Add address
                    </AddressButton>
                  </div>
                )}
              />
              <label htmlFor='role'>Role</label>
              <Field as='select' name='role'>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </Field>

              <SubmitButton type='submit'>Submit</SubmitButton>
            </FormWrapper>
          </Form>
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  gap: 5px;
`;

const AddressButton = styled.button`
  background-color: #bb86fc;
  padding: 5px;
`;

const SubmitButton = styled.button`
  margin: 30px auto;
  width: 120px;
  border: none;
  border-radius: 2px;
  background-color: #bb86fc;
  display: block;
  padding: 15px;
`;

export default Signup;
