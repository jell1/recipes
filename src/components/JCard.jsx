import React from "react";
import "../css/JCard.scss";

// reusable card component
function JCard({ children, width, height }) {
	return (
		<div
			className='j-card bg-2'
			style={{
				width,
				height,
			}}>
			<div className='j-card-header'>{children}</div>
		</div>
	);
}

export default JCard;
