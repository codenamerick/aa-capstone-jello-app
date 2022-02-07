import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    dispatch({type:'logout'});
  };

  return <p onClick={onLogout}>Logout</p>;
};

export default LogoutButton;
