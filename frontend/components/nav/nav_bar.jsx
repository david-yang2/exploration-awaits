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
    <div>
      <p> Hello, {currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </div>
  )
  // : is part of the ternary function
  : (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  const booking = currentUser ? (
    <li><Link to='/bookings'>Bookings</Link></li>
  ) : (null)

  return (
    <header >
      <nav >
        <ul >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/rigs'>Overland Rigs</Link></li>
          {booking}
        </ul>
      </nav>
      <div >
        {display}
      </div>
    </header>
  );
};