import { Logo, Nav } from "../styles/layout/Nav.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

export const NavBar = () => {
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png" />
          </a>
        </div>
      </Nav>
    </>
  );
};
