import * as Yup from 'yup';

const AddressSchema = Yup.object().shape({
  //shortest country names:  Chad, Cuba, Iran... 
  //longest country name: The United Kingdom of Great Britain and Northern Ireland
  country: Yup.string().min(4, 'Enter a real country!').max(56, 'Is this a real country?'),
  city: Yup.string().min(1, 'Enter a real city!').required('City is required'),
});

export const SignInSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Name is too short!')
    .max(40, 'Name is too long!')
    .required('Name is required!'),
  lastName: Yup.string()
    .min(2, 'Last name is too short!')
    .max(40, 'Last name is too long!')
    .required('Last name is required!'),
  birthDate: Yup.date().required('Birth date is required!'),
  childrenAmount: Yup.number()
    .required('Child amount is required!')
    .min(0, 'Minus kids?'),
  addresses: Yup.array().of(AddressSchema).min(1, 'Enter address!'),
  role: Yup.string().oneOf(['user', 'admin']),
});
