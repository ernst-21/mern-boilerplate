import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../modules/auth/auth-helper';
import SignoutBtn from '../../modules/auth/Signout';

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return { fontSize: '16px', color: '#d94506', fontWeight: 500 };
  else
    return {
      backgroundColor: 'transparent',
      fontSize: '16px',
      color: '#0B0B09'
    };
};

const MenuItems = (props) => {
  return (
    <ul className={props.className}>
      <li onClick={props.onClick} style={isActive(props.history, '/')}>
        <Link to="/">
          <span style={isActive(props.history, '/')}>Home</span>
        </Link>
      </li>
      {!auth.isAuthenticated() && (
        <>
          <li
            onClick={props.onClick}
            style={isActive(props.history, '/signin')}
          >
            <Link to="/signin">
              <span style={isActive(props.history, '/signin')}>Sign In</span>
            </Link>
          </li>
          <li
            onClick={props.onClick}
            style={isActive(props.history, '/signup')}
          >
            <Link to="/signup">
              <span style={isActive(props.history, '/signup')}>Sign up</span>
            </Link>
          </li>
        </>
      )}
      {auth.isAuthenticated() && (
        <>
          <li onClick={props.onClick} style={isActive(props.history, '/user/' + auth.isAuthenticated().user._id)}>
            <Link to={'/user/' + auth.isAuthenticated().user._id}>
              <span
                style={isActive(
                  props.history,
                  '/user/' + auth.isAuthenticated().user._id
                )}
              >
                My Profile
              </span>
            </Link>
          </li>
          <SignoutBtn
            onClick={() => {
              auth.clearJWT(() => history.push('/'));
            }}
          >
            Sign out
          </SignoutBtn>
        </>
      )}
    </ul>
  );
};

export default MenuItems;
