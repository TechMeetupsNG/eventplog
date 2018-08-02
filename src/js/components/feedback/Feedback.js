import React from 'react';
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import Settings from './scenes/feedback-settings/';
import Report from './scenes/feedback-report'

const StyledGuests = styled.div`
  .content-header {
    margin-top: 2rem;
  }
`
const Guests = (props) => {
  const panes = [
    {name: 'Report', content: Report},
    {name: 'Settings', content: Settings},
  ];

  return (
    <StyledGuests>
      <Tab panes={panes}/>
    </StyledGuests>
  )
}

export default Guests;
