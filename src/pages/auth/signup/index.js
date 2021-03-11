import React, { useState, Fragment} from 'react';
import './_index.scss'





function Signin(props) {
  
  // intial state
  const form = {
    email: '',
    password: ''
  }

  // set state
  const [input, setinput] = useState(form)

  const handleSubmit = (e) => {
    alert('submit')
  
   
  }

 
    return (
    
        <Fragment>
        
        <section className="vision-section">
        <div className="fluid-container">
              
              <div className="box-signin">
                  <div className="row">
                 
                          <div className="col-xs-12
                                      col-sm-12
                                      col-md-6
                                      col-lg-9
                                      .col-xl-9
                                      ">
                             <div className="main">
                                <form
                                            onSubmit={(e) => handleSubmit(e)}
                                            className="ui form main-box"
                                            style={{ textAlign: 'center' }}>
                                              <h3 className="ui header logo">
                                              Sign in to Quantum test
                                              </h3>
                                              <div className="field">
                                                <button className="ui fluid button mcb google">
                                                  <i className="icon"></i>
                                                  Sign In with Google
                                                </button>
                                              </div>
                                              <div className="field">
                                                <button className="ui fluid button mcb facebook">
                                                  <i className="icon"></i>
                                                  Sign In with Facebook
                                                </button>
                                              </div>
                                              <div className="ui horizontal divider"> <span> Or  </span></div>
                                              <div className="field">
                                              
                                                  <input
                                                    className="input"
                                                    type="email"
                                                    placeholder="Email ID"
                                                    required
                                                    value={input.email}
                                                    onChange={e => setinput({...input, email: e.target.value })}
                                                  />
                                            
                                              </div>
                                            <div className="field">
                                            
                                                <input
                                                  className="input"
                                                  type="password"
                                                  placeholder="Password"
                                                  required
                                                  value={input.password}
                                                  onChange={e => setinput({...input, password: e.target.value })}
                                                />
                                           
                                            </div>
                                            <div className="field">
                                           
                                                <button type="submit" onClick={(e)=> handleSubmit(e)} className="ui button primary fluid">
                                                  Sign InT
                                                </button>
                                           
                                            </div>
                                  </form>
                                  </div>
                          </div>
                          <div className="col-xs-12
                              col-sm-12
                              col-md-6
                              col-lg-3 .col-xl-3 intorduce"> 
                              <div className="box-floating">
                                        <h3 className="ui header logo" style={{ textAlign: 'right'}}>
                                            
                                        </h3>
                                        
                                        <h1>Discover the world’s top Designers & Creatives.</h1>
                                             <br/>
                                             <button type="submit" className="ui button primary">
                                                  Register
                                            </button>
                                        </div>

                                        <img src="/assets/images/b4925d9a3.jpg" className="market"/>

                                        
                          </div>

                     </div>
                  </div>
          </div>
              
        </section>
        </Fragment>
    );
  
}

export default Signin