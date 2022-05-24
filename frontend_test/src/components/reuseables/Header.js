import React from "react";
import { PageHeader, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../action/types";
function Header() {
  const AuthData = useSelector((store) => store.auth);
  const dispatch = useDispatch()
  console.log(AuthData);

  const logOutUser = () => {
    localStorage.removeItem("token");
    dispatch({type:Logout})
    window.location.assign("/");
  };
  return (
    <PageHeader
      title={AuthData.data.username}
      className="site-page-header"
      subTitle={AuthData.data.email}
      extra={[
        <Button key={1} onClick={logOutUser}>
          LogOut
        </Button>,
      ]}
      avatar={{
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
      }}
    ></PageHeader>
  );
}

export default Header;
