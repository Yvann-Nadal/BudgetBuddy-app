import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRouter;
