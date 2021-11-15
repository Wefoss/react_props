import React, { Component } from "react";
import UserItem from "../UserItem";

class UserCart extends Component {
  swithLight = (id) => {
    const { users } = this.props;
    const sliceTail = JSON.parse(JSON.stringify(users));
    sliceTail.map((user) =>
      user.id === id ? (user.isLoad = !user.isLoad) : user.isLoad
    );
    this.props.setMainUsers(sliceTail);
  };

  crealeLists = ({ fname, id, isLoad }) => (
    <UserItem
      key={id}
      name={fname}
      id={id}
      isOnLight={isLoad}
      onLight={this.swithLight}
    />
  );

  render() {
    const { users } = this.props;
    return (
      <section>
        <ul>{users.map(this.crealeLists)}</ul>
      </section>
    );
  }
}

export default UserCart;
