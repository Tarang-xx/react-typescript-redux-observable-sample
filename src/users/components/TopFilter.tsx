// src/components/Hello.tsx

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const cssClasses = require('./TopFilter.css');

export interface IProps {
  departmentsName:any
  onDepartmentChange:any
}
const styles = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TopFilter(props:any) { 
  const { classes } = props;

  return (
    <form className={classes.root} autoComplete="off">
    <div className={cssClasses.flexContainer}>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Departments</InputLabel>
        <Select   
          name={props.selectedDepName}       
          value={props.selectedDepName}
          onChange={props.handleDepartmentChange}
        >         
          {props.departmentsList.map((dep: any, index: string) => <MenuItem value={dep} key={index}>{dep}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">UserID</InputLabel>
        <Select
          value={props.selectedUserId}
          onChange={props.handleUserChange}
        >         
          {props.userIds.map((uid: any, index: string) => <MenuItem value={uid} key={index}>{uid}</MenuItem>)}
        </Select>
      </FormControl>
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button}
        onClick={props.handleGetDetails}
      >
        GetDetails
      </Button>
      <Button variant="contained" className={classes.button}   onClick={props.handleClear} >
        Clear
      </Button>
      </div>
    </form>

  );
}


export default withStyles(styles)(TopFilter);

