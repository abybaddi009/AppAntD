import React from "react";

import { ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";

import Routes from "./NavRoutes";

import BottomNav from "./Nav/BottomNav";

export default function App() {
  return (
    <ConfigProvider locale={enUS}>
      <Routes />
    </ConfigProvider>
  );
}
