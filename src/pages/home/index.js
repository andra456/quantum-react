import React, { Fragment, useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import TableSheet from './attributes/tables'
import _ from 'lodash';
import * as action from '../../redux/actions/usersAction'

function Home(props) {
    const initToggle = {
        delete : false,
        edit: false
    }
    const defaultReqTable = {
        search_keywords: "",
        filter_group_id: 0,
        page: 1,
        delay:5 
      }

    const [ dataList, setData ] = useState([]);
    const [toggle, settoggle] = useState(initToggle)
    const [idSelected, setidSelected] = useState(null)
    const [payloadTable, setpayloadTable] = useState(defaultReqTable)
    const isMount = useRef(false);
   
    useEffect(() => {
        isMount.current = true;
    }, [])


    useEffect(() => {
        if (isMount.current) { fetchData() }
        
    }, [payloadTable])
    useEffect(() => {
        if (isMount.current) {
           
            if (!_.isNil(props.content.list_user)) {
                console.log('goes here', props.content.list_user)
                setData(props.content.list_user)
            }
        }
    }, [props.content])
    const fetchData =()=>{
        props.load(payloadTable)
    }
    const toggleEdit =()=>{}
    const toggleDel =()=>{}
    return (
        <Fragment>
          <div className="head-static patter-dash"></div>
            <section className="vision-section">
                <div className="container">
                <div className="blog">
                    <div className="detail">
                        <div className="meta-writter" style={{textAlign: "left"}}>
                        <h3 className="ui header" style={{marginTop: "0px"}}> Temukan hal yang membangun anda</h3>
                        <div className="ui action fluid input">
                        <input type="text" placeholder="Search..."/>
                        <button className="ui icon button">
                            <i className="search icon"></i>
                            Temukan
                        </button>
                        </div>
                        </div>
                    </div>


                    <div className="user-list">
                            <div className="row">
                            
                            <TableSheet 
                                data={dataList?dataList.data:null} 
                                records_total={dataList?dataList.total:null}
                                editAction={(id)=> toggleEdit(!toggle.edit, id)} 
                                deleteAction={(id)=> toggleDel(!toggle.delete, id)}
                                handlePerRowsChange={(a)=>setpayloadTable({...payloadTable, ...a  })} 
                                handlePageChang={(a)=>setpayloadTable({...payloadTable, ...a  })}
                            />
                                
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    content: state.content
});
const mapDispatchToProps = dispatch => ({
      load: data => dispatch(action.loadContent(data)),
      create: data => dispatch(action.createUsers(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
