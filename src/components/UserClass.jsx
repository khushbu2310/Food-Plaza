import React, { PureComponent } from "react";

class UserClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { name, id } = this.props;

    return (
      <div className="p-2">
        <h3>Name: {name}</h3>
        <h3>Id: {id}</h3>
        <h3>Contact: khushbu@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
