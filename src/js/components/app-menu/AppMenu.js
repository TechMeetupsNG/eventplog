import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from 'styled-components'
import { lighten } from 'polished'
import {
  Icon,
  Menu,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react'

import Button from 'js/components/shared/button'
import { genUserProfileLink } from 'js/utils'
import { media, maxMedia } from 'js/styles/mixins'
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/variables.js'

const StyledAppMenu = styles.div`
  .ui.segment.pushable {
    margin: 0;
    border: none;
    border-radius: 0;
    
    
    .pusher {
      background-color: ${props => props.theme.gray};
      background-blend-mode: color-burn;
      background-size: contain;
      
      ${
        maxMedia.tablet`
          padding-right: 0;
          background-color: ${props => props.theme.white};
          background-image: none;
        `
      }
    }
    
    .ui.visible.thin.left.sidebar~.pusher {
      padding-right: ${props => props.theme.sidebarWidth};
      height: 100vh;
      overflow-y: scroll;
      transform: translate3d(${props => props.theme.sidebarWidth},0,0);
      
    }
    
    .logo {
      padding: 1.2rem 1rem 1.2rem;
    }
    
    .sidebar.menu {
      height: 100vh;
      overflow-y: scroll;
      padding-top: 3rem;
      
      .item {
        color: ${props => props.theme.grayMedium};
        font-size: 90%; 
        
        &.sponsor {
          color: ${props => lighten(0.2, props.theme.yellow)};
        }
        
        &.divider {
          border-top: 3px solid;
          margin-top: 1.5rem;
          padding-top: 2rem;
        }
        
        ${
          media.desktop`
            flex-direction: row;
            display: flex;
            align-items: center;
            text-align: left;
            
            .icon:not(.dropdown) {
              margin: 0 0.5rem 0 0 !important;
            }
          `
        }
        
        &:hover {
          color: var(--primaryLight);
        }
      }
    }
    
    .ui.basic.segment {
      padding: 0;
    }
  }
  
  .app-header {
    border: none;
  }
  
  .ui.thin.left.sidebar, .ui.thin.right.sidebar {
     width: ${props => props.theme.sidebarWidth};
    
    .menu > ul {
      flex-direction: column-reverse;
      margin: 0;
      
      li {
        margin: 1rem 0;
        
        a {
          border-color: #eee;
          color: #eee;
          padding: 1rem;
        }
        
        
        &.sidebar-btn {
          margin: 2rem 0;
          
          &.login {
            display: inline-block;
            margin: 2rem;
          }
          
          a {
            display: inline-block
          } 
        }
        
        &.user-profile {
          padding: 0;
          background: #444;
          margin-top: 0;
          
          ${
            media.phone`
              padding: 1rem 0 0;
            `
          } 
        }
      }
    }
    
    .right.menu  {
      .dropdown.item > .icon {
        display: none
      }
      
      .menu.transition.visible a {
        color: var(--activeLink);
      }
    }
    
  }
  
  .menu-title {
    font-size: 1.4rem;
    padding-left: 1rem;
    
    ${
      media.desktop`
        text-align: left;
      `
    }
  }
  
  .logo-hold {
    display: flex;
    width: 100%;
    
    .logo {
      max-width: 100%;
    }
  }
  
  .menu-btn {
    position: fixed;
    color: ${props => props.theme.gray};
    z-index: 10000;
    top: 0;
    left: 0;
    background: #1b1c1c;
    cursor: pointer;
    font-size: 1.3rem;
    padding: 1rem;
    display: none;
  }
  
`

const AppMenu = ({
  showSidebar,
  isInternalPath,
  toggleSidebar,
  handleSidebarHide,
  user = {},
  menu = {},
  isMobile,
  sidebarWidth,
  contextRef,
  handleContextRef,
  children,
}) => {
  return (
    <StyledAppMenu>

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='slide out'
          icon='labeled'
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={showSidebar}
          width='thin'
          onClick={() => isMobile && handleSidebarHide()}
        >

          <div className="sidebar-hold">

            {menu.items && menu.items.map(item => (
              item.name &&
              <NavLink className={`item ${item.className}`}
                       activeClassName="active"
                       to={item.link || '#'}>
                {item.icon && <Icon name={item.icon} />}
                {item.name}
              </NavLink>
            ))}

            {menu.items && menu.items.length > 0 &&
              <Nav>
                <Nav.Item className="sidebar-btn">
                  <Button.Link to="/e/new">Create Event</Button.Link>
                </Nav.Item>
              </Nav>
            }

            <Link className="item" to="/">
              <Icon name='home' />
              Home
            </Link>
            <NavLink className="item" to="/search">
              <Icon name='search' />
              Search
            </NavLink>
            <NavLink className="item" to="/events">
              <Icon name='table tennis' />
              Events
            </NavLink>
            <NavLink className="item" to="/communities">
              <Icon name='users' />
              Communities
            </NavLink>
            <NavLink className="item" to="/categories">
              <Icon name='folder outline' />
              Categories
            </NavLink>
            <NavLink className="item" target="_blank" to="https://blog.eventplog.com">
              <Icon name='pencil' />
              Blog
            </NavLink>
            {(!menu.items || menu.items.length == 0) &&
              <Nav>
                <Nav.Item className="sidebar-btn">
                  <Button.Link to="/e/new">Create Event</Button.Link>
                </Nav.Item>
              </Nav>
            }
          </div>
        </Sidebar>

        <Sidebar.Pusher dimmed={false && isMobile && showSidebar}
                        style={{paddingRight: !isMobile && showSidebar ? sidebarWidth : '0'}}
                        onClick={() => (showSidebar && isMobile && handleSidebarHide())}>
          <Segment basic>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </StyledAppMenu>
  )
}

export default AppMenu