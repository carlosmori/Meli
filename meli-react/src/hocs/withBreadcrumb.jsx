import React, {Component} from 'react'

export default class WithBreadcrumb extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.props.children}
      </div>
    )
  }
}
