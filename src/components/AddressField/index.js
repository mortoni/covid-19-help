import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Box, TextField, Typography, Paper, MenuItem } from '@material-ui/core'

const AddressField = ({ handleChange }) => {
  const [location, setLocation] = React.useState('')

  const handleSelect = (l) => {
    setLocation(l)

    geocodeByAddress(l)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        handleChange({
          location: l,
          lat,
          lng,
        })
      })
    //   TODO handle catch
  }

  return (
    <PlacesAutocomplete value={location} onChange={(e) => setLocation(e)} onSelect={handleSelect} debounce={500}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            onChange={(e) => setLocation(e.target.value)}
            inputProps={{
              form: {
                autocomplete: 'off',
              },
              ...getInputProps(),
            }}
          />
          <Box position="relative" display={suggestions.length > 0 || loading ? 'block' : 'none'}>
            <Box component={Paper} position="absolute" width="100%" zIndex={2}>
              <Box p={2}>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => (
                  <MenuItem {...getSuggestionItemProps(suggestion, {})}>
                    <Typography variant="body2"></Typography>
                    {suggestion.description}
                  </MenuItem>
                ))}
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default AddressField
