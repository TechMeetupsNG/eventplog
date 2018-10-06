import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import defaults from 'js/styles/theme/variables'
import Auth from 'js/auth'

import { getSlugFromHostName } from 'js/utils'

class AppContainer extends Component {
  getProps = () => ({
    ...this.state,
    ...this.props,
    onHideMenu: this.onHideMenu,
    user: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}} = state.communities
  const { event = {}} = state.events
  const linkColor = community.id ? community.brand_color : event.brand_color
  const isCommunityPath = matchPath(ownProps.location.pathname, '/c/:id')
  const isEventPath = matchPath(ownProps.location.pathname, '/e/:id')
  const isInternalPath = !matchPath(ownProps.location.pathname, '/ext/*')
  const isHomePath = matchPath(ownProps.location.pathname, {path: '/', exact: true})
  const isLoginPath = matchPath(ownProps.location.pathname, {path: '/login', exact: true})
  const isSignuPath = matchPath(ownProps.location.pathname, {path: '/signup', exact: true})
  const shouldApplyBrandColor = (isCommunityPath || isEventPath || !isInternalPath) && linkColor

  return {
    ...ownProps,
    isInternalPath,
    activeLink: shouldApplyBrandColor ? (linkColor || defaults.activeLink) : defaults.activeLink,
    showBreadCrumb: !(isHomePath || isLoginPath || isSignuPath)
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))


