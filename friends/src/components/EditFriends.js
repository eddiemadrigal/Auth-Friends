import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const EditFriends = props => {

  useEffect(() => {
    // console.log(props.match.params.id);
    let id = props.match.params.id;
    getFriendById(id);
  }, [])

  const getFriendById = id => {
    axios
      .get(`http://localhost:5000/api/friends/${id}`, {
        params: {
          token: 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'
        }
      })
      .then( d => {
        console.log(d);
      })
      .catch( err => console.log(err))
  }

  return (
    <form>
      <input
        name="name"
        placeholder="name"/>
      <input
        name="email"
        placeholder="email"/>
      <input name="age" 
        placeholder="age"/>
      <button type="submit">Edit Friend</button>
    </form>
  );
};

export default withRouter(EditFriends);