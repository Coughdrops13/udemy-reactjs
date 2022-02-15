import React from 'react';
import styles from './User.module.css';

const User = props => {

  return (
    <div>
      <form>
        <label>Username</label>
        <input />
        <label>Age (Years)</label>
        <input />
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
};

export default User;