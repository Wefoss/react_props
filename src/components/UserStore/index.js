import { Component } from "react";
import Cart from "../UserCart";
import UsersList from "../UsersList";

const usersBD = [
  { fname: "Arya", id: 1 },
  { fname: "John", id: 2 },
  { fname: "Dog", id: 3 },
  { fname: "Davos", id: 4 },
  { fname: "Dayneris stormborn", id: 5 },
  { fname: "Thirion", id: 6 },
];

class UserStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersBD.map((el) => ({ ...el, isLoad: false })),
    };
  }

  setUsersState = (items) => {
    this.setState({
      users: items,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <Cart users={users} />
        </header>
        <main>
          <UsersList users={users} setMainUsers={this.setUsersState} />
        </main>
      </>
    );
  }
}

export default UserStore;
