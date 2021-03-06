import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'semantic-ui-react'
import Auth from 'js/auth'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

const styles = css`
  .ui.tab {
    box-shadow: none;
    border: 0;
    padding: 1rem 0;
    background: none;
    
    .pagination.secondary.menu {
       display: inline-flex;
    }
  }
  
  .content-header {
    margin: 0 1rem;
    letter-spacing: 0.01rem;
    font-weight: 600;
    font-size: 1.2rem;
    
    ${
      media.phone`
        margin: 0 0 2rem 0;
      `
    } 
  }
  
  .content-panel {
    background: transparent;
    box-shadow: none;
  }
  
  .community-title {
    margin-bottom: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .btn {
      padding: 0.5rem;
    }
  }
`

const MainContent = ({
  communities = [],
  communities_suggestions = [],
  events_suggestions = [],
  getCommunities,
  getCommunitiesSuggestions,
  followCommunity,
  attendEvent,
  activeIndex,
  className,
}) => {

  const Title = (
    <div className="community-title">
      Communities
      <Button.Link className="btn" to="/communities/new">
        <Icon name="plus circle" />
        New
      </Button.Link>
    </div>
  )

  const UserCommunities = () =>
    <CommunitiesSection showCTA={!Auth.isLoggedIn}
                        title={Title}
      {...{communities, getCommunities, followCommunity}} />

  const CommunitiesSuggestions = () =>
    <CommunitiesSection getCommunities={getCommunitiesSuggestions}
                        title={Title}
                        followCommunity={followCommunity}
                        communities={communities_suggestions} />

  const getPanes = () => {
    return [
      {name: `Communities ${Auth.isLoggedIn ? ' I follow' : ' to follow'}`, content: UserCommunities },
      {name: `Suggestions`, content: CommunitiesSuggestions },
    ]
  }

  return (
    <ContentSection className={`${className} user-communities`}>

      <ContentSection.Body>
        <Tab panes={getPanes()} {...{activeIndex}} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Events events={events_suggestions}
                        attendEvent={attendEvent} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`
