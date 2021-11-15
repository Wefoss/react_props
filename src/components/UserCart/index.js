import React from "react";

function Cart({ users }) {
  const filterUsers = users.filter((el) => el.isLoad);
  return (
    <div>
      {filterUsers.map(({ fname, id }) => (
        <p key={id}>{fname}</p>
      ))}
    </div>
  );
}

export default Cart;
