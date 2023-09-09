import { React, useState, useNavigate, useLocation, useEffect } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
function Appheader() {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);
  return <div>
      <h1>
        Hello
      </h1>
  </div>;
}

export default Appheader;
