// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import colors from 'js/styles/theme/colors';

// images
import sampleEventImg from 'img/tech_is_in_you.png'

const StyledSidebarCard = styled.div`
  margin: 2rem 0;
  background: white;
  border: 1px solid ${colors.white};
  
  ${
    media.tablet`
      display: flex;
      flex-direction: row-reverse;
      padding: 1rem;
      border-radius: 10px;
    `
  }
  
  ${
    media.featurePhone`
      display: block;
    `
  }
  
  .card-body {
    padding: 1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    ${
      media.tablet`
        flex: 1;
        align-items: baseline;
        display: flex;
        flex-direction: column;
      `
    }
  }
  
  .img-holder {
    width: 100%;
    height: 100px;
    background-size: cover;
    position: relative;
    
    ${
      media.tablet`
        flex: 1;
        width: auto;
      `
    }
    
    ${
      media.featurePhone`
        height: 100px;
      `
    }
  }
  
  .title-link {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  .card-title {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 100;
    
    a {
      color: #444;
      font-weight: 500;
      
      ${
        media.tablet`
          letter-spacing: 0.5px; 
        `
      }
    }
  }
  
  .card-description, .card-meta {
    font-size: 0.9rem;
    color: #aaa;
    
    a {
      color: #999;
      font-weight: bold;
    }
  }
  
  .card-description {
    margin: 0.5rem 0;
  }
  
  .card-meta {
    ${
      media.tablet`
        flex: 1;
        display: flex;
        align-items: flex-end;
      `
    } 
  }
  
  button {
    font-size: 0.7rem;
    padding: 0.8rem;
    background: #fff;
    border: none;
    box-shadow: 1px 2px 4px #444;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

type itemType = {
  title: string,
  description: string,
  featuredImage?: string,
  children: any
}

const SidebarCard = ({
  id,
  title,
  description,
  featured_image,
  btn = {},
  meta,
  titleLink,
}: itemType) => (
  <StyledSidebarCard className="sidebar-card">
    <div className="img-holder" style={{
          backgroundImage: `url(${featured_image || "https://placeimg.com/640/480/tech"})`
        }}>
      <Link className="title-link" to={titleLink || "#"} />
      {btn.text && <Button {...btn}>
                     {btn.text}
                   </Button>}
    </div>
    <div className="card-body">
      <div className="card-title">
        {title}
      </div>
      <div className="card-description">
        {description}
      </div>
      <div className="card-meta">
        {meta}
      </div>
    </div>
  </StyledSidebarCard>
)

export default SidebarCard