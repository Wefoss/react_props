import React from "react";

const Cart = ({ users }) => {
  const filterUsers = users.filter((el) => el.isSelected);
  let cartForeach = ({fname, id}) =>  <p key={id}>{fname}</p>
  return (
    <div>
      {filterUsers.map(cartForeach)}
    </div>
  );
}

export default Cart;
