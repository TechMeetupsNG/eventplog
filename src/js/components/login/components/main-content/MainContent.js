import React from 'react'
import styled from 'styled-components'
import colors from 'js/styles/theme/colors'
import LoginForm from '../login-form'
import SignupForm from '../signup-form'
import { Message } from 'semantic-ui-react'
import { media } from 'js/styles/mixins'
import { lighten } from 'polished'

import phoneBgImage from 'img/tinu_and_chris.jpeg'

const StyledMainContent = styled.div`
  background-image: url('https://farm1.staticflickr.com/859/29724493978_91d3a443cb_o.jpg');
  background-size: cover;
  position: relative;
  
  ${
    media.phone`
      background-image: url(${phoneBgImage});
    `
  }
  
  .overlay {
    opacity: 0.4;
  }
  
  > .app-container {
    display: flex;
    z-index: 1
    
    > .message {
      flex: 1;
      margin: 20px 0 0;
    }
  }
  
  .caption {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 50px;
    margin-left: 0;
    z-index: 1;
    flex-direction: column;
    text-align: left;
    text-shadow: 0 2px 4px ${colors.black};
    
    ${
      media.phone`
        margin: 4rem 2rem;
      `
    }
  
    h1 {
      font-size: 4rem;
      font-weight: 600;
      color: white;
      font-family: "Andale Mono", AndaleMono, monospace;
      
      ${
        media.tablet`
          font-size: 3rem;
        `
      }
      
      ${
        media.phone`
          font-size: 3rem;
        `
      }
            
      span {
        /*color: ${colors.yellow};*/
      } 
    }
    
    small {
      font-size: 1.7rem;
      font-weight: 600;
      margin-top: 10px;
      line-height: 2rem;
      
      ${
        media.tablet`
          line-height: 2.5rem;
        `
      }
  
      ${
        media.phone`
          font-size: 1.3rem;
          line-height: 2rem;
        `
      }
      
      span {
        border-bottom: 2px solid ${colors.yellow};
      } 
    }
  }
  
  .form-holder {
    background: ${lighten(0.45, colors.blue)};
    border-radius: 5px;
    box-shadow: 0 2px 4px #000;
    height: auto;
    margin: 100px auto;
    margin-right: 0;
    width: 400px;
    z-index: 1;
    
    ${
      media.tablet`
        width: 300px;
        
      `
    }
    ${
      media.phone`
        margin: 0;
        border-radius: 0;
        width: 100%;
        box-shadow: none;
            `
    }
  }
`

const loadLoginComponentByPath = ({currentPath, ...otherProps}) => (
  currentPath == '/login'
    ? <LoginForm {...otherProps} />
    : <SignupForm {...otherProps} />
)

class ShowFlashMsg extends React.Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

  }
  render() {
    const {flashMsg} = this.props
    if (!flashMsg || !this.state.visible) return null
    return (
      <div className="app-container">
        <Message
          floating
          success
          content={flashMsg}
          onDismiss={this.handleDismiss}
        />
      </div>
    )
  }
}

const MainContent = ({flashMsg = null, ...otherProps }) => (
  <StyledMainContent className="main-content">
    <div className="overlay"></div>
    <ShowFlashMsg flashMsg={flashMsg} />

    <div className="app-container">
      <div className="caption">
        <h1>Maximize <br /><span>your impact</span><br />with events.</h1>
        <small>As an Organizer, Guest, or Sponsor, stay an <span>active</span> part of <span>communities</span> you love.</small>
      </div>

      {loadLoginComponentByPath(otherProps)}
    </div>
  </StyledMainContent>
)

export default MainContent
