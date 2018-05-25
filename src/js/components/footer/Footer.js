import React from 'react'
import styled from 'styled-components'
import color from '../../../theme/colors'
import footerLogo from '../../../img/eventplog-logo-name-inverted-small.png'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StyledFooter = styled.div`

   display: flex;
   flex-direction: column;

    a{
      color:${color.grayLight}
    }
   .footer-content{
    background: ${color.blueDark}; 
    display: flex;
    flex: 1;
    flex-direction: row; 
    justify-content: space-between;
    justify-content: center;
   }
   
   .footer-image{
      display: inline-flex; 
      justify-content: center;
      margin: auto 50px;
      padding-left: 85px;
      width:200px
   }
   .footer-menu{
    flex: 1;
    margin: auto 30px 

   }
   img{
    width: 150px;
   }
   .footer-text-header{
      list-style: none;
   }
   ul{
        list-style: none;
        display: inline-flex;
   }
   li{
      color: ${color.white}
      margin: auto 70px;
   }
   .footer-legal-section{
    background: ${color.blueLight};
    height:50px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;

   }
   .copyright-text{ 
    color: ${color.white}
    justify-content: center;
    margin: auto 50px;
    width: 850px;
   }
   .footer-icons{
    color: ${color.white};
    flex:1;
    margin: auto 95px;
    justify-content: center;
    font-size: 30px;
    padding-top: 10px;
    width: 100px;
   }
   .privacy-term-text{
    margin: 15px;
    display: inherit;
   }
   .privacy-terms{
      color: ${color.white};
   }
   .twitter{
    float : right;
   }
   h4{
    text-transform: uppercase
   }


`


const Footer = () => (
  <StyledFooter className="footer">


    <div className="footer-content">

      <div className="footer-image">
        <Link to="/">
          <img src={footerLogo} alt='eventplog-logo' />
        </Link>
      </div>


      <div className="footer-menu">
        <div className="footer-menu-list">
          <ul>
            <li><h4>Company</h4><Link to="/about-us"><h5>About us</h5></Link></li>
            <li><h4>Products</h4><Link to="/about-us"><h5>Why Eventplog?</h5></Link></li>
            <li><h4>Resources</h4><Link to="/about-us"><h5>Events</h5></Link></li>
            <li><h4>Extras</h4><Link to="/about-us"><h5>Communities</h5></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-legal-section">
      <div className="copyright-text"> copyright (c) {(new Date().getFullYear())}</div>
      <div className="privacy-term-text"> <Link to="/privacy-terms" className="privacy-terms">Privacy Terms</Link>  </div>

      <div className="footer-icons">
        <Icon name="facebook"/>
        <Icon name="twitter square" className="twitter"/>
      </div>

    </div>

  </StyledFooter>
)

export default Footer