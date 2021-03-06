import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Board from './components/Board';
import LostPage from './components/LostPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const session = useSelector((state) => (state.session));
  const user = useSelector(state => state.session.user);
  const userName = user?.username;

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          {session.user && <Redirect to={`/${userName}/boards`}/>}
          <NavBar />
          <Main />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path={`/boards/:boardId`} exact={true} >
          <Board />
        </ProtectedRoute>
        <ProtectedRoute path={`/:username/boards`} exact={true} >
          <Dashboard />
        </ProtectedRoute>
        <Route path='/' >
          <LostPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
