import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Image } from "antd";
import "./styles.scss";
import Logo from "@assets/Images/suki_full_logo.png";

import {
  GoldFilled,
  DashboardFilled,
  NotificationFilled,
} from "@ant-design/icons";

const MainSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (broken) {
      setCollapsed(true);
    }
  }, [broken]);

  const onCollapse = () => {
    if (broken) {
      setDrawerVisible((item) => !item);
    } else {
      setCollapsed((item) => !item);
    }
  };

  return (
    <>
      <Layout.Sider
        width={250}
        collapsible
        breakpoint="md"
        collapsed={collapsed}
        className="main-sider"
        onCollapse={() => onCollapse()}
        collapsedWidth={broken ? 0 : 70}
        onBreakpoint={(broken) => setBroken(broken)}
      >
        <Menu
          mode="inline"
          className="menu-sider"
          defaultSelectedKeys={["/dashboard"]}
        >
          <Menu.Item
            icon={<DashboardFilled style={{ fontSize: 16 }} />}
            key="/dashboard"
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            icon={<NotificationFilled style={{ fontSize: 16 }} />}
            key="/notifications"
          >
            Notification
          </Menu.Item>

          <Menu.Item
            icon={<GoldFilled style={{ fontSize: 16 }} />}
            key="/distributors"
          >
            Distributors
          </Menu.Item>
        </Menu>
      </Layout.Sider>

      <Drawer
        key={"left"}
        placement="left"
        className="sider-drawer"
        closable={true}
        title={
          <Image className="logo" preview={false} width={150} src={Logo} />
        }
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <Menu
          mode="inline"
          className="menu-sider"
          defaultSelectedKeys={["/dashboard"]}
        >
          <Menu.Item
            icon={<DashboardFilled style={{ fontSize: 16 }} />}
            key="/dashboard"
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            icon={<NotificationFilled style={{ fontSize: 16 }} />}
            key="/notifications"
          >
            Notification
          </Menu.Item>

          <Menu.Item
            icon={<GoldFilled style={{ fontSize: 16 }} />}
            key="/distributors"
          >
            Distributors
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default MainSider;
