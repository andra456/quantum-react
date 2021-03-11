import React, { PureComponent, Fragment } from 'react';

import { FiMenu } from "react-icons/fi";
import '../../../assets/styles/css/pushmenu.css'

class Header extends PureComponent {
  constructor(props){
    super(props);
    this.wrapperRef = React.createRef();
  }
  handleClick(){
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }
  render() { 
    return ( 
      <Fragment>
        <div ref={this.wrapperRef} className="wrapper">
          <div className="before" onClick={()=> this.handleClick()}></div>
        <div className="nav">
        <FiMenu className="nav__icon"
          type="menu-fold"
          onClick={()=> this.handleClick()}
        />
        <div className="nav__body">
          lorem ipsime
        </div>
        </div>
        </div>
      </Fragment>
     );
  }
}
 
export default Header;
