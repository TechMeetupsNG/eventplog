import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import ContentSection from 'js/components/shared/content-section'
import CategoryEvents from 'js/components/categories/scenes/category-events'
import CategorySidebar from 'js/components/categories/scenes/category-sidebar'
import Loading from 'js/components/shared/loading'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0;
  
  ${
    media.tablet`
      flex-direction: column;
    `
  }
    
  ${
    media.phone`
      flex-direction: column;
    `
  }
  
  .main-body {
    flex: 1;
    margin-right: 2rem; 
    
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  .events-section {
    margin-bottom: 6rem;
    padding-right: 2rem;
    
    ${
      media.tablet`
        padding-right: 0;
      `
    }
    
    ${
      media.phone`
        padding-right: 0;
      `
    }  
    
    .header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }
  }
`

const MainContent = ({
  loading,
  category,
  slug,
}) => {
  if (loading) {
    return <Loading />
  }
  return (
    <div className="app-container">
      <ContentSection className="category-event">

        <ContentSection.Body>
          <CategoryEvents {...{slug, category}} />
        </ContentSection.Body>

        <ContentSection.Sidebar>
          <CategorySidebar  />
        </ContentSection.Sidebar>

      </ContentSection>
    </div>
  )
}

export default MainContent