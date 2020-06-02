import React from 'react'
import { Typography } from '@material-ui/core'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Typography variant="h5">Something went wrong.</Typography>
    }
    return this.props.children
  }
}

export default ErrorBoundary
