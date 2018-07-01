import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import {Link } from 'react-router-dom'

const StyledCommunitySuggestions = styled.div`
.help-description-container{
  display:flex;
  margin 5px;
  padding: 5px;
}

img{
width:700px;
height: 500px;
}

.help-main-content{
  font-size: 15px;
  margin-left:80px;
  max-width: 650px;
}

`

const Communitysuggestions = () =>{
  return(
    <StyledCommunitySuggestions>
      <div className="help-description-container">
        <div><Sidebar/></div>
        <div className="help-main-content"><Topic>Community Suggestions</Topic>  
          <Description>
            Communities you might be interested in are always shown to you based on your previous 
            event interests or communities you already follow. Community suggestions can be found as a section
            on the <Link to ="">events page </Link> 
          </Description>
        </div>
      </div>
    </StyledCommunitySuggestions>
  )
}

export default Communitysuggestions