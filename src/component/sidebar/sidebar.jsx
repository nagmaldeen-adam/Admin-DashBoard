import './sidebar.scss';
import { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../context/context';

function Sidebar () {
    const {dispatch} = useContext(DarkModeContext);
    return(
         <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">nagmo admin</span>
            </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>dashboard</span>
                        </li>
                        <p className="title">lists</p>
                        <Link to="/user" style={{textDecoration:"none"}}>
                    <li>
                    <PersonOutlineIcon className="icon" />
                        <span>user</span>
                        </li>
                        </Link>
                        <Link to="/product" style={{textDecoration:"none"}}>
                    <li>
                        <StoreIcon className="icon" />
                        <span>products</span>
                        </li>
                        </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>orders</span>
                        </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>delivery</span>
                        </li>
                     <p className="title">useful</p>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>stats</span>
                        </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>notifcations</span>
                    </li>
                        <p className="title">serive</p>
                    <li>
                    <SettingSystemDaydreamOutlinedIcon className="icon" />
                        <span>system health</span>
                        </li>
                    <li>
                        <PsychologOutlinedIcon className="icon" />
                        <span>logs</span>
                        </li>
                    <li>
                        <SettingsApplicationIcon className="icon"/>
                        <span>settings</span>
                        </li>
                    <p className="title">user</p>
                    <li>
                    <AccountCircleOutlinedIcon className="icon" />
                        <span>profile</span>
                        </li>
                    <li>                        
                     <ExitToAppIcon className="icon" />
                        <span>logout</span>
                        </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option" onClick={() =>dispatch({type:"LIGHT"})}></div>
                <div className="color-option" onClick={() =>dispatch({type:"DARK"})}></div>
            </div>
         </div>
    )
}

export default Sidebar;