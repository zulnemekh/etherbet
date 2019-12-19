import React from 'react';
import { Link } from 'react-router-dom';
import enhancers from './enhancers';

import CreateBetModal from '../CreateBetModal';

const MainLayout = ({ children, profile, unlock, isCreateBetLoading }) => (<>
  <nav className="uk-navbar-container" uk-navbar="true">

    <div className="uk-navbar-left">
      <Link to="/" className="uk-navbar-item uk-logo" style={{ color: "#fff" }}>EtherBet</Link>
    </div>
    <div className="uk-navbar-center">
      {profile && profile.accountAddress && <CreateBetModal />}
      {isCreateBetLoading && <div uk-spinner="true"></div>}
      <Link to="/user/bets" style={{ color: "#fff" }}><button className="btn1"><span>MY BETS </span></button></Link>
    </div>
    <div className="uk-navbar-right">
      {profile && profile.accountAddress ?
        <p style={{ color: "#fff" }}> {profile.accountAddress}</p>
        :
        <button onClick={() => unlock()} className="btn1"><span>Login</span></button>
      }

    </div>

  </nav>
  <div style={{ paddingTop: "150px", minHeight: "100vh" }}>
    <div className="uk-container">
      {children}
    </div>
  </div>

</>);


export default enhancers.redux(MainLayout);
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// function ButtonAppBar({profile, children, unlock}) {
//   const classes = useStyles();

//   const { 
//     accountAddress, 
//     isMetamaskInstalled 
//   } = profile;

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             EtherBet
//           </Typography>
//           {
//             isMetamaskInstalled 
//               && !accountAddress 
//                 && <Button 
//                     onClick={() => unlock() }
//                     color="inherit">Unlock</Button>
//           }
//           {
//             accountAddress && accountAddress
//           }
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         { children }
//       </Container>
//     </div>
//   );
// }

// export default enhancers.redux(ButtonAppBar);