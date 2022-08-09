import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import M1 from '../img/m1.jpg';
import M2 from '../img/nova81.png';
import M3 from '../img/y7a.jpg';
import M4 from '../img/y9a.jpg';


function Tabl () {
    const rows = [
        {
            id:132,
            product:" Samsung M1",
            img:`${M1}`,
            customer:"john smith",
            data:'1 march',
            amount :455,
            method:'cash on dellivery',
            status:"approved"
        },
        {
            id:544,
            product:" samsung nova81",
            img:`${M2}`,
            customer:"nagm aldeen",
            data:'8 may',
            amount :875,
            method:'online payment',
            status:"pending"
        },
        {
            id:240,
            product:"y7a",
            img:`${M3}`,
            customer:"adam",
            data:' 13 June',
            amount :300,
            method:'cash on dellivery',
            status:"approved"
        },
        {
            id:155,
            product:" y9a",
            img:`${M4}`,
            customer:"nazar adam",
            data:'25 february',
            amount :455,
            method:'online',
            status:"pending"
        },
    ]
    return(
       <TableContainer component={Paper} className="table">
        <Table sx={{minWidth:650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Tracking ID</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Payment Method</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) =>(
                    <TableRow key={row.id} >
                      <TableCell className="tableCell" component="th" scope="row"> {row.id}</TableCell>
                     <TableCell className="tableCell">
                        <div className="cellWrapper">
                            <img src={row.img} alt="Uploading Error" className="image" />
                        {row.product}
                        </div>
           
                        </TableCell>
                     <TableCell className="tableCell">{row.customer}</TableCell>
                     <TableCell className="tableCell">{row.date}</TableCell>
                     <TableCell className="tableCell">{row.amount}</TableCell>
                     <TableCell className="tableCell">{row.method}</TableCell>
                     <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>
                             {row.status}
                             </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
       </TableContainer>
    )
}
export default Tabl;