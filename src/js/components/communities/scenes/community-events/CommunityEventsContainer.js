import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getEvents,
  getPastEvents,
  attendEvent,
} from 'js/components/events/actions'

import checkEqual  from 'js/utils/checkEqual'


class CommunityContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
    }
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/communities/:community_id/events/:id') || this.props.match).params
  }

  getData() {
    const {community_id, id} = this.getParams()
    const sureCommunityId = community_id || id
    this.props.getEvents({ community_id: sureCommunityId , page: 1, per_page: 10})
    this.props.getPastEvents({ community_id: sureCommunityId , page: 1, per_page: 10})
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = [], past_events, loading, error} = state.events

  return {
    events,
    past_events,
    loading,
    error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getPastEvents,
    attendEvent,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))