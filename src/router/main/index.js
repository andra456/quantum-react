import React, {Fragment, useState, useEffect, useRef} from 'react';
import history from './history';
import { BrowserRouter as Router,  Switch, Route, Redirect} from "react-router-dom";
import dynamic from 'next/dynamic';


const Wrapper = dynamic(() => import('../../material/layout'))

let token = localStorage.getItem('token');

function MainRouter(props) {

  const [isLoad, setIsLoad] = useState(true);
  const isMount = useRef()

  useEffect(() => {
    isMount.current = true
    setIsLoad(false)
  }, [])



  const PrivateRoute = ({ children, ...rest }) => {
    
    if (rest.private && !token) {
     return <Redirect to={{ pathname: '/auth', state: { from: window.location.href }, }} />
    } 
    else {
      return ( <Route {...rest} render={() =>  ( children )}  /> )
    }
  }
    
  
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
          {!isLoad && props.options.map((e, i) => <PrivateRoute key={i} {...e}> <Wrapper {...e} /></PrivateRoute>)}
          </Switch>
        </Router>
      </Fragment>
    );
  }


export default MainRouter;