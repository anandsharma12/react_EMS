import { data } from "autoprefixer";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = (props) => {
  const [username, setUsername] = useContext(AuthContext);
  console.log(username.employees);
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  console.log(data);
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {" "}
          {username.employees.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
