import React from 'react';
//import logo from './logo.svg';
//import "./App.css";
//import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles';
import {Home, Panels, Carports, Cleaning, Products, Contacts} from './pages';
//import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
import {Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, MainVideo} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }
const App = () => (

  <div className='bg-white w-full overflow-hidden'>
    
        
        
        
    <Router>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.WideBoxWidth}`}>
          <Navbar />
        </div>
      </div>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Panels' element={<Panels/>} />
          <Route path='/Carports' element={<Carports/>} />
          <Route path='/Cleaning' element={<Cleaning/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Contacts' element={<Contacts/>} />
        </Routes>
        
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.WideBoxWidth}`}>
    <Footer />
    </div>
      </div>
      </Router>
      

    {/* <video
  src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
  type="video/mp4"
  loop
  class="clip w-full"
></video> */}

   
  





    {/* <div className={`bg-vtoroy ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div> */}

  </div>
)





    
    // <>
    //   <AppBar style={{ background: '#2E3B55' }} position='fixed'>
    //     <Container fixed>
    //       <Toolbar>
    //         <IconButton edge='start' color='inherit' aria-label='menu'>
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant = 'h6' component='div' sx={{ flexGrow: 1 }}>EnergyPlus</Typography>
    //         <Box mr={3}>
    //           <Button color='inherit'>Login</Button>
    //         </Box>
    //         <Button variant='contained' color='secondary'>Sign Up</Button>
    //         </Toolbar>
    //     </Container>
    //       </AppBar>
    // </>


export default App;