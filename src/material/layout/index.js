import React, {  Fragment, useState, useEffect, useRef } from 'react'

import Head from './header';
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import './ReactToastify.scss';

import '../../static/style/base.scss'


const Nav = dynamic(() => import('./navigation'),{ ssr: true })
const Footer = dynamic(() => import('./footer'),{ ssr: false })


function Wrapper(props)  {
  console.log(props)
  const options = props
  const nav = options.layout === 'sidebar'?true:false
  const isMount = useRef(false);
  const [active, setactive] = useState(false);
  const [preload, setpreload] = useState(true);

  useEffect(() => {
    isMount.current =true
    console.log(nav)
  }, [])

  useEffect(() => {
    if (isMount.current) {
      setTimeout(() => {
        setpreload(false)
      }, 1000);
    }
  }, [props.children])
  const activated =(e)=> {
    console.log(e)
      setactive(e)
    
    
  }
  return (
    <Fragment>
      <Head
        title={options.title}
        description={options.description}
        url={''}
        ogImage={''}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      pauseOnHover/>
      <div className={`preloader ${preload?'active':''}`} > <div className="logo-center">LOGO</div> </div>
      <div className={`constractor ${active? 'active-push' : '' }`}>
      { nav ? <Nav active={active} onShowPushMenu={ (e)=>{  activated(e) } } /> : ''}

        <div className="body-content">
          { props.children }
        </div>
        <Footer/>
      </div>
      
    </Fragment>
);}



export default Wrapper;