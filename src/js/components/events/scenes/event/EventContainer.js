import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'

import {
  getCommunitiesSuggestions,
} from 'js/components/communities/actions'

import {
  getEvent,
  updateEvent,
  createComment,
  updateComment,
  createAnnouncement,
  updateAnnouncement,
  getEventsSuggestions,
  attendEvent,
} from '../../actions'


class EventContainer extends Component {
  state = {event: {}}

  componentWillMount() {
    this.getData()
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }
  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  handleChange = (key, value) => {
    const event = this.state.event && this.state.event.id
                    ? this.state.event
                    : this.props.event
    this.setState({event: {...event, [key]: value }})
  }

  handleSubmit = () => {
    const {commuity, ...others} = this.state.event
    return this.props.updateEvent(others).then(event => this.setState({event}))
  }

  attendEvent = () => {
    const {commuity, ...others} = this.state.event
    return this.props.attendEvent(others).then(event => this.setState({event}))
  }

  getData() {
    const {community_id, id} = this.props.match.params
    if (!this.props.event || this.props.event.id != id) {
      this.props.getEvent(id).then(event => this.setState({event}))
    }
    this.props.getEventsSuggestions({id, community_id, page: 1, per_page: 2})
    // this.props.getCommunitiesSuggestions({id: community_id, page: 1, per_page: 2})
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    attendEvent: this.attendEvent,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {event = {}, events_suggestions = []} = state.events
  const { organizers } = state.organizers
  const {link_color } = event;
  const { community, communities_suggestions } = state.communities
  return {
    activeLink: community.brand_color,
    event,
    community,
    organizers,
    events_suggestions,
    communities_suggestions,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    getEventsSuggestions,
    getCommunitiesSuggestions,
    updateEvent,
    attendEvent,
    createComment,
    updateComment,
    createAnnouncement,
    updateAnnouncement,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))