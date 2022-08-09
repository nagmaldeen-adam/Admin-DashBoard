import m1 from './component/img/1.jpeg';
import m2 from './component/img/2.jpeg';
import m3 from './component/img/3.jpeg';
import m4 from './component/img/4.jpg';
import m5 from './component/img/5.jpg';
import m6 from './component/img/6.jpg';
import m7 from './component/img/One.jpg';
import m8 from './component/img/7.jpg';
import m9 from './component/img/8.jpg';
import m10 from './component/img/9.jpg';

export const UserColumns = [{field:"id",headerName:"ID",width:70},
{field:"user",headerName:"User",width:230,renderCell:(params)=>{
    return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="Error" />
             {params.row.username}
        </div>
         )
        }},
        {
            field:"email",
            headerName:"Email",
            width:230,
        },
        {
            field:"age",
            headerName:"Age",
            width:100,
        },
        {
            field:"status",
            headerName:"status",
            width:160,
            renderCell:(params)=>{
                return(
                  <div className={`cellWithStatus${params.row.status}`}>{params.row.status}</div>
                )
            }
        },

]

export const UserRows = [
    {
        id:1,
        username:'show',
        img:`${m1}`,
        status:'active',
        email:'lshi@gmail.com',
        age:40,
    },
    {
        id:2,
        username:'nagm',
        img:`${m2}`,
        status:'passive',
        email:'nagmo@gmail.com',
        age:30,
    },  {
        id:3,
        username:'show jhon',
        img:`${m3}`,
        status:'pending',
        email:'show@gmail.com',
        age:31,
    },  {
        id:4,
        username:'akram',
        img:`${m4}`,
        status:'active',
        email:'akram@gmail.com',
        age:41,
    },  {
        id:5,
        username:'alias',
        img:`${m5}`,
        status:'pending',
        email:'alias@gmail.com',
        age:32,
    },
    {
        id:6,
        username:'nazar',
        img:`${m6}`,
        status:'active',
        email:'nazar@gmail.com',
        age:19,
    },
    {
        id:7,
        username:'ahmed',
        img:`${m7}`,
        status:'passive',
        email:'ahmed@gmail.com',
        age:22,
    },
    {
        id:8,
        username:'hassan',
        img:`${m8}`,
        status:'active',
        email:'hassan@gmail.com',
        age:50,
    },
    {
        id:9,
        username:'jhon',
        img:`${m9}`,
        status:'pending',
        email:'live@gmail.com',
        age:46,
    },
    {
        id:10,
        username:'alzain',
        img:`${m10}`,
        status:'passive',
        email:'alzain@gmail.com',
        age:33,
    },
]