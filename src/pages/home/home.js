import './home.scss';
import Navbar from '../../component/navbar/navbar.jsx';
import Sidebar from '../../component/sidebar/sidebar.jsx';
import Wedget from '../../component/wedget/wedget';
import Chart from '../../component/chart/chart.jsx';
import Featured from '../../component/featured/featured.jsx';
import Tabl from '../../component/table/table.jsx';
function Home () { 
     return(
     <div className='home'>
          <Sidebar />
          <div className="home-Container">
            <Navbar />
            <div className="wedgets">
               <Wedget type="user" />
               <Wedget type="order" />
               <Wedget type="earning"/>
               <Wedget type="balance"/>
            </div>
            <div className="charts">
               <Featured />
               <Chart aspect={2 / 1} title="last 6 month (Revenue)"/>
            </div>
            <div className="listContainer">
               <div className="listTitle">latest transactions</div>
               <Tabl />
            </div>
            </div>
     </div>
     )
}

export default Home;