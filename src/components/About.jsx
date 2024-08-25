import React, { PureComponent } from "react";
import UserContext from "../utils/userContext";

class About extends PureComponent {
  render() {
    return (
      <div className="m-4 p-4 rounded-md bg-green-100 w-max">
        <h1>About Us</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="font-bold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <div className="p-2">
          <h2>Khushbu Patel</h2>
          <h2>Software Development Engineer</h2>
          <h2>Skills: Javascript, React, Java</h2>
        </div>
      </div>
    );
  }
}

export default About;
