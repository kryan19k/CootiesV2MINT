import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";
import "./header.css";
import { BsTwitter } from "react-icons/bs";
import { ReactComponent as OutlineBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn-outline.svg";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import { SiDiscord } from "react-icons/si";
import { BsList } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = ({ ConnectHandler }) => {
    const [getSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const offset = window.scrollY;
            if (offset > 4) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    });

    return (
        <>
            <div className={getSticky ? "header-part sticky" : "header-part"}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <BsList />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto header-middle-nav">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                                <a href="#about" className="nav-link">
                                    About
                                </a>
                                <a href="#roadmap" className="nav-link">
                                    Roadmap
                                </a>
                                <a href="#team" className="nav-link">
                                    Team
                                </a>
                                <a href="#faq" className="nav-link">
                                    Faq
                                </a>
                                <NavLink to="/team" className="nav-link">
                                    <BsTwitter />
                                </NavLink>
                            </Nav>
                            <Nav className="ms-auto header-right-nav">
                                <button className="btn-outline-1">
                                    <OutlineBtnOverlay />
                                    <SiDiscord />
                                    JOIN
                                </button>
                                <button
                                    className="btn-bg-1"
                                    onClick={ConnectHandler}
                                >
                                    <BgBtnOverlay />
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.2902 4.25816H3.05804C2.03869 4.25816 1.69891 3.74848 1.69891 3.4087L15.2902 2.13452V0.860334C15.2902 0.35066 14.7805 -0.0740678 14.2709 0.0108778L1.44408 2.30441C0.594619 2.4743 0 3.15387 0 4.00332V15.3011C0 16.2355 0.764511 17 1.69891 17H15.2902C16.2246 17 16.9891 16.2355 16.9891 15.3011V5.95707C16.9891 5.02267 16.2246 4.25816 15.2902 4.25816ZM14.016 11.9033C13.3365 11.9033 12.7418 11.3086 12.7418 10.6291C12.7418 9.94951 13.3365 9.35489 14.016 9.35489C14.6956 9.35489 15.2902 9.94951 15.2902 10.6291C15.2902 11.3086 14.6956 11.9033 14.016 11.9033Z"
                                            fill="white"
                                        />
                                    </svg>
                                    CONNECT
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
