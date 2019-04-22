import React, { useEffect } from 'react';
import './App.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Lost from './pages/Lost';
import Found from './pages/Found';
import FoundAdd from './components/add/Found';
import LostAdd from './components/add/Lost';
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import * as $ from 'jquery'
import { signIn, setHistory } from './store/actions/actions'

const App = ({ user, logIn, historySet, history }) => {

  useEffect(_ => {
    const item = localStorage.getItem('car-safe');
    if (item) {
      let userInfo = item.split('!');
      logIn({
        email: userInfo[0],
        pass: userInfo[1]
      })
    }
    historySet(history);
    console.log(history)
  }, [])

  return (
    <article className="app">
      <Navbar />

      <Switch>
        <Route path="/signin" component={Sign} />
        <Route path="/signup" component={SignUp} />
        {$.isEmptyObject(user) && <Redirect from="/*" to="/signin" />}
        <Route path="/" exact component={Home} />
        <Route path="/lost/add" component={LostAdd} />
        <Route path="/lost" component={Lost} />
        <Route path="/found/add" component={FoundAdd} />
        <Route path="/found" component={Found} />
        {!$.isEmptyObject(user) && <Redirect from="/*" to="/" />}
      </Switch>

    </article >
  );

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (info) => { dispatch(signIn(info)) },
    historySet: (h) => { dispatch(setHistory(h)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));