import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../../../styles/theme/colors';

const StyledHelpPage =styled.div`
.topics-section{
  background: #eee;
  width:300px;
  margin:5px;
  padding:5px;
  border-radius: 3%;
}
li{
  line-height: 30px;
}
hr{
  color:pink;
}

`
const TopicsSection =()=>{
  return(
    <StyledHelpPage>
  <div className="topics-section">
    <Link to="/help/getting-started">Getting Started</Link><br/><hr/>
    <Link to="/help/communities">Communities</Link>
    <ul>
      <li><Link to="/help/communities/follow-a-community">Follow your favorite communities</Link></li>
      <li><Link to="/help/communities/discover-new-communities">Discover New Communities</Link></li>
      <li><Link to="/help/communities/communities-i-follow">Communities I Follow</Link></li>
      <li><Link to="/help/communities/community-suggestions">Community suggestions</Link></li>
      <li><Link to="/help/communities/announcements">Announcements</Link></li>
      <li><Link to="/help/communities/connect-with-organizers">Find and connect with organisers</Link></li>
    </ul>
    <hr/>
    <Link to="/help/events/">Events</Link>
    <ul>
      <li><Link to="/help/events/upcoming-events">Upcoming events</Link></li>
      <li><Link to="/help/events/discover-new-events">Discover new events</Link></li>
      <li><Link to="/help/events/my-events">My events</Link></li>
      <li><Link to="/help/events/event-suggestions">Event Suggestions</Link></li>
      <li><Link to="/help/events/create-an-event">Create an event</Link></li>
    </ul>
    <hr/>
    <Link to="/help/backstage">Backstage</Link>
    <ul>
      <li><Link to="/help/backstage/">Event Planning</Link></li>
      <li><Link to="/help/backstage/">Event Guests</Link></li>
      <li><Link to="/help/backstage/">Event Feedback</Link></li>
      <li><Link to="/help/backstage/">Event Settings</Link></li>
    </ul>
    <hr/>
    <Link to="/help/backstage">Organizers</Link>
    <ul>
      <li><Link to="/help/organizers/create-a-community">Create a community</Link></li>
      <li><Link to="/help/backstage/">Create an Event</Link></li>
      <li><Link to="/help/backstage/">My communities</Link></li>
      <li><Link to="/help/backstage/">Create Announcements</Link></li>
    </ul>
  </div>
  </StyledHelpPage>
  )
}

export default TopicsSection