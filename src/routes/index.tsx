import { Routes, Route } from "react-router-dom";
import { LayoutLanding } from "../Layout/LayoutLanding";

import Character from "../pages/Character";
import Comics from "../pages/Comics";
import Home from "../pages/Home";

const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutLanding />}>
          <Route path="" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comic/:id" element={<Comics />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
