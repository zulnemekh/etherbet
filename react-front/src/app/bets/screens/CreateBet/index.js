import React from 'react';
import { withFormik } from 'formik';
import enhancers from './enhancers';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CreateBet(props) {
  const classes = useStyles();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
  } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Bet
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="player1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player1}
                variant="outlined"
                required
                fullWidth
                id="player1"
                label="Player 1"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="player2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player2}
                variant="outlined"
                required
                fullWidth
                id="player2"
                label="Player 2"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  value={values.category}
                  onChange={handleChange}
                  autoWidth={true}
                  inputProps={{
                    name: 'category',
                    id: 'category',
                  }}
                >
                  <MenuItem disabled value='choose'>
                    <em>Choose Category</em>
                  </MenuItem>
                  <MenuItem value='Category1'>Category1</MenuItem>
                  <MenuItem value='Category2'>Category2</MenuItem>
                  <MenuItem value='Category3'>Category3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox 
                  value="allowExtraEmails" 
                  color="primary" />}
                label="Available"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
      
      
    </Container>
  );
}

const withForm = withFormik({
  mapPropsToValues: () => ({ 
    player1: '',
    player2: '',
    description: '',
    isAvailable: false,
    category: 'choose',
    closeTime: '1570917077'
  }),


  handleSubmit: (values, {props: { createBet }}) => createBet(values),

  displayName: 'BasicForm',
})(CreateBet)

export default enhancers.redux(withForm);