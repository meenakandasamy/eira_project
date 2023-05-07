import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Modal from '@mui/material/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';

import Allticket from "./Allticket";
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { MdOutlineSettings } from "react-icons/md";

const Eira = () => {
  const [allticket, setAllticket] = React.useState(false)
  const [operationticket, setOperationTicket] = React.useState('')
  const [checked, setChecked] = React.useState(true)
  const [ticketShow, setTicketShow] = React.useState(true)
  const [siteIdShow, setSiteIdShow] = React.useState(true)
  const [priorityShow, setProrityShow] = React.useState(true)
  const [createTimeShow, setCreateTimeShow] = React.useState(true)
  const [categoryShow, setcategoryShow] = React.useState(true)
  const [assignedShow, setAssignedToShow] = React.useState(true)
  const [statusShow, setStatusShow] = React.useState(true)
  const [actionsShow, setactionsShow] = React.useState(true)
  const handleAllTicket = () => {
    setAllticket(true)
  }

  const operationTicketCall = () => { setOperationTicket("operationTicket") }
  const maintainceTicketCall = () => { setOperationTicket("maintainceTicket") }
  const parkedTicketCall = () => { setOperationTicket("parkedTicket") }
  const openTicketCall = () => { setOperationTicket("openTicket") }

  const TicketCall = () => { setOperationTicket("") }

  console.log(operationticket);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
 // const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
 // const handleClose = () => setOpen(false);
  // const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  /*----- toggle column ---------*/
  const toggleticket = () => { setTicketShow(!ticketShow) }
  const toggleSideId = () => { setSiteIdShow(!siteIdShow) }
  const togglepriority = () => { setProrityShow(!priorityShow) }
  const toggleCreateTime = () => { setCreateTimeShow(!createTimeShow) }
  const toggleCategory = () => { setcategoryShow(!categoryShow) }
  const toggleAssignedTo = () => { setAssignedToShow(!assignedShow) }
  const toggleStatus = () => { setStatusShow(!statusShow) }
  const toggleactions = () => { setactionsShow(!actionsShow) }




  return (
    <div className="mee">
     <div className="c">

        <div className="arrow-icon">
          <ArrowBackIcon />
        </div>
        <div className="ticket-over">
          Ticket overview
        </div>

      </div>

      <div className="all">

        <Navbar >
          <Container>

            <Navbar.Collapse >
              <Nav >

                <div className="allticket">
                  <span onClick={TicketCall}>AllTicket</span>
                </div>

                <div className="operation-ticket">
                  <span onClick={operationTicketCall}> Operation </span>
                </div>

                <div className="maintenance-ticket">
                  <span onClick={maintainceTicketCall}> Maintenance </span>
                </div>

                <div className="parked-ticket">

                  <span onClick={parkedTicketCall}>In Pending</span>
                </div>

                <div className="open-ticket">
                  <span onClick={openTicketCall}>Closed</span>
                </div>

              </Nav>
              <div className="more-icon">
                <span >< MoreVertIcon /></span>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar></div>

      <div className="input">

        <div className="folder">
          <div className="search-site">
            search sites here
          </div>

          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>

        <div className="but">
          <div className="new-botton">
            <div className="new-text">
              New Ticket
            </div>

            <div className="add-icon">
              < AddCircleOutlineIcon />
            </div>

          </div>
        </div>
        <div className="setting-icon">
          <div className='setting-dropdown'>
            <Button onClick={handleOpen}>< MdOutlineSettings color="black" size="1.4rem" /></Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="box-typo">
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={ticketShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleticket} />
                        <p style={{ marginLeft: "20px" }}>ticketNo</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={siteIdShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleSideId} />
                        <p style={{ marginLeft: "20px" }}>siteId</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={priorityShow} inputProps={{ 'aria-label': 'ant design' }} onClick={togglepriority} />
                        <p style={{ marginLeft: "20px" }}>priority</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={createTimeShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleCreateTime} />
                        <p style={{ marginLeft: "20px" }}>create Time</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={categoryShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleCategory} />
                        <p style={{ marginLeft: "20px" }}>category</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={assignedShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleAssignedTo} />
                        <p style={{ marginLeft: "20px" }}>assignedto</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={statusShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleStatus} />
                        <p style={{ marginLeft: "20px" }}>status</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={actionsShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleactions} />
                        <p style={{ marginLeft: "20px" }}>actions</p>
                      </Stack>
                    </FormGroup>
                  </Typography>

                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="filter-icon ">
          <FilterAltOutlinedIcon />
        </div>

        <div className="filter-down">
          < FileDownloadOutlinedIcon />
        </div>
      </div>
      <div className="table-components">
        <Allticket
          operationtickets={operationticket}
          ticketShow={ticketShow}
          siteIdShow={siteIdShow}
          priorityShow={priorityShow}
          createTimeShow={createTimeShow}
          categoryShow={categoryShow}
          assignedShow={assignedShow}
          statusShow={statusShow}
          actionsShow={actionsShow}
        />
      </div>
      
    </div>
  );
}
export default Eira;







