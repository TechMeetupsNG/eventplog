import React from 'react'
import {Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import eventimage from 'img/help-pages/your-communities.png'
import HelpPage from 'js/components/help/components/image'

const EventSuggestions = () => {
  return(
    <div> 
      <Topic>Event Suggestions</Topic>
      <Description>
        Based on your interest in certain events or communitites, we suggest events you might be 
        interested in.<br/><br/> Find event suggestions  the right side of all <Link to=""> communities </Link>
        pages. <br/><br/>
        <HelpPage src={eventimage} alt="Event suggestions"/>
      </Description> 
    </div>
  )
}

export default EventSuggestions