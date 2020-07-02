import React from 'react'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import Loader from 'react-spinners/ClimbingBoxLoader'
import { useAuth } from 'context/auth-context'
import { useAsync } from 'utils/use-async'
import TextField from 'components/TextField'
import AddressField from 'components/AddressField'
import validationSchema from './validation'

const LoginForm = () => {
  const { handleSubmit, watch, ...formProps } = useForm({ validationSchema })
  const { register } = useAuth()
  const { isLoading, isError, error, run } = useAsync()
  const onSubmit = ({ ...values }) => run(register({ ...values }))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Box display="flex" height={100} justifyContent="center">
            <Loader size={15} color={'#6C63FF'} loading={isLoading} />
          </Box>
        </Grid> */}
        <Grid item xs={12}>
          {isError && <Typography>{error}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="firstName" label="First Name" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField name="lastName" label="Last Name" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12}>
          <TextField name="email" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField name="username" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField name="phoneNumber" fullWidth {...formProps} />
        </Grid>

        <Grid item xs={12}>
          <AddressField name="address" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField name="password" type="password" fullWidth required {...formProps} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            {...formProps}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Box minWidth={140}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
export default LoginForm
