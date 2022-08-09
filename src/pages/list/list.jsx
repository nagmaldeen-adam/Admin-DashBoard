import './list.scss';
import Navbar from '../../component/navbar/navbar.jsx';
import Data from '../../component/datatable/datatable.jsx';
import Sidebar from '../../component/sidebar/sidebar.jsx';
function List () { 
     return(
     <div className="list">
      <Sidebar />
      <div className="listContainer">
          <Navbar />
          <Data />

      </div>
        
     </div>
     )
}

export default List;