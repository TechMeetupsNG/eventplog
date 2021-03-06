import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth'

import {
  getEventChecklist,
  updateEventChecklist,
} from './actions'

class EventUpdateContainer extends Component {
  state = { activeIndex: -1, event_checklist: {} }

  componentDidMount() {
    this.getData()
  }

  changeAccordion = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  handleChange = (key, value) => {
    this.setState({event_checklist: {
      ...this.state.event_checklist, [key]: value
    }})
  }

  handleSubmit = () => {
    return this.props.updateEventChecklist(this.state.event_checklist)
                     .then(event_checklist => this.setState({event_checklist}))
  }

  getData() {
    const {event} = this.props
    this.setState({loading: true})
    this.props.getEventChecklist({event_id: event.id})
      .then(event_checklist => { this.setState({ event_checklist, loading: false }) })
      .catch(error => this.setState({ loading: false, error }))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    changeAccordion: this.changeAccordion,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event_checklist } = state.event_checklists
  const { event } = state.events
  const { loading, error } = event_checklist
  const { todo_items = [] } = state.todo_items
  return {
    event_checklist,
    loading,
    error,
    todo_items,
    event,
    user: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEventChecklist,
    updateEventChecklist
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))