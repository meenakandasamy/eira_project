
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { visuallyHidden } from '@mui/utils';

function createData(siteId,  priority, createdtime, category, assignedto, expectedtat,ticketCode , ticketType, actions) {
  return {
    siteId,  priority, createdtime, category, assignedto, expectedtat,ticketCode ,ticketType, actions
  };
}
//   { "siteNo": 20393832, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393833, "sitename": "XYZ Limited", "priority": "Low", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 8 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393834, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393835, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393836, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "On Hold" },
//   { "siteNo": 20393837, "sitename": "XYZ Limited", "priority": "Low", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393838, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393839, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 5 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393840, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393841, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393842, "sitename": "XYZ Limited", "priority": "Low", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 5 Days", "ticketType": "in pending" },
//   { "siteNo": 20393843, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "On Hold" },
//   { "siteNo": 20393844, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393845, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 6 Days", "ticketType": "in Progress" },
//   { "siteNo": 20393846, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393847, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393848, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "On Hold" },
//   { "siteNo": 20393850, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393851, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393846, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393847, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393848, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "On Hold" },
//   { "siteNo": 20393850, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393851, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393852, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393853, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393854, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "On Hold" },
//   { "siteNo": 20393855, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393856, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Pending" },
//   { "siteNo": 20393860, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },
//   { "siteNo": 20393861, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "Closed" },

