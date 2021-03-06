import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ========== INTERNAL ============s
import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { paramsToObj, genEventLink } from 'js/utils'
import { secureAction } from 'js/auth/actions'

import {
  getEvent,
  updateEvent,
  createComment,
  updateComment,
  getComments,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  getPastEvents,
  attendEvent,
  checkForValidSlug,
  updateViewCount,
  addEventToStore,
} from '../../actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

class EventContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {event: {}}
    this.imagePlaceholderRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.getData()
    this.allowNext()
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
    return this.props.updateEvent(others).then(event => {
      this.state.event.id
        ? mixpanel.track('EVENT_UPDATE')
        : mixpanel.track('EVENT_CREATE')
      this.setState({event})
      this.allowNext()
    })
  }

  toggleVisibilityStatus = ({id, visibility_status: status}) => {
    const visibility_status = status == 'private_event' ? 'public_event' : 'private_event'
    this.setState({loading: true})
    this.props.updateEvent({id, visibility_status}).then(res => {
      this.setState({loading: false})
      mixpanel.track('EVENT_UPDATE', {visibility_status})
    })
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
        !this.props.event.id) &&
        window.__INITIAL_DATA__ &&
        window.__INITIAL_DATA__.event
  )

  attendEvent = (id) => {
    !!this.props.event.link
      ? window.open(event.link, '_blank')
      : this.props.history.push(`${genEventLink(this.props.event)}/register`)
  }

  allowNext = () => {
    const { event } = this.props
    this.props.allowNext && this.props.allowNext(event && event.featured_image)
  }

  getData() {
    this.setState({loading: true})
    const {community_id, id} = this.props.match.params

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      this.updateViewCount()
      return
    }

    if (!this.props.event || !this.props.event.id || (id && this.props.event.id != id)) {
      this.props.getEvent(id, this.props.match.params.event_slug)
        .then(event => {
          this.setState({loading: false, event})
          this.updateViewCount()
        })
        .catch(error => {
          this.setState({loading: false, error})
          // this.props.history.push('/events/not-found')
        })
    }
    else {
      this.setState({event: this.props.event, loading: false})
    }
  }

  updateViewCount = () => {
    const { currentUser = {} } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.event.id,
      recipient_type: 'Event'
    })
    mixpanel.track('EVENT_PAGE_VIEW')
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    ...this.getParams(),
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    imagePlaceholderRef: this.imagePlaceholderRef,
    toggleVisibilityStatus: this.toggleVisibilityStatus,
    attendEvent: this.attendEvent,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {}, past_events = {} } = state.events
  const { organizers } = state.organizers
  const { link_color } = event
  const { community, communities_suggestions } = state.communities
  const { event_discussion = {}, announcements, comments } = event
  return {
    activeLink: community.brand_color,
    event,
    comments,
    announcements,
    event_discussion,
    community,
    organizers,
    past_events,
    communities_suggestions,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    getComments,
    getAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    checkForValidSlug,
    updateViewCount,
    addEventToStore,
    attendEvent: secureAction(attendEvent),
    updateEvent: secureAction(updateEvent),
    createComment: secureAction(createComment),
    updateComment: secureAction(updateComment),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))