import React from 'react';
import UIKit from 'uikit';
import { Link } from 'react-router-dom';
import enhancers from './enhancers';

import CreateBet from './../CreateBet';

const MainLayout = ({children, profile, unlock}) => (<>
<nav className="uk-navbar-container" uk-navbar="true">

<div className="uk-navbar-left">
  <Link to="/" className="uk-navbar-item uk-logo" style={{color: "#fff"}}>EtherBet</Link>
</div>

<div className="uk-navbar-center">
  {profile && profile.accountAddress && 
  <button className="btn1" onClick={()=>UIKit.modal("#modal-sections").show()}><span>Create Bet</span></button>}
  
</div>
<div className="uk-navbar-right">
  {profile && profile.accountAddress ? 
    <p style={{color: "#fff"}}> { profile.accountAddress }</p>
  :
  <button onClick={()=>unlock()} className="btn1"><span>Login</span></button>
  }

</div>

</nav>
<div style={{paddingTop: "150px", height: "100vh"}}>
  <div className="uk-container">
    {children}
  </div>
</div>
<CreateBet />
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