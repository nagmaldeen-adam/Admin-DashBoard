import './datatable.scss';
import {DataGrid} from '@mui/x-data-grid';
import {UserColumns ,UserRows} from '../../datasource';
import {Link} from 'react-router-dom';
import { useState } from 'react';
function Data() {
    const [data,setData] =useState(UserRows);
 
  const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id));
  }
const actionColumn = [
    {field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
        return(
           <div className="cellAction">
            <Link to="/user/test" style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
           </div>
        )
    }}]
    return(
        <div className="data">
            <div className="dataTilte">
                add new user
                <Link to="/user/new" style={{textDecoration:"none"}} className="link">
                  add new
                </Link>
            </div>
            <DataGrid
            className="grid"
            rows={data}
            columns={UserColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            />
        </div>
    )
}

export default Data;