import './featured.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
function Featured () {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">total revenue</h1>
                <MoreVertIcon style={{fontSize:"small"}}/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar  value={70} text={"70%"} strokeWidth={4}/>
                </div>
                <p className="title">total sales today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    previous transactions processing. last payments  may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">target</div>
                        <div className="itemResult negative">
                           <KeyboardArrowDownIcon style={{fontSize:"small"}} />
                           <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">last week</div>
                        <div className="itemResult">
                           <KeyboardArrowUpOutlinedIcon style={{fontSize:"small"}} />
                           <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">last month</div>
                        <div className="itemResult">
                           <KeyboardArrowUpOutlinedIcon style={{fontSize:"small"}} />
                           <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;