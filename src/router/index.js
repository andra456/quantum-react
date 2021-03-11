import React, { Fragment } from 'react'
import dynamic from 'next/dynamic';
import MainRoutes from './main';

const loaderComponent = (<div className="loader-container">
<div className="loader-container-inner">
    <h6 className="mt-5">

        <div className="heartbeat">
        <img src="#" alt="Logo" />;
            
        </div>
    </h6>
</div>
</div>)

// dinamic split component next js
const Home = dynamic(() => import('../pages/home'), { loading: () => loaderComponent });
const Signin = dynamic(() => import('../pages/auth/signin'), { loading: () => loaderComponent });
/*
function ImportComponent(e){
  let page = e.page;
  console.log(page, e)
  if(!e) { return null }
  let a = e.loader?  { loading: () => loaderComponent, ...page.ssr } :{...page.ssr}
  return dynamic(() => import(`../pages${page.path}`), {...a})
}
*/
const set = {
    exact: true,
    sensitive: true,
    strict: true,
  };


export const routeList =  [
    {   
        ...set,
        key: "login",
        path: "/auth",
        layout: "blank",
        children : <Signin/>,
        private: false
        
    },
    {  
        ...set,
        key: "dashboard",
        path: "/",
        layout: "sidebar",
        children : <Home/>,
        private: true
       
   },
    
]




const Routes = () => (
    <Fragment>
      <MainRoutes options={routeList} />
      
    </Fragment>
  );
  
export default Routes;
