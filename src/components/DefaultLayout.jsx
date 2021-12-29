import React, { useState, useEffect } from "react";
import NavTopBar from "./NavTopBar";

function DefaultLayout({ children, prefersDarkMode, setPrefersDarkMode }) {
	return (
		<div className='default-layout'>
			<NavTopBar
				prefersDarkMode={prefersDarkMode}
				setPrefersDarkMode={setPrefersDarkMode}
			/>
			<div className='default-layout-component'>{children}</div>
		</div>
	);
}

export default DefaultLayout;
