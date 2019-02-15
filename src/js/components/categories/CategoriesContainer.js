import React, { Component} from 'react'
import Auth from '../../auth/actions'

class MainContentContainer extends Component {
  getProps = () => ({ user: Auth.currentUser() })

  render () {
    return this.props.children(this.getProps())
  }
}

export default MainContentContainer
