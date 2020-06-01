import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Box, TextField, Typography, Paper, MenuItem } from '@material-ui/core'

const AddressField = ({ handleChange }) => {
  const [location, setLocation] = React.useState('')

  const handleSelect = (l) => {
    setLocation(l)
    let postcode = ''
    let city = ''

    geocodeByAddress(l)
      .then((results) => {
        const place = results[0]

        place.address_components.forEach((p) => {
          if (p.types.includes('locality')) {
            city = p.long_name
          }
          if (p.types.includes('postal_code')) {
            postcode = p.long_name
          }
        })

        return getLatLng(place)
      })
      .then(({ lat, lng }) => {
        handleChange({
          location: l,
          lat,
          lng,
          postcode,
          city,
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
                  // TODO add key here
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
