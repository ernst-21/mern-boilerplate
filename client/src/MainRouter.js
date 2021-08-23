import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layout/Content/Home';
import Users from './modules/user/Users';
import Signup from './modules/user/Signup';
import Signin from './modules/auth/Signin';
import EditProfile from './modules/user/EditProfile';
import Profile from './modules/user/Profile';
import PrivateRoute from './modules/auth/PrivateRoute';
import ResetPassword from './modules/auth/ResetPassword';
import EmailRequest from './modules/auth/EmailRequest';
import InfoSuccess from './modules/user/InfoSuccess';
import InfoError from './components/InfoError';

const MainRouter = () => {
  return (
    <div className="site-layout-background">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/reset/edit/:token" component={ResetPassword} />
        <Route path="/email" component={EmailRequest} />
        <Route path="/info" component={InfoSuccess} />
        <Route path="/info-network-error" component={InfoError} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
      </Switch>
    </div>
  );
};

export default MainRouter;
