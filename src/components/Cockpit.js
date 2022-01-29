import React, { useEffect, useContext } from "react";
import AuthContext from "./authContext";

const Cockpit = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <h1 className="font-bold text-2xl m-5">Hi, I'm React App</h1>

      <button
        className="bg-gray-800 text-white p-5 m-5 rounded-lg "
        onClick={props.toggler}
      >
        Person Toggler
      </button>

      <button
        className="bg-gray-800 text-white p-5 m-5 rounded-lg"
        onClick={authContext.login}
      >
        Login in
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
