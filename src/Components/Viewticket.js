import React from "react";

import { Typography } from '@mui/material';


import { AiOutlineUser } from "react-icons/ai";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { FiCheckCircle} from "react-icons/fi";
import { AiOutlineClose} from "react-icons/ai";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { BiX} from "react-icons/bi";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Datepicker from 'react-datepicker'
import Sidebar from './Sidebar'
import 'react-datepicker/dist/react-datepicker.css'



const Viewticket=()=>{
  const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 366,
    height:350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const[selectedDate,setSelectedDate]=useState(null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Select, setSelect]=useState();
    
    const navigate=useNavigate()
    const [TicketSummary,setTicketSummary]=React.useState( true);
    const [ApprovalHistory,setApprovalHistory ] =React.useState(false)
    const [TicketActivity ,setTicketActivity  ] =React.useState(false)
    // const [date,setDate]=React.useState()

    const handleTicketSummary=()=>{
      TicketSummary(true)
      ApprovalHistory(false)
      TicketActivity(false)
    }
    const handleApprovalHistory=()=>{
      TicketSummary(false)
      ApprovalHistory(true)
      TicketActivity(false)
    }
    const handleTicketActivity=()=>{
      TicketActivity(true)
      TicketSummary(false)
      ApprovalHistory(false)
    }
  

    
    return(
     
        <div className="view">
        
        <div>
        <div className="arrow-view">
          <ArrowBackIcon />
        </div>
        <div  className="view-ticket">
        <h3 style={{marginTop:"-30px",marginLeft:"60px"}}> View Ticket</h3><p  style={{marginTop:"-45px",marginLeft:"170px",}}>- XYZ Limited</p>
        </div>
        <div className="button">
        <div>
       <Button variant="outlined"  onClick={handleOpen} startIcon={<AiOutlineUser color="black" size="1.2rem" />} style={{width:"150px",color:"black",borderColor:"black",backgroundColor:"none",color:"#505050"}}>Re-Assign
</Button>
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="bix-icon" >
              <BiX color="black" size="1.8rem" />
              </div>
            <div className='assign-page'>
              <Typography id="transition-modal-title" variant="h6" component="h2">
             Re-Assign Ticket
            </Typography>
          {/* <div>
          <input type= "date" onChange={e=>setDate(e.target.value)} style/>
         </div> */}
         <div>
          Date:
           <Datepicker
           selected={selectedDate}
           onChange={date =>setSelectedDate(date)}
           dateFormat='yyyy/mm/dd'
         minDate={new Date()}
            />

        </div>
            <div className='select-option'>
            <p style={{color: "#B5B5B5",backgroundColor:"none"}}>Select</p>
           <select value={Select} onChange={e=>setSelect(e.target.value)} style={{width:"200px",height:"40px",marginTop:"-20px"}}>
          <option>select user</option>
            <option>select all</option>
            <option>select ticket</option>
           </select>
         </div>
            <div className="enter-reason">
            <p style={{color: "#B5B5B5"}}>Enter reason</p>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
     
    >
      <TextField  variant="outlined" placeholder='Enter reason'style={{marginTop:"-7px"}} />
      </Box>
      <div>
      </div>
      </div>
       <div className='button-cancel'>
       <Button variant="outlined"  style={{backgroundColor:'' ,color:"black",borderColor:"black",height:"30px"}}>
        Reset
      </Button>
      <Button variant="outlined"  style={{backgroundColor:'#6B7174' ,marginLeft:"40px",color:"black",borderColor:"black" ,height:"30px"}}>
        assign
      </Button>
       </div>
            </div>
           
          </Box>
        </Fade>
      </Modal>
     
    </div>
  <Button variant="outlined" startIcon={< FiCheckCircle color="black" size="1rem" />} style={{width:"100px",
color:"#505050",marginLeft:"165px",borderColor:"black",backgroundColor:"none",marginTop:"-62px"}}>
  Hold
</Button>
<Button variant="outlined" startIcon={< AiOutlineClose color="black" size="1rem" />} style={{width:"100px",color:"black",marginLeft:"15px",borderColor:"black",backgroundColor:"none",color:"#505050",marginTop:"-62px"}}>
  Close
</Button>
        </div>
        </div>
        <div className="side-box">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 48,
        },
      }}
    >
      
       <Paper elevation={3}onClick={handleTicketSummary}style={ {backgroundColor: handleTicketSummary? '#B0B0B0' : 'white',  color: handleTicketSummary ? 'white' : 'black'}} >
        <Typography className="ticket-typograpy">Ticket Summary</Typography>
       </Paper>
      </Box>
      {/* <Button variant="contained" style={{
                            width: "230px", height: '50px', fontSize: "18px",
                            fontStyle: "normal", color: "#FFFFFF;", textTransform: 'capitalize',
                            backgroundColor: handleTicketSummary? 'blue' : 'white',
                            color: handleTicketSummary ? 'white' : 'black'
                        }} onClick={handleTicketSummary} > <Typography style={{ fontWeight: "550", fontSize: "18px", lineHeight: "22px" }}>
                                Equipment Details</Typography> </Button>
                    </Box> */}
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 48,
          top:10,
  },
      }}
    >
      
       <Paper elevation={3} onclick={handleApprovalHistory} style={ {marginTop:"15px",backgroundColor: handleTicketSummary? '#B0B0B0' : 'white',  color: handleTicketSummary ? 'white' : 'black'}} >
        <Typography className="approval-typograpy" >Approval History </Typography>
       
       </Paper>

  </Box>
  {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 48,
          top:10,
          
        },
      }}
    >
      <Paper elevation={3} style={{marginTop:"15px" , backgroundColor: TicketActivity ? 'blue' : 'white', color: handleTicketSummary ? 'white' : 'black'}} onclick={handleTicketActivity} >
        <Typography className="activity-typograpy">Ticket Activity </Typography>
       </Paper>

  </Box> */}
  <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 48,
          top:10,
  },
      }}
    >
      
       <Paper elevation={3} onclick={handleTicketActivity} style={ {marginTop:"15px",backgroundColor: handleTicketActivity? '#B0B0B0' : 'white',  color: handleTicketActivity? 'white' : 'black'}} >
        <Typography className="approval-typograpy" >TicketActivity </Typography>
       
       </Paper>

  </Box>
        </div>
         <div className="ticket-details">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 920,
          height: 400,
          
        },
      }}
    >
      
       <Paper elevation={3} style={{ background: "White"}} >
        <Typography style={{fontSize:"20px",fontweight: "500",marginLeft:"20px",marginTop:"15px"}}>
          Ticket Details
        </Typography><br></br>
        <Typography style={{marginLeft:"27px"}} className="ticketno-typo" >
         Ticket No 
        </Typography >
        <Typography  style={{marginLeft:"130px"}}className="ticketno-typo">
         Equipment Code
        </Typography>
        <Typography style={{marginLeft:"130px"}}className="ticketno-typo">
        Equipment Code
        </Typography>
        <Typography style={{marginLeft:"110px"}} className="ticketno-typo">
        Equipment Code
        </Typography><br></br>
        
 <div className="equipment-typo">
 <Typography style={{marginLeft:"27px",marginTop:"80px"}} className="ticketno-typo" >
 Equipment Code
        </Typography >
        <Typography  style={{marginLeft:"80px",marginTop:"80px"}}className="ticketno-typo">
         Equipment Code
        </Typography>
        <Typography style={{marginLeft:"130px",marginTop:"80px"}}className="ticketno-typo">
        Equipment Code
        </Typography>
        <Typography style={{marginLeft:"110px",marginTop:"80px"}} className="ticketno-typo">
        Equipment Code
        </Typography><br></br>

</div> 
<div className="code-typo">
<Typography style={{marginLeft:"27px"}} className="ticketno-typo" >
 Equipment Code
        </Typography >
        <Typography  style={{marginLeft:"80px"}}className="ticketno-typo">
         Equipment Code
        </Typography>
        <Typography style={{marginLeft:"130px"}}className="ticketno-typo">
        Equipment Code
        </Typography>
        <Typography style={{marginLeft:"110px"}} className="ticketno-typo">
        Equipment Code
        </Typography><br></br>
</div>
       </Paper>
       
  </Box>
        </div> 
        
        
        </div> 
       
    );
}
export default Viewticket;
