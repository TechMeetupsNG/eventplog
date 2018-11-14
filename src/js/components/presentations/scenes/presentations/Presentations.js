import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

import PresentationsList from './PresentationsList'
import NewPresentation from '../new-presentation'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import { genEventLink } from 'js/utils'

const styles = css`
  position: relative;
  
  &.app-container {
    margin-top: 3rem;
    padding: 1rem;
    
    > div {
      width: 100%;
    }
  }
  
  .pic-frame {
    margin: 2rem 0;
  }
  
  .caption {
    margin: 1rem 0;
  }
  
  img {
    max-width: 100%;
  }
  
  .pagination-wrapper {
    display: flex;
  }
`

export const generateTitle = (event) => {
  const title = <Link to={`${genEventLink(event, event.community)}?utm_source=feedback_form`}>{event.title}</Link>
  return <p>All presentations - {title}</p>
}

export const Presentations = ({
  className,
  presentations,
  event,
  loading,
  error,
  currentUser
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <div className={`${className} presentations app-container`}>
      <div>
        <PresentationsList title={generateTitle(event)}
                  currentUser={currentUser}
                  presentations={presentations} />
        { event.is_stakeholder &&
          <ContentPanel title="Add a presentation">
            <NewPresentation newPresentation />
          </ContentPanel>
        }
      </div>
    </div>
  )
}

export default styled(Presentations)`${styles}`
