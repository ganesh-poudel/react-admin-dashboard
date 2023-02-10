import React, {useContext} from 'react';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamTwoToneIcon from '@mui/icons-material/ViewStreamTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom"
import {DarkModeContext} from "../../context/darkModeContext";
function Sidebar(props) {

    const {dispatch} = useContext(DarkModeContext)
    return (<div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:'none'}}>
                <span className="logo">GaneshAdmin</span>
            </Link>

        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <Link to='/users' style={{textDecoration:'none'}}>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>User</span>
                    </Link>

                </li>
                <li>
                    <Link to='/products' style={{textDecoration:'none'}}>
                        <Inventory2OutlinedIcon className='icon'/>
                        <span>Products</span>
                    </Link>

                </li>
                <li>
                    <ViewStreamTwoToneIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingTwoToneIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <EqualizerIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:'LIGHT'})} ></div>
            <div className="colorOption" onClick={()=>dispatch({type:'DARK'})} ></div>
        </div>
    </div>);
}

export default Sidebar;