import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend, deleteFriend }) => {
  return (
    <div>
      {friend.name} {friend.email} {friend.age}
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
      <Link to={`/friends/edit/${friend.id}`}>Edit</Link>
    </div>
  );
};

export default FriendCard;