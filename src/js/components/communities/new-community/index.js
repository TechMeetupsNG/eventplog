// external
import React, { Component } from 'react'

// local
import ForgotPassword  from './NewCommunity'
import ForgotPasswordContainer from './NewCommunityContainer'
import renderPropsToComponent from '../../shared/render-props-to-component'

export default renderPropsToComponent(ForgotPasswordContainer, ForgotPassword)

