import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";

import "../css/NavTopBar.scss";

import { useAppContext } from "./AppContext";

function NavTopBar({ prefersDarkMode, setPrefersDarkMode }) {
	const { user, setUser } = useAppContext();
	const [profileOpen, setProfileOpen] = useState(false);

	const openDrawer = () => {
		console.log("hi");
	};

	return (
		<div className='nav-top-bar'>
			<div className='flex-vert-center flex-end'>
				<Button variant='outline-primary' onClick={openDrawer}>
					<FaRegUserCircle />
				</Button>
			</div>
		</div>
	);
}

export default NavTopBar;
