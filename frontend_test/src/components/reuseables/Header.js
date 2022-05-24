import React from "react";
import { PageHeader,Button } from "antd";
import { useSelector } from "react-redux";
function Header() {
    const AuthData = useSelector((store)=>store.auth)
    console.log(AuthData)

const logOutUser =()=>{
    localStorage.removeItem('token')
    window.location.assign('/')
}
  return (
    <PageHeader
      title="Title"
      className="site-page-header"
      subTitle="This is a subtitle"
      extra={[
        <Button key={1} onClick={logOutUser}>LogOut</Button>,
        
      ]}
      avatar={{
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
      }}
    ></PageHeader>
  );
}

export default Header;
