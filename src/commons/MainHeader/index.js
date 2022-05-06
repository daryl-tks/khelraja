import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Image, Avatar } from "antd";
import Logo from "@assets/Images/suki_full_logo.png";
import { UserOutlined } from "@ant-design/icons";
import "./styles.scss";

import { useDispatch } from "react-redux";
import { actionCreators as actions } from "@store/reducers/auth";

const MainHeader = () => {
  const dispatch = useDispatch();
  const { logout } = actions;

  return (
    <Layout.Header className="main-header">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={[]}>
        <Menu.Item key="1" disabled className="menu-logo">
          <div className="logo-container">
            <Image className="logo" preview={false} width={150} src={Logo} />
          </div>
        </Menu.Item>

        <Menu.SubMenu
          key="/profile"
          style={{ float: "right" }}
          title={<Avatar size="large" icon={<UserOutlined />} />}
        >
          <Menu.Item>
            <NavLink to="/profile">My Profile</NavLink>
          </Menu.Item>

          <Menu.Item>
            <NavLink to="/settings">Settings</NavLink>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item onClick={() => dispatch(logout())}>Logout</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Header>
  );
};

export default MainHeader;
