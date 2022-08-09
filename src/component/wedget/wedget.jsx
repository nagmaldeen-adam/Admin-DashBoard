import './wedget.scss';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


function Wedget ({type}) {
    let data;

     // Temporary
     const amount = 100;
    //  const diff = 20;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMony:true,
                link:"See all users",
                icon:<PersonOutlinedIcon className="Icon" style={{color:"crimson",backgroundColor:"rgba(255, 0 , 0 , 0.2)"}} />,
            };
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMony:true,
                    link:"view all orders",
                    icon:<ShoppingCartOutlinedIcon className="Icon" style={{color:"goldenrod",backgroundColor:"rgba(218, 165 , 32 , 0.2)"}}/>,
                };
                break;
                case "earning":
                    data={
                        title:"EARNINGS",
                        isMony:true,
                        link:"view net earnings",
                        icon:<MonetizationOnOutlinedIcon className="Icon" style={{color:"green",backgroundColor:"rgba(0, 128, 0 , 0.2)"}}/>,
                    };
                    break;
                    case "balance":
                        data ={
                            title:"BALABCE",
                            isMony:true,
                            link:"See details",
                            icon:<AccountBalanceWalletOutlinedIcon className="Icon" style={{color:"purple",backgroundColor:"rgba(128, 0, 128 , 0.2)"}}/>,
                        };
                        break;
                        default:
                        break;
    }
    return(
        <div className="wedget">
            <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMony && "$"} {amount}</span>
            <span className="link">{data.link}</span>
            </div>
            <div className="right">
            <div className="persentage">
                <KeyboardArrowUpIcon  />
                20 %
            </div>
            {data.icon}
            </div>
        </div>
    )
}

export default Wedget;