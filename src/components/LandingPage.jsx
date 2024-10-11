import { useState } from "react";
import Toolbar from "./Toolbar";

export default function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div>복습 열심히 합시다.</div>
    </div>
  );
}
