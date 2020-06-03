import { object, string, ref } from 'yup'

export default object().shape({
  firstName: string().trim('Please enter your first name').required('Please enter your first name'),
  lastName: string().trim('Please enter your last name').required('Please enter your last name'),
  email: string()
    .trim('Please enter your email address')
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  username: string().trim('Please enter your username').required('Please enter your username'),
  phoneNumber: string()
    .matches(/^[0-9]*$/, 'Please enter only numbers')
    .required('Please enter your phone number')
    .min(6, `Please enter a minimum of 6 numbers`)
    .max(10, `Please enter a maximum of 10 numbers`),
  address: object().required('Please enter your address'),
  password: string().trim('Please enter your password').required('Please enter your password'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
})
