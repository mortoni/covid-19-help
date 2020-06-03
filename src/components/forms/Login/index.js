import React from 'react'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import Loader from 'react-spinners/ClimbingBoxLoader'
import { useAuth } from 'context/auth-context'
import { useAsync } from 'utils/use-async'
import TextField from 'components/TextField'

const LoginForm = () => {
  const { handleSubmit, ...formProps } = useForm()
  const { login } = useAuth()
  const { isLoading, isError, error, run } = useAsync()
  const onSubmit = ({ email, password }) => {
    run(login({ email, password }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" height={100} justifyContent="center">
            <Loader size={15} color={'#6C63FF'} loading={isLoading} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {isError && <Typography>{error}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <TextField name="email" {...formProps} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField name="password" type="password" {...formProps} fullWidth required />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Box minWidth={140}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
export default LoginForm
