import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
// import { MdOutlineMail } from "react-icons/md";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const CreateForm=()=>{

    return(
      <>
      
       <Grid container sx={{backgroundColor:"pink"}}>
      

            <Grid item xs={12} md={6} sx={{backgroundColor:"white"}}>
                <Box sx={{}}>
                    <Box>
                   <Typography sx={{ fontfamily:' Questrial',
fontSize: "32px",
fontWeight: "400",
lineHeight: "39.84px",color:"#034158"
// textAlign: "left"

}} >
                    Join Our Job Portal
                   </Typography>
                   <Typography sx={{ fontfamily:' Questrial',
fontSize: "14px",
fontWeight: "400",
lineHeight: "21.35px",color:"#034158"
}} >

                     job Seeker apply, Employers post ,search,manage
                   </Typography>
                   </Box>
                   <Box>
                    <Box sx={{my:1}}>
                   <TextField
            size="small"
            // fullWidth
            placeholder="Enter your email"
            // value={search}
            // onChange={(e) => {
            //   setsearch(e.target.value);
            // }}
            InputProps={{
              startAdornment: <EmailOutlinedIcon style={{ color: 'lightgray' }} />
            }}
          /></Box>
          <Box sx={{my:1}}>
                   <TextField
            size="small"
            // fullWidth
            placeholder="Enter your Password"
            // value={search}
            // onChange={(e) => {
            //   setsearch(e.target.value);
            // }}
            InputProps={{
              startAdornment: <KeyOutlinedIcon style={{ color: 'lightgray' }} />,
              endAdornment: <VisibilityOffOutlinedIcon style={{ color: 'lightgray' }} />
            }}
          /></Box>

<FormControlLabel control={<Checkbox defaultChecked />} label="Accept term and Condition" />
                   </Box>
                </Box>

           
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>

                  <img src="/login.png"/>
                  <Typography>
                  Here, you can find the right fit for your career or hire talent that fits your company's requirements.
                  </Typography>

              </Box>

            </Grid>
       

       </Grid>
      </>
    )
}
export default CreateForm