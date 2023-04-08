// https://reactjs.org/docs/error-boundaries.html

import React, { PropsWithChildren } from 'react'

export class ErrorBoundary extends React.Component<PropsWithChildren<{}>> {
  state = { hasError: false, error: null, errorInfo: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('componentDidCatch Uncaught error:', error, errorInfo)
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      {
        console.log('this is the case')
      }
      const { errorInfo, error } = this.state
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{errorInfo}</p>
          <p>{JSON.stringify(error)}</p>
        </div>
      )
    }

    return this.props.children
  }
}
