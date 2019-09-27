import React from 'react';
import enhancers from './enhancers';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar({profile, children, unlock}) {
  const classes = useStyles();

  const { 
    accountAddress, 
    isMetamaskInstalled 
  } = profile;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EtherBet
          </Typography>
          {
            isMetamaskInstalled 
              && !accountAddress 
                && <Button 
                    onClick={() => unlock() }
                    color="inherit">Unlock</Button>
          }
          {
            accountAddress && accountAddress
          }
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        { children }
      </Container>
    </div>
  );
}

export default enhancers.redux(ButtonAppBar);