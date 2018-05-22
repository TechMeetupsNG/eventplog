import React, { Component } from 'react';

import { Switch } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import EPHeader from '../login/components/header'
import createLoader from '../shared/loading/createLoadable'
import styled, { ThemeProvider } from 'styled-components';
import defaults from '../../../theme/variables';
import {fakeAuth, PrivateRoute} from '../../auth'


const Events = createLoader(() =>
  import('../events/events'  /* webpackChunkName: "Events" */))

const Event = createLoader(() =>
  import('../events/event' /* webpackChunkName: "EventWithContainer" */))

const NewEvent = createLoader(() =>
  import('../events/new-event' /* webpackChunkName: "NewEvent" */))


const StyledEventPlog = styled.div`
  --fg: ${props => props.theme.fg};
  --bg: ${props => props.theme.bg};
  --activeLink: ${props => props.theme.activeLink};
  --gray: ${props => props.theme.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

const EventPlog = ({user = {}}) => (
  <ThemeProvider theme={{
      ...defaults,
      ...user.theme,
    }}>
    <StyledEventPlog>
      <EPHeader/>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Events} />
        <PrivateRoute exact path="/events" component={Events} />
        <PrivateRoute exact path="/events/new" component={NewEvent} />
        <PrivateRoute path="/events/:id" component={Event} />
      </Switch>
    </StyledEventPlog>
  </ThemeProvider>
)

export default EventPlog
