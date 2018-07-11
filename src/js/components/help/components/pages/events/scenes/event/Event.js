import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import eventimage from '../../../../../../../../img/help-pages/event.png'

const StyledDiscoverEvents=styled.div`
img{
  width:700px;
}
`

const Event = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Event</Topic>
          <Description>
           Every information about an event can be found once you click on the event you want
           to know about.  <br/><br/>
           Information about venue, date, time, organizers and even the number of people interested in
           the event is found right on the event page. <br/><br/>
           <img src={eventimage} alt="event"/>
          </Description> 
        </div>
      </div>
    </StyledDiscoverEvents>
  )
}

export default Event