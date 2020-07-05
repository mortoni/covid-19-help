import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import Avatar from 'components/Avatar'
import { useAuth } from 'context/auth-context'
import { useAsync } from 'utils/use-async'

const EditAvatar = ({ firstName, lastName, imageUrl }) => {
  const { uploadImage } = useAuth()
  const { run } = useAsync()

  function handleImageUpload({ target }) {
    const data = new FormData()

    data.append('image', target.files[0])
    run(uploadImage({ data }), true).then(() => {
      // TODO find another solution other than refresh the whle app
      window.location.reload()
    })
  }

  return (
    <>
      <Avatar imageScr={imageUrl} size={12}>{`${firstName.charAt(0)} ${lastName.charAt(0)}`}</Avatar>
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
