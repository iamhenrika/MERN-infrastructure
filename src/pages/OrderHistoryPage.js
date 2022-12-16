import React from "react";
import { checkToken } from "../utilities/users-service";

export default function OrderHistory(props) {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
  };
  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
