import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';

import { SignInSchema } from '../utils/validationSchema';
import styled from 'styled-components';

const Signup = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    birthDate: string;
    childrenAmount: number;
    addresses: string[];
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
          addresses: [],
          role: 'user',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, values, touched, isSubmitting }) => (
          <Form>
            <FormWrapper>
              <label htmlFor='firstName'>First Name</label>
              <Field
                id='firstName'
                name='firstName'
                placeholder='Name'
                type='text'
              />
              <ErrorMessage
                name='firstName'
                component='div'
                className='error'
              />

              <label htmlFor='lastName'>Last Name</label>
              <Field
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                type='text'
              />
              <ErrorMessage name='lastName' component='div' className='error' />

              <label htmlFor='birthDate'>Birth date</label>
              <Field id='birthDate' name='birthDate' type='date' />
              <ErrorMessage
                name='birthDate'
                component='div'
                className='error'
              />

              <label htmlFor='childrenAmount'>Children amount</label>
              <Field
                id='childrenAmount'
                name='childrenAmount'
                placeholder='0'
                type='number'
              />
              <ErrorMessage
                name='childrenAmount'
                component='div'
                className='error'
              />

              <label htmlFor='addresses'>Addresses</label>
              <FieldArray
                name='addresses'
                render={(arrayHelpers) => (
                  <div>
                    {values.addresses.map((address, index) => (
                      <AddressWrapper key={index}>
                        <Field
                          name={`addresses[${index}].country`}
                          placeholder='Country'
                        />
                        <ErrorMessage
                          name={`addresses[${index}].country`}
                          component='div'
                          className='error'
                        />
                        <Field
                          name={`addresses.${index}.city`}
                          placeholder='City'
                        />
                        <ErrorMessage
                          name={`addresses.${index}.city`}
                          component='div'
                          className='error'
                        />
                        <AddressButton
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove Address
                        </AddressButton>
                      </AddressWrapper>
                    ))}
                    <AddButton
                      type='button'
                      onClick={() =>
                        arrayHelpers.push({ country: '', city: '' })
                      }
                    >
                      Add address
                    </AddButton>
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
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h1`
  font-size: 30px;
  margin: 20px 0;
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
  margin-bottom: 10px;
`;

const AddressButton = styled.button`
  padding: 5px;
`;

const AddButton = styled.button`
  margin-top: 5px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  margin: 25px auto;
  width: 120px;
  border: none;
  border-radius: 2px;
  display: block;
  padding: 15px;
`;

export default Signup;
