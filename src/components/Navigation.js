import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import { useState } from 'react';

import '../styles/Nav.css'

var Scroll = require('react-scroll');
var scroller = Scroll.scroller

const pages = ['About', 'Schedule', 'Contact', 'Register'];

const Navigation = () => {
  const navigate = useNavigate();
  const toHome = useCallback(()=> navigate(process.env.PUBLIC_URL + '/', {replace:true}),[navigate])
  const toSchedule = useCallback(()=> navigate('/Schedule', {replace:true}), [navigate]);
  // const toContact = useCallback(()=> navigate('/Contact', {replace:true}), [navigate]);
  const toRegister = useCallback(()=> navigate('/Register', {replace:true}), [navigate]);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  console.log(anchorElNav, anchorElUser, setAnchorElUser)
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(page);
    console.log(page.target.innerText)

    if(page.target.innerText === "ABOUT"){
      toHome();
      scroller.scrollTo('main', {
        duration: 2000,
        delay: 0,
        smooth: false,
        offset: -120
      } )
    }
    if(page.target.innerText === "SCHEDULE"){
      toSchedule();
      //////
      setTimeout(()=> {handleShow()}, 500)
    }
    if(page.target.innerText === "CONTACT"){
      // handleShow();
      toHome();
      scroller.scrollTo('lilFoot', {
        duration: 10000000,
        delay: 0,
        smooth: false,
        offset: 0
      } )

    }
    if(page.target.innerText === "REGISTER"){
      toRegister();
    }

  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <AppBar position="fixed" sx={{background:"#0C0F30"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={require('../images/spacecitylogo1.png')} className="logo" alt='spacecitylogo' />
          </Typography>

          <Box sx={{ justifyContent:'right' , flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

<Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
centered
>
<Modal.Header closeButton  >
  <Modal.Title style={{fontSize:35}}>Schedule</Modal.Title>
</Modal.Header>
<Modal.Body style={{fontSize:29, fontWeight:"regular"}}>
  <div>Speech: July 18-30</div><div> Debate: July 25-31</div>
  <div>A more comprehensive schedule will be posted on this page once it is released.</div>
  <div>So check back soon!</div>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
</Modal>
</>
    
  );
};
export default Navigation;