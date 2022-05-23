import { useState } from "react";
import { NavItems } from "../../data/NavItems";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
