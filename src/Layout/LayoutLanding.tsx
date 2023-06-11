import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const LayoutLanding = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </>
);
