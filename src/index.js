import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HousesList from "./components/HouseList";

//this is the place that the main render happens.

//i had a very difficult time this week, trying to get an API
//to work how i expected it. i made an app, but kept running into 
//problems with the api, and couldn't solve it, then in my haste to
//come up with something working to sumbit i overwrote that work with the
//"code-along" project, so, here it is, i added a way to create a house
//but ran out of time to make the delete house component, or make it my own in
//any way really. i don't understand why this API seems to work, but
//making my own produces a whole slew of problems i don't know how to solve


ReactDOM.render(
  <div>
    <HousesList props={{}} />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
