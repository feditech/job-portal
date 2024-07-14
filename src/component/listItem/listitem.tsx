// import * as React from 'react';

// import Avatar from '@mui/material/Avatar';
// // import { FaIconName } from 'react-icons/fa';

// import { useDispatch, useSelector } from '../../store';
// import { modalFuc, userGet } from '../../slices/users';
// import { Box, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import Search from '../search/search';

// export default function AlignItemsList() {
//   const dispatch = useDispatch();
//   const { getclaimDataId } = useSelector((state) => state.users);
//   const [query, setQuery] = React.useState<string>('');
//   const [filteredData, setFilteredData] = React.useState<any[]>([]);
//   const [unfilteredData, setUnfilteredData] = React.useState<any[]>([]);
//   const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout | null>(null);

//   // Update unfiltered data when getclaimDataId changes
//   React.useEffect(() => {
//     setUnfilteredData(getclaimDataId || []);
//   }, [getclaimDataId]);

//   const handleSearchChange = (value: string) => {
//     setQuery(value);

//     // Clear previous timeout
//     if (searchTimeout) {
//       clearTimeout(searchTimeout);
//     }

//     // Set new timeout
//     setSearchTimeout(
//       setTimeout(() => {
     
      
//         const filtered = unfilteredData.filter((item: any) =>
//           item?.login?.toLowerCase().includes(value?.toLowerCase())
//         ).slice(0, 10);
//         // Update state with filtered data
//         setFilteredData(filtered);
//       }, 1000)
//     );
//   };
// const handleDelete=(id:any)=>{
//   const filtered=unfilteredData.filter((item)=>item.id !==id)
//   console.log(filtered,"Delete")
//   setUnfilteredData(filtered)
// }
//   return (
//     <>
//       <Box mt={2}>
//         <Box sx={{ width: "100%" }}>
//           {/* <TextField fullWidth
//           placeholder='search by Name'
//             value={query}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
                 
//                 </InputAdornment>
//               ),
//             }}
//             onChange={(e) => handleSearchChange(e.target.value)}
//           /> */}
//            <Box sx={{...borderstyle}}>
//       <Typography>
//         User List
//       </Typography>
//     </Box>
//           <Search query={query} handleSearchChange={handleSearchChange}/>
//         </Box>
//         <TableContainer sx={{width: "100%",}} component={Paper}>
//           <Table sx={{ width: "100%", whiteSpace: "wrap",}} aria-label="simple table">
//             <TableHead sx={{backgroundColor:"#DCE5F2"}}>
//               <TableRow>
//                 <TableCell>Profile</TableCell>
//                 <TableCell align="right">Name</TableCell>
//                 <TableCell align="right">Github Profile</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody sx={{ whiteSpace: "wrap" }}>
              
//               {(query.length === 0 ? unfilteredData  : filteredData)?.map((item: any,index:any) => {
                
//                 return (
//                   <TableRow
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 },'&:hover':{
//                       backgroundColor:"lightgrey"
//                     },cursor:"pointer" }}
//                     // onClick={() => {
//                     //   dispatch(userGet(item?.login));
//                     //   dispatch(modalFuc(true));
//                     // }}
//                   >
//                     <TableCell component="th" scope="row"   onClick={() => {
//                       dispatch(userGet(item?.login));
//                       dispatch(modalFuc(true));
//                     }}>
//                       <Avatar alt="userImage" style={{width:"45px",height:"40px"}} src={item?.avatar_url} />
//                     </TableCell>
//                     <TableCell align="right">{item?.login}</TableCell>
//                     <TableCell align="right">
//                     <a href={item?.html_url} target='blank' style={{textDecoration:"none",color: "inherit"}}>Profile Link</a>
                    

//                     </TableCell>
//                     <TableCell>
//                       <button onClick={()=>{
            
//             handleDelete(item?.id)
//                       }}>delete</button>
//                     </TableCell>
                    
//                   </TableRow>
//                 );
//               }) }
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </>
//   );
// }



// const borderstyle={
//   border:"1px solid rgba(224, 224, 224, 1)",display:"flex",borderBottom:"none",borderRadius:"4px",
//   padding:"15px",backgroundColor:"#DCE5F2"
// }