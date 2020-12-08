import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUser } from '../usersSlice';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type UsersSelectProps = {
  handleChange: any;
  // handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const UsersSelect: React.FC<UsersSelectProps> = ({ handleChange }) => {
  const users = useSelector(selectAllUser);
  const classes = useStyles();

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>user</InputLabel>
      <Select onChange={handleChange}>
        <MenuItem value=""></MenuItem>
        {usersOptions}
      </Select>
    </FormControl>
  );
};
