import React, { PureComponent } from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      // id: "userId",
    };
  }

  // async componentDidMount() {
  //   const userData = await fetch("https://api.github.com/users/khushbu2310");
  //   const userDataJson = await userData.json();
  //   console.log(userDataJson);
  //   this.setState({
  //     username: userDataJson.login,
  //     id: userDataJson.id,
  //   });
  // }

  render() {
    const { username, id } = this.state;

    return (
      <div className="m-4 p-4 rounded-md bg-green-100 w-max">
        <h1>Contact Us</h1>
        {/* <UserClass name={username} id={id} /> */}

        <form className="flex items-center">
          <input
            type="text"
            placeholder="Name"
            className="border border-black p-2 m-2"
          />
          <input
            type="text"
            placeholder="Message"
            className="border border-black p-2"
          />
          <button className="bg-gray-600 text-white rounded-md m-2 p-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
