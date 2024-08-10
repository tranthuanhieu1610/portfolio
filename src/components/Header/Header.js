import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src="/logo.png" height={40} width={40} />{" "}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Ivan Teo
        </span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Highlight</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/hieuhoicoi">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/cl1t0r1s.ivanteo/">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_cl1t0r1s_">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
