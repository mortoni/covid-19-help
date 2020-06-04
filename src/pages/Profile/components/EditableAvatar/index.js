import React from 'react'
import { Box, IconButton, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import Avatar from 'components/Avatar'
import { useAuth } from 'context/auth-context'
import { useAsync } from 'utils/use-async'

// firebase function for upload image is not working
const EditAvatar = ({ firstName, lastName }) => {
  const [image, setImage] = React.useState(null)
  const { uploadImage } = useAuth()
  const { isLoading, isError, error, run } = useAsync()

  function handleImageUpload({ target }) {
    const fileReader = new FileReader()

    fileReader.readAsDataURL(target.files[0])
    fileReader.onload = (e) => {
      setImage(e.target.result)
      // save image
      run(uploadImage({ image: e.target.result }))
    }
  }

  return (
    <>
      <Avatar imageScr={image} size={12}>{`${firstName.charAt(0)} ${lastName.charAt(0)}`}</Avatar>
      <Box position="absolute" top={0} right={0}>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="raised-button-file">
          <IconButton variant="raised" component="span" color="secondary">
            <EditIcon />
          </IconButton>
        </label>
      </Box>
    </>
  )
}

export default EditAvatar
