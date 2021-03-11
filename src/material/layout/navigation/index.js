import React, { Fragment, useState, useEffect,  useRef} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'


//const logo = dynamic(() => import('../static/assets/img/logo.svg'))
function Nav(props) {
  const { id, setId } = useState(0)
  const initialState ={
    last_known_scroll_position: 0,
    ticking : false
  }
  const [fixed, setfixed] = useState(false)
  const [state, setstate] = useState(initialState)
  //Access Redux Store State
  const isMount = useRef(false);

  useEffect(() => {
      isMount.current = true;
      if (isMount.current) {
        DetectHeigth()
        if (id) {
          //let div  = document.getElementById("demo");
          window.scrollTo({
            top: 1500,
            left: 0,
            behavior: 'smooth'
          });
        }
        window.addEventListener('scroll', function(e) {
          setstate({ ...state, last_known_scroll_position : window.scrollY, ticking : true })
        });
      }
      return function cleanup()  {
        window.removeEventListener('scroll',  function(e) { 
        });
        setstate( initialState)
        setfixed( false )
      }
  }, [])

  
  const DetectHeigth = () => {
    let body = document.body; // For Safari
    let html = document.documentElement; 
    let x = html.scrollTop;
    if (x !== 0) html.scrollTop = x + 20
    
  }
  let globalID;
  useEffect(() => {
    if (state.ticking) {
      if (isMount.current) { 
        globalID = requestAnimationFrame(often);
      }
    } else {
      setfixed(false)
    }

    return function cleanup()  {
      cancelAnimationFrame(globalID);
    }
    
  }, [state.last_known_scroll_position])

 function often() {
  if ( state.last_known_scroll_position > 10) {
    setfixed(true) 
  } else {
      setfixed(false)
  }
 
 }

  return (
    <Fragment>
      
    <div className={`top-head-menu ${ fixed? 'fixed_top':''}`}>
      <div className="container flex-menu">
          <div className="logo">
            {
            // put logo
            }
          </div>

          
          <nav>
            
            <ul>
              <li className="head_nav">
                
                  <div className="selected-pointer"  onClick={()=> props.onShowPushMenu(!props.active)}>
                    {
                      // put image back
                    }
                  </div>
                  <div className="logo">
                    {
                      // logo
                    }
                </div>
            
              </li>
              <li>
                
                <Link prefetch href="/">
                  <a alt="home">Home</a>
                </Link>
              </li>
              <li>
               
                <Link prefetch href="/form/0/0/0">
                    <a alt="pengajuan">Pengajuan</a>
                </Link>
                
              </li>
              

            </ul>

          </nav>


          <button className="menu-mobile" onClick={()=> props.onShowPushMenu(!props.active)}>
           {
             // logo mobile
           }
          </button>
      </div>
    </div>
    </Fragment>
  )
}

export default Nav
