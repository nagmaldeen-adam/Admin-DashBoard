import './single.scss';
import m1 from '../../component/img/3.jpeg';
import Navbar from '../../component/navbar/navbar.jsx';
import Sidebar from '../../component/sidebar/sidebar.jsx';
import Chart from '../../component/chart/chart.jsx';
import Tabl from '../../component/table/table.jsx';

function Single () { 
     return(
     <div className="single">
        <Sidebar />
        <div className="singleContainer">
         <Navbar />
         <div className="top">
            <div className="left">
               <div className="editButton">Edit</div>
               <h1 className="title">information</h1>
               <div className="item">
                  <img src={m1} alt="" className="itemImg" />
               <div className="details">
                  <h1 className="itemTitle">nagm</h1>
                  <div className="detailItem">
                     <span className="itemKey">Email:</span>
                     <span className="itemValue">nagm@gmail.com</span>
                  </div>
                  <div className="detailItem">
                     <span className="itemKey">Phone:</span>
                     <span className="itemValue">+1 959 490</span>
                  </div>
                  <div className="detailItem">
                     <span className="itemKey">Address:</span>
                     <span className="itemValue">sudan khartom bahree</span>
                  </div>
                  <div className="detailItem">
                     <span className="itemKey">Country:</span>
                     <span className="itemValue">sudan</span>
                  </div>
               </div>
               </div>
            </div>
            <div className="right">

               <Chart aspect={3 /1} title="user spending (last 6 month)"/>
            </div>
         </div>
         <div className="bottom">
            <h1 className="title">last transaction</h1>
            <Tabl />
         </div>
        </div>
     </div>
     )
}

export default Single;