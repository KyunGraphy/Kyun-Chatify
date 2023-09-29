import React from 'react'
import Message from "./Message"
import { Grid } from '@mui/material'

const Messages = () => {
  return (
    <Grid className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Grid>
  )
}

export default Messages