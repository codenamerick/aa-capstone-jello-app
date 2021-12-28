import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import style from './auth.module.css';
import logo from '../Main/assets/jello-logo-main-final.svg';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const userName = user?.username;
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/${userName}/boards`} />;
  }

  return (
    <div className={style.authWrapper}>
      <div>
        <Link to={'/'} className={style.formLogo}>
          <img src={logo} alt='' />
        </Link>
        <form onSubmit={onLogin}>
          <div className={style.formErrors}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className={style.inputWrapper}>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className={style.inputWrapper}>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              value={password}
              onChange={updatePassword}
            />
            <Link to={'/sign-up'}>
              <p>Don't have an account? Sign up</p>
            </Link>
            <button type='submit' className={style.mainBtn}>Log in</button>
            <div className={style.demoBtn} onClick={demoLogin}>Demo</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
