import React from "react";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from "antd-mobile-icons";

const tabs = [
  {
    key: "home",
    title: "Home",
    icon: <AppOutline />,
    badge: Badge.dot
  },
  {
    key: "orders",
    title: "Orders",
    icon: <UnorderedListOutline />,
    badge: "5"
  },
  {
    key: "services",
    title: "Services",
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+"
  },
  {
    key: "profile",
    title: "Account",
    icon: <UserOutline />
  }
];

export default () => {
  return (
    <TabBar
      style={{
        background: "#ffffff",
        bottom: 0,
        left: 0,
        position: "fixed",
        zIndex: 5,
        width: "100%"
      }}
    >
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </TabBar>
  );
};
