import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <Typography variant="h6">
            FIREHOUSE MAGAZINE
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
