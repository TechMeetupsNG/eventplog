import { css } from 'styled-components'

export default css`
  .react-clock {
    display: block;
    position: relative;
  }
  .react-clock,
  .react-clock *,
  .react-clock *:before,
  .react-clock *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-clock__face {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    border-radius: 50%;
  }
  .react-clock__hand {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
  }
  .react-clock__hand__body {
    position: absolute;
    background-color: black;
    transform: translateX(-50%);
  }
  .react-clock__mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
  }
  .react-clock__mark__body {
    position: absolute;
    background-color: black;
    transform: translateX(-50%);
  }
  .react-clock__mark__number {
    position: absolute;
    left: -40px;
    width: 80px;
    text-align: center;
  }
  .react-clock__second-hand__body {
    background-color: red;
  }
`