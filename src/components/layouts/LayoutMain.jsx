import { Outlet } from "react-router-dom";

import { MainHeader } from "../ui/MainHeader";

const LayoutMain = () => {
  return (
    <>
      <MainHeader />

      <Outlet />
    </>
  );
};
export default LayoutMain;
