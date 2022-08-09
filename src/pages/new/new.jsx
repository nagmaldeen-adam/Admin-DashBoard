import './new.scss';
import {useState} from 'react';
import m2 from '../../component/img/Dup.jpg';
import Navbar from '../../component/navbar/navbar.jsx';
import Sidebar from '../../component/sidebar/sidebar.jsx';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
function New ({inputs,title}) { 
   const [file,setFile] =useState("");
     return(
     <div className="new">
        <Sidebar />
        <div className="newContainer">
         <Navbar />
         <div className="top">
            <h1>{title}</h1>
         </div>
         <div className="bottom">
            <div className="left">
               <img src={file ? URL.createObjectURL(file): m2 } alt="Error" />
            </div>
            <div className="right">
               <form action="">
               <div className="formInput">
                     <label htmlFor="File">image:<DriveFolderUploadOutlinedIcon className="icon"/></label>
                     <input type="file" id="File" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
                  </div>
                  {inputs.map(item => (
                  <div className="formInput" key={item.id}>
                     <label htmlFor="">{item.label}</label>
                     <input type={item.type} placeholder={item.placeholder} />
                  </div>
                  ))}
                  <button>send</button>
               </form>
            </div>
         </div>
        </div>
     </div>
     )
}

export default New;