import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from '../../store';
import { Avatar, Box } from '@mui/material';
import CircularIndeterminate from '../circularProgress/circleProgress';





export default function UserListItem() {
    const {userData,userLoader}=useSelector((state)=>state.users)
    const column=[
      "Profile",
      "Name","Location","followers","following"
    ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"#DCE5F2"}}>
          <TableRow>
            {column?.map(((item)=>{
              return(<>
              <TableCell>{item}</TableCell>
              </>)
            }))}
           
           
          </TableRow>
        </TableHead>
        <TableBody>
        {userLoader ? 
        <TableRow sx={{}}>
<CircularIndeterminate/>
        </TableRow>:
        <>
        <TableRow
          key={userData.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 },  backgroundColor:"lightgrey" }}
        >
          <TableCell component="th" scope="row">
          <Avatar alt="Remy Sharp" src={userData?.avatar_url} />
          </TableCell>
          <TableCell align="right">{userData?.login}</TableCell>
          <TableCell align="right">{userData?.location ?userData?.location :"A/N"}</TableCell>
          <TableCell align="right">{userData?.followers}</TableCell>
          <TableCell align="right">{userData?.following}</TableCell>
        </TableRow>
        </>
        }
        
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
