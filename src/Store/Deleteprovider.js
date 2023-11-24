import React from "react";
import Deletecontext from "./Deletecontext";

function deletehandler(id) {
  fetch(
    `https://react-api-1b936-default-rtdb.firebaseio.com/movies/${id}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

const valuesobj = {
    deleteMovie: deletehandler,
};

const Deleteprovider = (props) => {
  return (
    <Deletecontext.Provider value={valuesobj}>
      {props.children}
    </Deletecontext.Provider>
  );
};
export default Deleteprovider;
