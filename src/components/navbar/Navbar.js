import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link
				to="/"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}>
				<GoBook size={60} style={{ color: "#0a7de9" }} />
				<h1 style={{ color: "#0a7de9" }}>BOOK FINDER</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={() => setClick(!click)}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
