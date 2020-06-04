import React from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import ClearIcon from '@material-ui/icons/Clear'
import AddressField from 'components/AddressField'
import TextField from 'components/TextField'
import { useAuth } from 'context/auth-context'

const SettingsForm = () => {
  const { user } = useAuth()
  const [isEmailDisabled, setEmail] = React.useState(true)
  const [isPhoneDisabled, setPhone] = React.useState(true)
  const [isAddressDisabled, setAddress] = React.useState(true)
  const { handleSubmit, setValue, ...formProps } = useForm({
    defaultValues: {
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address.location,
    },
  })

  function handleEmail() {
    if (isEmailDisabled) {
      setEmail(!isEmailDisabled)
      //   Update user
    } else {
      setEmail(!isEmailDisabled)
    }
  }

  function handlePhone() {
    if (isEmailDisabled) {
      setPhone(!isPhoneDisabled)
      //   Update user
    } else {
      setPhone(!isPhoneDisabled)
    }
  }

  function handleAddress() {
    if (isAddressDisabled) {
      setAddress(!isAddressDisabled)
      //   Update user
    } else {
      setAddress(!isAddressDisabled)
    }
  }

  function resetEmail() {
    setEmail(true)
    setValue('email', user.email)
  }

  function resetPhone() {
    setPhone(true)
    setValue('phoneNumber', user.phoneNumber)
  }

  function resetAddress() {
    setAddress(true)
    // TOFIX: not working
    setValue('address', user.address.location)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="email"
          {...formProps}
          InputProps={{
            endAdornment: (
              <>
                <Button color="primary" onClick={handleEmail}>
                  {isEmailDisabled ? 'Edit' : 'Save'}
                </Button>
                {!isEmailDisabled && (
                  <IconButton color="secondary" onClick={resetEmail}>
                    <ClearIcon />
                  </IconButton>
                )}
              </>
            ),
          }}
          disabled={isEmailDisabled}
          fullWidth
          required
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="phoneNumber"
          {...formProps}
          InputProps={{
            endAdornment: (
              <>
                <Button color="primary" onClick={handlePhone}>
                  {isPhoneDisabled ? 'Edit' : 'Save'}
                </Button>
                {!isPhoneDisabled && (
                  <IconButton color="secondary" onClick={resetPhone}>
                    <ClearIcon />
                  </IconButton>
                )}
              </>
            ),
          }}
          disabled={isPhoneDisabled}
          fullWidth
          required
        />
      </Grid>

      <Grid item xs={12}>
        <AddressField
          name="address"
          InputProps={{
            endAdornment: (
              <>
                <Button color="primary" onClick={handleAddress}>
                  {isAddressDisabled ? 'Edit' : 'Save'}
                </Button>
                {!isAddressDisabled && (
                  <IconButton color="secondary" onClick={resetAddress}>
                    <ClearIcon />
                  </IconButton>
                )}
              </>
            ),
          }}
          disabled={isAddressDisabled}
          fullWidth
          required
          setValue={setValue}
          {...formProps}
        />
      </Grid>
    </Grid>
  )
}

export default SettingsForm
