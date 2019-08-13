import React from 'react'

interface Props {
    children?: React.ReactNode
}

interface State {
    isError: boolean
  }

export default class DefaultErrorBoundary extends React.Component<Props, State> {

  readonly state: State = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
}

  render(){
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }
}