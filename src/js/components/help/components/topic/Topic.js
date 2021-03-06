import React from 'react'
import styled from 'styled-components'
import {media } from 'js/styles/mixins'
import { lighten } from 'polished'

const StyledTopic = styled.div`
  font-weight: bold;
  margin: 15px;
  border-bottom: 1px solid ${props => lighten(0.3, props.theme.blue)};
  margin-top: 3rem;
  
  margin-left: 0;
  margin-right: 0;
`

const Topic = (props) => {
  return(
    <StyledTopic className= "topic">
      <h3>{props.children}</h3>
    </StyledTopic>
  )
}

export default Topic