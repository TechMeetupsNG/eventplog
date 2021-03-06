import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import { addQueryToStore } from './actions'

import checkEqual from 'js/utils/checkEqual'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

let searchTimeoutId

const tabPages = {
  0: 'events',
  1: 'communities'
}

class SearchContainer extends Component {
  state = {
    searchQuery: {title: '', category_name: ''},
    date_range: '' ,
    activeTab: tabPages[0]
  }

  componentWillMount(props) {
    this.setState({ searchQuery: this.getParams() })
  }

  componentDidMount() {
    this.props.addQueryToStore(this.state.searchQuery)
  }

  componentDidUpdate(props, prevProps) {
    if (props.location.search !== this.props.location.search) {
      this.setState({ searchQuery: this.getParams() }, this.handleSubmit)
    }
  }

  handleChange = (updates) => {
    this.setState(updates, () => {
      let delay = 500
      searchTimeoutId
        ? clearTimeout(searchTimeoutId)
        : delay = 0
      searchTimeoutId = setTimeout(() => {
        this.props.addQueryToStore(this.state.searchQuery)
      }, delay)
    })
  }

  handleSubmit = () => {
    this.props.addQueryToStore(this.state.searchQuery)
  }

  onTabChange = (e, data) => {
    this.setState({activeTab: tabPages[data.activeIndex]})
  }

  getParams = (props) => {
    // retrieve any '?activeIndex=1' query in url
    return {...paramsToObj((props || this.props).location.search.substr(1))}
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    ...this.getParams(),
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    onTabChange: this.onTabChange,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { query } = state.search

  return {
    query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQueryToStore
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer))