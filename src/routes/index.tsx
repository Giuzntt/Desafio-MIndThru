import { Routes, Route } from "react-router-dom";
import { LayoutLanding } from "../Layout/LayoutLanding";
import { Home } from "../pages/Home";
import Character from "../pages/Character";

const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutLanding />}>
          <Route path="" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
