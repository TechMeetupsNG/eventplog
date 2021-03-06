import React from 'react'
import styled from 'styled-components'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'

const StyledAboutUs = styled.div`
  display: flex;
  justify-content:center;
`

const AboutUs = () => {
  return(
    <StyledAboutUs className="app-container">
      <div className="about-us-content">
        <Topic className="topic">
          About EventPlog 
        </Topic>
        <Description>
          EventPlog is an event application that helps organizers to plan effective, engaging, 
          memorable and accountable meetups, while making it easier for events and meetups to be 
          discoverable to attendees. It is a platform where individuals get to find events, show interest, 
          attend the event and give feedback on the event. EventPlog can be summarised in four steps Discovery, 
          Planning, Check in and Feedback.
        </Description>
        <Topic>
          Discovery
        </Topic>
        <Description>
          With EventPlog Organizers create an event that is discoverable to interested Attendees when 
          they follow a particular community and indicate interest on topics related to the event.
        </Description>
        <Topic>
          Planning
        </Topic>
        <Description>
          After creating an event organizer can create a To-do list either by modifying a template or by
          creating a fresh one. Each task is assigned to co-Organizers or volunteer and has a completion date 
          with notifications and reminders. When there is a change in time or venue, there is no need to worry, 
          with our announcement feature, all interested in an event get automatic updates.
        </Description>
        <Topic>
          Check-in
        </Topic>
        <Description>
          For Organizers, a Messenger Code can be generated. With the generated code, Attendees can 
          easily Check in to the event by using their Messenger App to scan the event code eliminating 
          long queues. For Attendees that do not have Messenger App, they have the option to be checked 
          in offline by the Organizer. For registration collected outside of EventPlog, Organizers can upload 
          spreadsheets to the application.
        </Description>
        <Topic>
          Feedback
        </Topic>
        <Description>
          With EventPlog Attendees can give feedback through the means by which they have checked-in which can be through 
          the Messenger Chatbot or offline. This makes collecting feedback easy. Organizers can then generate report to see how well 
          the event went as planned.
          With EventPlog it is now easy for newbies to start a community, host events, and create report.
        </Description>
      </div>
    </StyledAboutUs>
  )
}

export default AboutUs