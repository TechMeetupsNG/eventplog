import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import EventCard from './components/event-card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../../../styles/theme/colors'
import EventCardNew from './components/event-card-new'
import CommunityDiv from './components/community-interest'
//import src from '../../../../img/tech_is_in_you.png'

const StyledEvents = styled.div`

  .event-page-div{
    display: flex;
    flex-direction:row;
  }  
  .event-group {
    margin-left: 55px;
    
    .event-group-header {
      font-weight: 400;
      margin-bottom: 30px;
    }
    h4{
      margin-left:75px;
    }
  }
  
  .create-event {
    width: 100%;
    padding: 40px;
  }
  .event-menu-div{
    border-bottom: 1px solid #eeee;
    height: 30px;
  }
  .event-menu{
    color: ${colors.primary};
    list-style: none;
     
  }
  ul{
    display: flex;
    margin-left:70px
  }
  li{
    padding: 0.5rem;
    margin: auto 15px;
  }
 
  .announcement-notifier-message{
    background: #f0f9f0;
    color: ${colors.green};
    font-weight: bold;
    margin: 15px;
    margin-left: 130px;
  }
  .event-page-community-div{
    margin:50px;
    padding-left: 125px;
  }
  
`
const EventsMiniHeader = ()=>{
  return(
    <div className="event-menudiv">
    <ul className="event-menu">
      <li>Events</li>
      <li> Communities</li>
    </ul>
    </div>
  )
}

// const NewEventCard =(title, events)=>{
//   return(
//     <EventCardNew/>
//   )
// }

const AnnouncementNotifier = () =>{
  return(
    <div className="announcement-notifier">
      <p className="announcement-notifier-message">We'll let you know if there are any announcements regarding this event</p>
    </div>
  )
}

const createEventGroup = (title, events) => (
  <div class="event-group">
    <h4>{title}</h4>
    {/*<Card.Group itemsPerRow={4}>*/} 
      {events && events.map((event, index) => {
          return <EventCardNew key={index} event={event} />
        }
      )}
    {/*</Card.Group>*/}
  </div>
)

const eventss = Array.from(Array(3).keys()).map(() => {
  return {
    id: Math.random(),
    organizer: 'Developer Circles Lagos',
    //description: 'Boobae is teaching Javascript',
    start_time: new Date(),
    title: 'Tech is in you',
    venue: 'Start Zone Gbagada'
  }
});

const Events = ({ events }) => (
  <StyledEvents>
    
    <EventsMiniHeader/>
    
   <div className="event-page-div"> 
      <div className="cards-div">
        <AnnouncementNotifier/>
        {createEventGroup("Upcoming Events", eventss)}
        {createEventGroup("Events you might be interested in", eventss)}
      </div>
      <div className="event-page-community-div">
        <CommunityDiv/>
      </div>
    </div>
  </StyledEvents>
)
export default Events