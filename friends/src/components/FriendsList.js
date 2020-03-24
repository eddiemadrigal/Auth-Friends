import React from "react";

import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "./FriendsList.css";
import EditFriends from '../EditFriends/EditFriends';

class FriendsList extends React.Component {
  constructor(props){
    super()
  }
  state = {

    friends: []
  };

  componentDidMount() {
    this.getData();
    console.log(props)
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  formatData = () => {
    const formattedData = [];
    console.log(this.state.friends);
    this.state.friends.forEach((friend, index, arr) => {
      formattedData.push({
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email
      });
    });
    return formattedData;
  };

  deleteFriend = (e, id) => {
    e.preventDefault()
    console.log("deleteFriend")

    // add in our login api call
    axiosWithAuth()
      .delete(`/friends/${id}`, this.friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const friends = this.formatData();
    console.log(friends);
    return (
      <div className="friends">
        <div className="title">
          <h1>Friends</h1>
        </div>
        {!this.props.isLoading && (
          <div className="spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data...</p>
          </div>
        )}

        {friends.length > 0 && (
          <div className="friend">
            <EditFriends />

            {friends.map(friend => (
              <div key={friend.id} className="one-friend">
                <p>{friend.name}</p>
                <p>age: {friend.age}</p>
                <p>email: {friend.email}</p>
                <p>id: {friend.id}</p>
                <form onSubmit={this.deleteFriend}>
                  <div className="button">
                    <button value="Delete">Delete</button>
                  </div>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default FriendsList;