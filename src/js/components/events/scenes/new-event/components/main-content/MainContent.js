import React from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import ContentBeforeEventCreate from '../content-before-event-create'
import ContentAfterEventCreate from '../content-after-event-create'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  
  h3 {
    color: ${defaults.grayMedium};
  }
  
  > p {
    margin: 20px 0 50px;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.9rem;
  }
  
`


const MainContent = (props) => (
    <StyledMainContent className="main-content app-container">
        <ContentBeforeEventCreate {...props} />
    </StyledMainContent>
)

    export default MainContent