// ]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  {
    id: 'ticketCode',
    numeric: false,
    disablePadding: false,
    label: 'Ticket Code',
    active:true
  },
  {
    id: 'siteId',
    numeric: false,
    disablePadding: true,
    label: 'SiteId',
    active:true
  },
  
  {
    id: 'priority',
    numeric: false,
    disablePadding: false,
    label: 'Priority',
    active:true
  },
  {
    id: 'createdTime',
    numeric: false,
    disablePadding: false,
    label: 'Create Time',
    active:true
  },
  {
    id: 'category',
    numeric: false,
    disablePadding: false,
    label: 'Category',
    active:true
  },
  {
    id: 'assignedto',
    numeric: false,
    disablePadding: false,
    label: 'Assignedto',
    active:true
  },
 
  {
    id: 'ticketType',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    active:true
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    active:true
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort ,ticketShow ,siteIdShow,priorityShow,createTimeShow,categoryShow,assignedShow,statusShow} =
    props;

    let ticketCOde=ticketShow?'':'ticketCode'
    let  siteIds=siteIdShow?'':'siteId'
    let  priorityId=priorityShow?'':'priority'
    let  createTimeId=createTimeShow?'':'createdTime'
    let  categoryId=categoryShow?'':'category'
    let  assignedId=assignedShow?'':'assignedto'
    let  statusId=statusShow?'':'ticketType'
    let tableValue=headCells.map((data)=>{
      if(data.id===ticketCOde){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===siteIds){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===createTimeId){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===priorityId){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===categoryId){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===assignedId){return{...data,active:false}}
      else{
        return data
      }
    })
    tableValue=tableValue.map((data)=>{
      if(data.id===statusId){return{...data,active:false}}
      else{
        return data
      }
    })
    console.log(tableValue,'tableValue');
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  let headcells=tableValue.filter((data)=>{return data.active === true})
  console.log(headcells,'headcells');
  return (
    <TableHead >
      <TableRow  >

        {headcells.map((headCell) => (
          <TableCell

            key={headCell.id}
            align={'center'}
            style={{ fontSize: "12px" ,marginLeft:"-15px"}}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{

        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >

      {/* 
{numSelected > 0 ? (
<Tooltip title="Delete">
</Tooltip>
) : (
<Tooltip title="Filter list">
{/* <IconButton />
</Tooltip>
)} */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function Allticket(props) {
  const { operationtickets ,ticketShow,siteIdShow,priorityShow,createTimeShow,categoryShow,assignedShow,statusShow} = props
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsPage, setRows] = React.useState([]);
//   { "siteNo": 20393831, "sitename": "XYZ Limited", "priority": "High", "createdtime": "16-01-2023 11:23 AM", "category": "Master issue", "assignedto": "Jagan p", "expectedtat": "Due in 2 Days", "ticketType": "in Progress" },
// const [tableValues,setTables]=React.useState([])

//    useEffect(()=>{
//       getcall();
//    },[])


//    const getcall =()=>{
//       axios.get(`http://inspirece.com/eiramobileservice/rest/ticketservice/tickets/userid=&timezoneoffset=330`).then((res)=>{
         
//         if(res.ticketType===200){
//          console.log(res.data,'res');
//          setTables(res.data)
//         }
//       })
//    }
const [tableValues,setTables]=React.useState([])

   useEffect(()=>{
    getCall();
   },[])

  useEffect(() => {
    if (operationtickets === "operationTicket") {
      setRows(tableValues.filter((data) => { return data.ticketType.includes("Operation" ) }))
    }
    else if (operationtickets === "maintainceTicket") {
      setRows(tableValues.filter((data) => { return data.ticketType.includes("Maintenance" )  }))
    }
    else if (operationtickets === "parkedTicket") {
      setRows(tableValues.filter((data) => { return data.ticketType.includes("in Pending" )  }))
    }
    else if (operationtickets === "openTicket") {
      setRows(tableValues.filter((data) => { return data.ticketType.includes("Closed" )  }))
    }
    else if (operationtickets === ""  || operationtickets === undefined ) {
      setRows(tableValues)
    }

    

  }, [props.operationtickets,tableValues])



  const getCall=()=>{
    axios.get(`http://inspirece.com/eiramobileservice/rest/ticketservice/tickets/userid=852&timezoneoffset=330`).then((res)=>{
      if(res.status===200){
        console.log(res.data,'res');
        let data=res.data.filter((data)=>{return data.siteId !==null})
        setTables(data)
       }
     })
  }
  console.log(rowsPage);



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };




  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tableValues.map((n) => n.siteNo);
      setSelected(newSelected);
      return;
    }
    setSelected();
  };

  console.log(props);
  const handleClick = (event, siteNo) => {
    const selectedIndex = selected.indexOf(siteNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, siteNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
   
    setRowsPerPage(parseInt( e.target.value));
   
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (siteNo) => selected.indexOf(siteNo) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableValues.length) : 0;

  return (
    <Box >
      <Paper sx={{ width: '100%' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
               ticketShow={ticketShow}
               siteIdShow={siteIdShow}
               priorityShow={priorityShow}
               createTimeShow={createTimeShow}
               categoryShow={categoryShow}
               assignedShow={assignedShow}
               statusShow={statusShow}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableValues.length}
            />

            <TableBody>
              {stableSort(rowsPage, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.siteNo);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (

                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.sitename)}
                      aria-checked={isItemSelected}
                     tabIndex={-1}
                      key={row.siteNo}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    > 
                    {ticketShow &&<TableCell style={{textAlign:"center",fontSize:"14px"}} >{row.ticketCode}</TableCell>}
                     {siteIdShow && <TableCell  style={{textAlign:"center",fontSize:"14px"}}>{row.siteId}</TableCell>}
                     {priorityShow && <TableCell style={{textAlign:"center",fontSize:"14px",marginLeft:"-10px !importan"}}>{row.priority}</TableCell>}
                     {createTimeShow &&<TableCell style={{textAlign:"center",fontSize:"14px"}}>{row.createdDate}</TableCell>}
                     {categoryShow && <TableCell style={{textAlign:"center",fontSize:"14px"}}>{row.category}</TableCell>}
                     {assignedShow && <TableCell style={{textAlign:"center",fontSize:"14px"}}>{row.assignedto}</TableCell>}
                     {statusShow && <TableCell style={{textAlign:"center",fontSize:"14px"}} >{row.ticketType}</TableCell>}
                      <TableCell style={{textAlign:"center",fontSize:"14px"}} >< EditOutlinedIcon /> <PermIdentityIcon /><CheckCircleOutlineOutlinedIcon /></TableCell>

                    </TableRow>

                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                 
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

          </Table>

        </TableContainer>
        </Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={rowsPage.length}
          rowsPerPage={rowsPerPage}
          page={page}
          component='div'
          onPageChange={handleChangePage}
          onRowsPerPageChange={(e)=>handleChangeRowsPerPage(e)}
        /> </Box>
)
}
export default Allticket;

