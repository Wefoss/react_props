import React, { Component } from "react";
import UserItem from "../UserItem";

class UsersList extends Component {
  swithLight = (id) => {
    const { users } = this.props;
    const sliceTail = JSON.parse(JSON.stringify(users));
    sliceTail.map((user) =>
      user.id === id ? (user.isSelected = !user.isSelected) : user.isSelected
    );
    this.props.setMainUsers(sliceTail);
  };

  crealeLists = ({ fname, id, isSelected }) => (
    <UserItem
      key={id}
      name={fname}
      id={id}
      isOnLight={isSelected}
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

export default UsersList;
