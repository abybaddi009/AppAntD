import React, { FC } from "react";
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
  Routes
} from "react-router-dom";

import { Badge, NavBar, TabBar } from "antd-mobile";

import {
  FaHome,
  FaFileInvoiceDollar,
  FaBell,
  FaUserCircle,
  FaUsersCog,
  FaCog
} from "react-icons/fa";

import UserHome from "./Pages/UserHome";
import Profile from "./Pages/Profile";

function Todo() {
  return <div>Orders</div>;
}

function Message() {
  return <div>Notifications</div>;
}

function Services() {
  return <div>Services</div>;
}

const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "Home",
      icon: <FaHome />
    },
    {
      key: "/orders",
      title: "Orders",
      icon: <FaFileInvoiceDollar />,
      badge: "9+"
    },
    {
      key: "/services",
      title: "Services",
      icon: <FaCog />
    },
    {
      key: "/notifications",
      title: "Notifications",
      icon: <FaBell />,
      badge: "9+"
    },
    {
      key: "/profile",
      title: "Account",
      icon: <FaUserCircle />,
      badge: Badge.dot
    }
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
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

export default () => {
  return (
    <Router initialEntries={["/home"]}>
      <div>
        <div>
          <NavBar>Artful Cut</NavBar>
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<UserHome />} />
            <Route path="/orders" element={<Todo />} />
            <Route path="/services" element={<Services />} />
            <Route path="/notifications" element={<Message />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    </Router>
  );
};
