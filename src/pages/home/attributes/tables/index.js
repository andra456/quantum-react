import React, {Fragment, useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import './table.scss'

function TableSheet(props) {
   
    const [loading, setLoading] = useState(false);
    const core = props;

    //const page = core?core.page:0;
    const data = core?core.data:[]
    const totalRows = core?core.records_total:0


    const actionEdit = (id) => {
        props.editAction(id)
    }
    const actionDelete = (id) => {
        props.deleteAction(id)
    }

    const fetchTable = async () => {
        setLoading(true);
        setLoading(false);
    };
    

    const handlePageChange = async (page) => {
        setLoading(true);
        let payload = {
            page : page,
        }
        props.handlePageChang(payload)       
        setLoading(false);
       
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);
        let payload = {
            page,
            limit: newPerPage,
        }
       
        props.handlePerRowsChange(payload)        
        setLoading(false);
    };

    useEffect(() => {
        fetchTable();
      
      }, []);
 
    const columns = [
        {
          name: 'Profile',
          maxWidth: '100px',
          sortable: true,
          cell: row => <Fragment> <img height="80px" className="avatar" width="80px" src={row.avatar} /> </Fragment>,
        },
        {
          name: 'Biography',
          sortable: true,
          cell: row =>( <div className="headling-table">
                            <h3 className="ui header"> {`${row.first_name} ${row.last_name}`}
                            <span className="sub header"> { row.email}</span>
                            </h3> 
                            
                        </div> )
        },
        
          {
            
            maxWidth: '96px',
            sortable: false,
            style: {
               padding: '0px' ,
              },
            cell: row => <Fragment> <div className="action"> 
                                    <a  onClick={()=>{ actionDelete(row.id) }}><i className="icon--24_px_trash"  ></i> </a>
                                    <a  onClick={()=>{ actionEdit(row.id) }}><i className="icon--24_px_edit" ></i></a></div> </Fragment>,
          },
          
      ];
    return (
            <Fragment>
            { totalRows > 10?(
            <DataTable
                    columns={columns}
                    data={data}
                    progressPending={loading}
                    striped={true}
                    expandableRows
                    pagination
                    paginationServer
                    paginationTotalRows={totalRows}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                />):(<DataTable
                  columns={columns}
                  data={data}
                  expandableRows
                  progressPending={loading}
                  striped={true} />) }
                
            </Fragment>
            )
}

export default TableSheet;