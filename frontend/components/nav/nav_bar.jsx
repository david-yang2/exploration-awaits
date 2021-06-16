import React from 'react';
import { Link } from 'react-router-dom';
// import './app/assets/stylesheets/nav_bar.scss';

export default ({ currentUser, logout }) => {

  // const display is being used below
  // we want to display:
  // login/signup if we DO NOT have a current user
  // greetings/logout if we DO have a current user

  // use ternary to accomplish that
    // currentUser ? () : ()
  const display = currentUser ? (
    <div className="welcome-container">
      <text className="loggedUser"> Hello, {currentUser.username}</text>
      <button className="logoutbtn" onClick={logout}>Log out</button>
    </div>
  )
  // : is part of the ternary function
  : (
    <div className="signup-container">
      <Link className="btnl" to="/login">Log In</Link>
      <Link className="btns" to="/signup">Sign Up</Link>
    </div>
  );

  const booking = currentUser ? (
    <li><Link className="bookingsLink"to={`/bookings/${currentUser.id}`}>Bookings</Link></li>
  ) : (null)

  return (
    <header className="header" >
      <h3 className="headerText">Exploration awaits</h3>
      <div className="navCtrls">
        <nav className="navbar">
          <ul className ="navlinks">
            <li><Link className ="homeLink"to='/'>Home</Link></li>
            <li><Link className ="rigsLink"to='/rigs'>Overland Rigs</Link></li>
            {booking}
          </ul>
        </nav>
        {display}
      </div>
    </header>
  );
};