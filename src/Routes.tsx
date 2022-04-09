import { Routes, Route } from "react-router-dom";

import UserHome from "./Pages/UserHome";
import Profile from "./Pages/Profile";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};
