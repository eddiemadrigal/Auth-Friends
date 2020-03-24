import React, {useState} from 'react';

const FriendForm = ({ submitFriend, initialValues }) => {
  const [friend, setFriend] = useState(initialValues || {name: "", email: "", age: ""});
  const handleChange = event => setFriend({...friend, [event.target.name]: event.target.value});
  const handleSubmit = event => {
    event.preventDefault();
    submitFriend(friend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name"
             placeholder="name"
             value={friend.name}
             onChange={handleChange} />
      <input name="email"
             placeholder="email"
             value={friend.email}
             onChange={handleChange} />
      <input name="age"
             placeholder="age"
             value={friend.age}
             onChange={handleChange} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;